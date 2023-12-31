namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string AllergenInformation { get; set; }
        public string ShelfLife { get; set; }
        public long Price { get; set; }
        public string  PictureUrl { get; set; }
        public int QuantityInStock { get; set; }
        public DateTime Date { get; set; }
        public int ProductCategoryId { get; set; }
        public ProductCategory ProductCategory { get; set; }
        public string PublicId { get; set; }
    }
}