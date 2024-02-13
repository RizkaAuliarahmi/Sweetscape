using System.ComponentModel.DataAnnotations;
using API.Entities;

namespace API.DTOs
{
    public class UpdateProductDto
    {
        public int Id { get; set; }       
        public string Name { get; set; }
        public string AllergenInformation { get; set; }
        public string ShelfLife { get; set; }
        public long Price { get; set; }
        public IFormFile  File { get; set; }
        public int QuantityInStock { get; set; }
        public DateTime Date { get; set; } = DateTime.UtcNow;
        public int ProductCategoryId { get; set; }
    }
}