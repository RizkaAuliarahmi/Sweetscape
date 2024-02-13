using System.Text;
using API.Data;
using API.Entities;
using API.Middleware;
using API.RequestHelpers;
using API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
// Adds support for controllers
builder.Services.AddControllers();
builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

// Adds support for Swagger
builder.Services.AddSwaggerGen(c => 
{
    // Configures Swagger/OpenAPI generation
    var jwtSecurityScheme = new OpenApiSecurityScheme
    {
        BearerFormat = "JWT",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = JwtBearerDefaults.AuthenticationScheme,
        Description = "Put Bearer + your token in the box below",
        Reference = new OpenApiReference
        {
            Id = JwtBearerDefaults.AuthenticationScheme,
            Type = ReferenceType.SecurityScheme
        }
    };

    c.AddSecurityDefinition(jwtSecurityScheme.Reference.Id, jwtSecurityScheme);

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            jwtSecurityScheme, Array.Empty<string>()
        }
    });
});
// Configures Swagger/OpenAPI generation for documenting APIs

builder.Services.AddDbContext<StoreContext>(opt => 
{
    // Configures the application to use SQLite
    opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});

//add CORS support
builder.Services.AddCors();
builder.Services.AddIdentityCore<User>(opt => 
{
    // Configures Identity with custom options
    opt.User.RequireUniqueEmail = true;
})
    .AddRoles<Role>()
    .AddEntityFrameworkStores<StoreContext>();
// Configures Identity with roles and Entity Framework as the store

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt => 
    {
        // Configures JWT Bearer authentication
        opt.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWTSettings:TokenKey"]))
        };
    });

// Adds support for authorization
builder.Services.AddAuthorization();

// Adds scoped service
builder.Services.AddScoped<TokenService>();
builder.Services.AddScoped<ImageService>();

var app = builder.Build();

// Adds custom exception handling middleware
app.UseMiddleware<ExceptionMiddleware>();

//Configure the HTTP request pipeline.
//ordering below is important
if (app.Environment.IsDevelopment())
{
    // Enables Swagger UI in development mode
    app.UseSwagger();
    app.UseSwaggerUI(c => 
    {
        c.ConfigObject.AdditionalItems.Add("persistAuthorization", "true");
    });
}

app.UseDefaultFiles(); //look for www root
app.UseStaticFiles();

app.UseCors(opt =>
{
    // Configures CORS policies
    opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:3000");
});
// Uses authentication middleware
app.UseAuthentication();

// Uses authorization middleware
app.UseAuthorization();

// Maps controllers for handling requests
app.MapControllers();
app.MapFallbackToController("Index", "Fallback");

var scope = app.Services.CreateScope();
//hold of store context service
var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
//hold a logger so we can hold any error we get
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

try
{
    //create database if dont have
   await context.Database.MigrateAsync();
   await DbInitializer.Initialize(context, userManager);

}
catch (Exception ex)
{
    // Logs any errors during database migration
    logger.LogError(ex, "A problem occurred during migration");
}

app.Run();
