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
                    UserName = "bob",
                    Email = "bob@test.com"
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

            var products = new List<Product>
            {
	        	new Product
                {
                    Name = "Vanilla Cupcake",
                    Description =
                        "Vanilla cupcake offer a delightful, tender vanilla-flavored treat in every bite.",
                    Price = 24000,
                    PictureUrl = "/images/products/cupcake (2).jpg",
                    Type = "Cupcake",
                    QuantityInStock = 33
                },
                new Product
                {
                    Name = "Chocolate Cupcake",
                    Description = "Chocolate cupcake tantalize your taste buds with chocolatey delight in every bite.",
                    Price = 32000,
                    PictureUrl = "/images/products/cupcake (1).jpg",
                    Type = "Cupcake",
                    QuantityInStock = 28
                },
                new Product
                {
                    Name = "Lemon Donut",
                    Description =
                        "Lemon donut are a zesty treat, featuring a soft, lemon-flavored pastry that provides a delightful burst of citrusy freshness in every bite.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (8).jpg",
                    Type = "Donut",
                    QuantityInStock = 100
                },
		        new Product
                {
                    Name = "Tiramisu Donut",
                    Description =
                        "Tiramisu donut offer a delicious twist with coffee-infused pastries and creamy mascarpone.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (10).jpg",
                    Type = "Donut",
                    QuantityInStock = 100
                },
		        new Product
                {
                    Name = "Milk Donut",
                    Description =
                        "Milk donut are a classic treat, known for their soft and fluffy texture, often enjoyed with a glass of milk for a comforting and satisfying snack.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (5).jpg",
                    Type = "Donut",
                    QuantityInStock = 100
                },
		        new Product
                {
                    Name = "Matcha Donut",
                    Description =
                        "Matcha donut are a unique and delightful dessert, featuring a green tea-infused pastry with a distinctive earthy flavor and a sweet glaze, perfect for matcha enthusiasts.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (4).jpg",
                    Type = "Donut",
                    QuantityInStock = 100
                },
		        new Product
                {
                    Name = "Vanilla Donut",
                    Description =
                        "Vanilla donut are a timeless delight, offering a simple and classic treat with a soft, vanilla-flavored pastry that appeals to a wide range of tastes.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (2).jpg",
                    Type = "Donut",
                    QuantityInStock = 100
                },
	        	new Product
                {
                    Name = "Almond Donut",
                    Description =
                        "Almond donut are a delightful pastry with a nutty crunch, often featuring a sweet almond glaze for a perfect balance of texture and flavor.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (7).jpg",
                    Type = "Donut",
                    QuantityInStock = 100
                },
	        	new Product
                {
                    Name = "Coconut Donut",
                    Description =
                        "Coconut donut offer a taste of the tropics with their soft, moist pastry and a sweet coconut flavor, making them a delightful treat for coconut enthusiasts.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (6).jpg",
                    Type = "Donut",
                    QuantityInStock = 100
                },
	        	new Product
                {
                    Name = "Grape Donut",
                    Description =
                        "Grape donut are a fruity and unique pastry, filled or flavored with grape essence to provide a burst of grape flavor in every bite.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (1).jpg",
                    Type = "Donut",
                    QuantityInStock = 100
                },
	        	new Product
                {
                    Name = "Almond Choco Donut",
                    Description =
                        "Almond chocolate donut are a delicious combination of rich chocolate and a nutty almond crunch, offering a delightful blend of flavors and textures.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (3).jpg",
                    Type = "Donut",
                    QuantityInStock = 100
                },
		        new Product
                {
                    Name = "Dark Chocolate Donut",
                    Description =
                        "Dark chocolate donut are a decadent treat with a rich, bittersweet chocolate flavor, perfect for those who appreciate the intensity of dark cocoa in a delightful pastry.",
                    Price = 10000,
                    PictureUrl = "/images/products/donut (9).jpg",
                    Type = "Donut",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Colorful Sweet Macaroon",
                    Description =
                        "Colorful sweet macaroon are delightful and visually appealing treats, with a variety of vibrant colors and a perfect balance of sweetness and texture in every bite.",
                    Price = 154000,
                    PictureUrl = "/images/products/macaroon (1).jpg",
                    Type = "Macaroon",
                    QuantityInStock = 20
                },
                new Product
                {
                    Name = "Rainbow Mini Macaroon",
                    Description =
                        "Rainbow mini macaroon are a vibrant and cheerful dessert, featuring an array of bright colors in each delightful, bite-sized treat.",
                    Price = 59000,
                    PictureUrl = "/images/products/macaroon (2).jpg",
                    Type = "Macaroon",
                    QuantityInStock = 16
                },
                new Product
                {
                    Name = "Strawberry Slice Cake",
                    Description =
                        "Strawberry slice cake is a delectable dessert with layers of moist cake and fresh strawberry slices, delivering a burst of fruity sweetness in every bite.",
                    Price = 40000,
                    PictureUrl = "/images/products/slice cake (2).jpg",
                    Type = "Slice Cake",
                    QuantityInStock = 84
                },
                new Product
                {
                    Name = "Carrot Slice Cake",
                    Description =
                        "Carrot slice cake is a flavorful dessert with layers of moist carrot cake, often paired with a creamy frosting, offering a delightful blend of sweetness and spiced warmth.",
                    Price = 40000,
                    PictureUrl = "/images/products/slice cake (3).jpg",
                    Type = "Slice Cake",
                    QuantityInStock = 84
                },
                new Product
                {
                    Name = "Coconut Carrot Slice Cake",
                    Description = "Coconut carrot slice cake is a delightful dessert, combining the moistness of carrot cake with the tropical flavor of coconut, creating a unique and delicious treat.",
                    Price = 40000,
                    PictureUrl = "/images/products/slice cake (1).jpg",
                    Type = "Slice Cake",
                    QuantityInStock = 84
                },
                new Product
                {
                    Name = "Cheese Slice Cake",
                    Description =
                        "Cheese slice cake is a savory and creamy delight, typically made with a rich cheese filling, often enjoyed as a satisfying dessert or a savory snack.",
                    Price = 40000,
                    PictureUrl = "/images/products/slice cake (4).jpg",
                    Type = "Slice Cake",
                    QuantityInStock = 84
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