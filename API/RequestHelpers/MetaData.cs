namespace API.RequestHelpers
{
    // Represents metadata information for paginated results
    public class MetaData
    {
       // Gets or sets the current page number in the paginated results.
        public int CurrentPage { get; set; }

        // Gets or sets the total number of pages in the paginated results.
        public int TotalPages { get; set; }

        // Gets or sets the number of items per page in the paginated results.
        public int PageSize { get; set; }

        // Gets or sets the total count of items across all pages in the paginated results.
        public int TotalCount { get; set; }
    }
}