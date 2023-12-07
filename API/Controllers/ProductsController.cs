using API.Data;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<PagedList<Product>>> GetProducts([FromQuery]ProductParams productParams)
        {
            var query = _context.Products
            .Include(p => p.ProductCategory)
            .Sort(productParams.OrderBy)
            .Search(productParams.SearchTerm)
            .Filter(productParams.Types)
            .AsQueryable();

            var products = await PagedList<Product>.ToPagedList(query, 
                productParams.PageNumber, productParams.PageSize);

            Response.AddPaginationHeader(products.MetaData);

            return products;
        }

        [HttpGet("{id}")] // api/product/id
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null) return NotFound();

            return product;
        }

        [HttpGet("filters")]
        public async Task<IActionResult> GetFilters()
        {
            var types = await _context.Products.Select(p => p.ProductCategory.Name).Distinct().ToListAsync();

            return Ok(new {types});
        }

        [HttpGet("latest")]
        public async Task<ActionResult<List<Product>>> GetLatestProducts()
        {
            var latestProducts = await _context.Products
                .OrderByDescending(p => p.Date)
                .Take(4)
                .ToListAsync();

            return latestProducts;
        }

        [HttpGet("categories")]
        public async Task<ActionResult<List<ProductCategory>>> GetProductCategories()
        {
            var productCategories = await _context.Products
                .Select(p => p.ProductCategory)
                .Distinct()  // Untuk menghilangkan duplikat (jika ada)
                .ToListAsync();

            return productCategories;
        }

    }
}