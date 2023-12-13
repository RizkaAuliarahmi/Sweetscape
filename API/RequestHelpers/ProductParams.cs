namespace API.RequestHelpers
{
    // Represents parameters for paginating and filtering products
    public class ProductParams : PaginationParams
    {
        public string OrderBy { get; set; }
        public string SearchTerm { get; set; }
        public string Types { get; set; }
    }
}