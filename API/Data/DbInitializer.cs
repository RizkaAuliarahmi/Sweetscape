using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class DbInitializer 
    //static means we can use the class without actually initializing a new instance of this particular
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "aurilia",
                    Email = "aurilia@test.com"
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");

                var admin = new User
                {
                    UserName = "admin",
                    Email = "admin@test.com"
                };

                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(admin, new[] {"Member","Admin"});
            }

            //check to see if there any product in database. if there we dont execute code
            if (context.Products.Any()) return;

            var productCategory = new List<ProductCategory>
            {
                new ProductCategory
                {
                    Name = "Cupcake",
                    PictureUrl = "/images/category/cupcake.jpg" 
                },
                new ProductCategory
                {
                    Name = "Donut",
                    PictureUrl = "/images/category/donut.jpg" 
                },
                 new ProductCategory
                {
                    Name = "Slice Cake",
                    PictureUrl = "/images/category/slice cake.jpg" 
                },
                 new ProductCategory
                {
                    Name = "Macaroon",
                    PictureUrl = "/images/category/macaroon.jpg" 
                }
            };

            var products = new List<Product>
            {
	        	new Product
                {
                    Name = "Vanilla Cupcake",
                    AllergenInformation =
                        "Gluten (from flour), eggs, milk, and butter; individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Enjoy our cupcakes at their best within 3 days of purchase for optimal freshness; store in a cool, dry place away from direct sunlight, and refrigerate if not consumed within this timeframe.",
                    Price = 24000,
                    PictureUrl = "/images/products/cupcake (2).jpg",
                    ProductCategory = productCategory[0],
                    QuantityInStock = 33,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
                new Product
                {
                    Name = "Chocolate Cupcake",
                    AllergenInformation = "Gluten (from flour), eggs, milk, cocoa, and butter; individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Enjoy our cupcakes at their best within 3 days of purchase for optimal freshness; store in a cool, dry place away from direct sunlight, and refrigerate if not consumed within this timeframe.",
                    Price = 32000,
                    PictureUrl = "/images/products/cupcake (1).jpg",
                    ProductCategory = productCategory[0],
                    QuantityInStock = 28,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
                new Product
                {
                    Name = "Strawberry Cupcake",
                    AllergenInformation = "Gluten (from flour), eggs, milk, and butter; individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Enjoy our cupcakes at their best within 3 days of purchase for optimal freshness; store in a cool, dry place away from direct sunlight, and refrigerate if not consumed within this timeframe.",
                    Price = 32000,
                    PictureUrl = "/images/products/cupcake (3).jpg",
                    ProductCategory = productCategory[0],
                    QuantityInStock = 28,
                    Date = new DateTime(2023, 12, 27, 0, 0, 0, DateTimeKind.Utc),
                },
                new Product
                {
                    Name = "Lemon Donut",
                    AllergenInformation =
                        "Wheat (from flour), eggs, milk, and butter; individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Shelf life for our donuts is approximately 2 days when stored in an airtight container at room temperature; for extended freshness, refrigerate and consume within 4 days, following the storage instructions provided.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (8).jpg",
                    ProductCategory = productCategory[1],
                    QuantityInStock = 100,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
		        new Product
                {
                    Name = "Tiramisu Donut",
                    AllergenInformation =
                        "wheat (from flour), eggs, dairy, and nuts; individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Shelf life for our donuts is approximately 2 days when stored in an airtight container at room temperature; for extended freshness, refrigerate and consume within 4 days, following the storage instructions provided.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (10).jpg",
                    ProductCategory = productCategory[1],
                    QuantityInStock = 100,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
		        new Product
                {
                    Name = "Milk Donut",
                    AllergenInformation =
                        "Wheat (from flour), eggs, and dairy (from milk and butter); individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Shelf life for our donuts is approximately 2 days when stored in an airtight container at room temperature; for extended freshness, refrigerate and consume within 4 days, following the storage instructions provided.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (5).jpg",
                    ProductCategory = productCategory[1],
                    QuantityInStock = 100,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
		        new Product
                {
                    Name = "Matcha Donut",
                    AllergenInformation =
                        "Wheat (from flour), eggs, milk, and butter; individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Shelf life for our donuts is approximately 2 days when stored in an airtight container at room temperature; for extended freshness, refrigerate and consume within 4 days, following the storage instructions provided.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (4).jpg",
                    ProductCategory = productCategory[1],
                    QuantityInStock = 100,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
		        new Product
                {
                    Name = "Vanilla Donut",
                    AllergenInformation =
                        "Gluten (from flour), eggs, milk, and butter; individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Shelf life for our donuts is approximately 2 days when stored in an airtight container at room temperature; for extended freshness, refrigerate and consume within 4 days, following the storage instructions provided.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (2).jpg",
                    ProductCategory = productCategory[1],
                    QuantityInStock = 100,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
	        	new Product
                {
                    Name = "Almond Donut",
                    AllergenInformation =
                        "Almonds, gluten (from flour), eggs, milk, soy, and other potential allergens; individuals with allergies should review the ingredient list carefully.",
                    ShelfLife = "Shelf life for our donuts is approximately 2 days when stored in an airtight container at room temperature; for extended freshness, refrigerate and consume within 4 days, following the storage instructions provided.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (7).jpg",
                    ProductCategory = productCategory[1],
                    QuantityInStock = 100,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
	        	new Product
                {
                    Name = "Coconut Donut",
                    AllergenInformation =
                        "Gluten (from flour), eggs, milk, soy, and nuts; individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Shelf life for our donuts is approximately 2 days when stored in an airtight container at room temperature; for extended freshness, refrigerate and consume within 4 days, following the storage instructions provided.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (6).jpg",
                    ProductCategory = productCategory[1],
                    QuantityInStock = 100,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
	        	new Product
                {
                    Name = "Grape Donut",
                    AllergenInformation =
                        " Wheat (gluten), eggs, milk, and other ingredients; individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Shelf life for our donuts is approximately 2 days when stored in an airtight container at room temperature; for extended freshness, refrigerate and consume within 4 days, following the storage instructions provided.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (1).jpg",
                    ProductCategory = productCategory[1],
                    QuantityInStock = 100,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
	        	new Product
                {
                    Name = "Almond Choco Donut",
                    AllergenInformation =
                        "Almonds, gluten (from flour), eggs, milk, soy, and other potential allergens; individuals with allergies should review the ingredient list carefully.",
                    ShelfLife = "Shelf life for our donuts is approximately 2 days when stored in an airtight container at room temperature; for extended freshness, refrigerate and consume within 4 days, following the storage instructions provided.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (3).jpg",
                    ProductCategory = productCategory[1],
                    QuantityInStock = 100,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
		        new Product
                {
                    Name = "Dark Chocolate Donut",
                    AllergenInformation =
                        "Gluten (from flour), eggs, milk, and soy; individuals with allergies should carefully review the ingredient list for specific details.",
                    ShelfLife = "Shelf life for our donuts is approximately 2 days when stored in an airtight container at room temperature; for extended freshness, refrigerate and consume within 4 days, following the storage instructions provided.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (9).jpg",
                    ProductCategory = productCategory[1],
                    QuantityInStock = 100,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
                new Product
                {
                    Name = "Strawberry Donut",
                    AllergenInformation =
                        "Wheat (gluten), eggs, milk, and soy; individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Shelf life for our donuts is approximately 2 days when stored in an airtight container at room temperature; for extended freshness, refrigerate and consume within 4 days, following the storage instructions provided.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (11).jpg",
                    ProductCategory = productCategory[1],
                    QuantityInStock = 100,
                    Date = new DateTime(2023, 12, 27, 0, 0, 0, DateTimeKind.Utc),
                },
                new Product
                {
                    Name = "Strawberry Slice Cake",
                    AllergenInformation =
                        "Gluten (from flour), eggs, milk, and other potential allergens; individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Enjoy the delightful Slice Cake within its recommended shelf life of 5 days when stored in a cool, dry place; for optimal freshness, refrigerate in an airtight container as per the provided storage instructions.",
                    Price = 40000,
                    PictureUrl = "/images/products/slice cake (2).jpg",
                    ProductCategory = productCategory[2],
                    QuantityInStock = 84,
                    Date = new DateTime(2023, 12, 27, 0, 0, 0, DateTimeKind.Utc),
                },
                new Product
                {
                    Name = "Carrot Slice Cake",
                    AllergenInformation =
                        "Nuts, eggs, and wheat (gluten); individuals with allergies should review the ingredient list for potential allergens.",
                    ShelfLife = "Enjoy the delightful Slice Cake within its recommended shelf life of 5 days when stored in a cool, dry place; for optimal freshness, refrigerate in an airtight container as per the provided storage instructions.",
                    Price = 40000,
                    PictureUrl = "/images/products/slice cake (3).jpg",
                    ProductCategory = productCategory[2],
                    QuantityInStock = 84,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
                new Product
                {
                    Name = "Coconut Carrot Slice Cake",
                    AllergenInformation = "Coconut, nuts, and other potential allergens; individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Enjoy the delightful Slice Cake within its recommended shelf life of 5 days when stored in a cool, dry place; for optimal freshness, refrigerate in an airtight container as per the provided storage instructions.",
                    Price = 40000,
                    PictureUrl = "/images/products/slice cake (1).jpg",
                    ProductCategory = productCategory[2],
                    QuantityInStock = 84,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
                new Product
                {
                    Name = "Cheese Slice Cake",
                    AllergenInformation =
                        "Dairy (from cheese), wheat (flour), eggs, and other potential allergens; individuals with allergies should review the ingredient list carefully.",
                    ShelfLife = "Enjoy the delightful Slice Cake within its recommended shelf life of 5 days when stored in a cool, dry place; for optimal freshness, refrigerate in an airtight container as per the provided storage instructions.",
                    Price = 40000,
                    PictureUrl = "/images/products/slice cake (4).jpg",
                    ProductCategory = productCategory[2],
                    QuantityInStock = 84,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
                new Product
                {
                    Name = "Choco Cherry Slice Cake",
                    AllergenInformation =
                        "Gluten (from flour), eggs, milk, and tree nuts (cherry); individuals with allergies should carefully review the ingredient list.",
                    ShelfLife = "Enjoy the delightful Slice Cake within its recommended shelf life of 5 days when stored in a cool, dry place; for optimal freshness, refrigerate in an airtight container as per the provided storage instructions.",
                    Price = 40000,
                    PictureUrl = "/images/products/slice cake (5).jpg",
                    ProductCategory = productCategory[2],
                    QuantityInStock = 84,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
                new Product
                {
                    Name = "Colorful Sweet Macaroon",
                    AllergenInformation =
                        "Almonds, eggs, and other potential allergens; individuals with allergies should review the ingredient list carefully.",
                    ShelfLife = "Enjoy the delightful Macaroons within two weeks of purchase when stored in an airtight container in a cool, dry place; follow storage instructions for optimal freshness",
                    Price = 154000,
                    PictureUrl = "/images/products/macaroon (1).jpg",
                    ProductCategory = productCategory[3],
                    QuantityInStock = 20,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
                new Product
                {
                    Name = "Rainbow Mini Macaroon",
                    AllergenInformation =
                        "Almonds, eggs, and other potential allergens; individuals with allergies should review the ingredient list carefully.",
                    ShelfLife = "Enjoy the delightful Macaroons within two weeks of purchase when stored in an airtight container in a cool, dry place; follow storage instructions for optimal freshness",
                    Price = 59000,
                    PictureUrl = "/images/products/macaroon (2).jpg",
                    ProductCategory = productCategory[3],
                    QuantityInStock = 16,
                    Date = new DateTime(2023, 10, 27, 0, 0, 0, DateTimeKind.Utc),
                },
                new Product
                {
                    Name = "Strawberry Mini Macaroon",
                    AllergenInformation =
                        "Almonds, eggs, and other potential allergens; individuals with allergies should review the ingredient list carefully.",
                    ShelfLife = "Enjoy the delightful Macaroons within two weeks of purchase when stored in an airtight container in a cool, dry place; follow storage instructions for optimal freshness",
                    Price = 200000,
                    PictureUrl = "/images/products/macaroon (3).jpg",
                    ProductCategory = productCategory[3],
                    QuantityInStock = 19,
                    Date = new DateTime(2023, 12, 27, 0, 0, 0, DateTimeKind.Utc),
                },
            };
            
            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}