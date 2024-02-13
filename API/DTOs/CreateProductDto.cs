using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class CreateProductDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string AllergenInformation { get; set; }

        [Required]
        public string ShelfLife { get; set; }
        
        [Required]
        public long Price { get; set; }
        public IFormFile  File { get; set; }

        [Required]
        public int QuantityInStock { get; set; }

        public DateTime Date { get; set; } = DateTime.UtcNow;

        [Required]
        public int ProductCategoryId { get; set; }
        
    }
}