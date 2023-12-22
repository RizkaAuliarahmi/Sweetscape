using System.ComponentModel.DataAnnotations;
using API.Entities;

namespace API.DTOs
{
    public class UpdateProductDto
    {
        public int Id { get; set; }
        
        [Required]
        public string Name { get; set; }

        [Required]
        public string AllergenInformation { get; set; }

        [Required]
        public string ShelfLife { get; set; }

        [Required]
        public long Price { get; set; }

        [Required]
        public IFormFile  File { get; set; }

        [Required]
        public int QuantityInStock { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        public int ProductCategoryId { get; set; }
    }
}