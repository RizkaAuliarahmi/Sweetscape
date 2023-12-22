import ProductList from "./ProductList";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { setPageNumber } from "./catalogSlice";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import AppPagination from "../../app/components/AppPagination";
import CatalogExtensionsMobile from "./CatalogExtensionsMobile";
import CatalogExtensionsDekstop from "./CatalogExtensionsDekstop";
import useProducts from "../../app/hooks/useProducts";

const sortOptions = [
  { value: 'name', label: 'Alphabetical' },
  { value: 'priceDesc', label: 'Price - High to low' },
  { value: 'price', label: 'Price - Low to high' },
];

export default function Catalog() {
  const { products, productsLoaded, filtersLoaded, metaData} = useProducts();
  const { types } = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery('(max-width: 900px)');
  const isProductListEmpty = products.length === 0 && productsLoaded;

  if (!filtersLoaded) return <LoadingComponent message='Loading Product...' />;

  return (
    <Grid container spacing={4}>
      {isMobile ? 
        <CatalogExtensionsMobile 
          sortOptions={sortOptions} 
          filterOptions={types}
        /> 
      : 
        <CatalogExtensionsDekstop 
        sortOptions={sortOptions} 
        filterOptions={types}
      />
      }
      <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
      {isProductListEmpty ? (
          <Typography 
            variant="h5" 
            color="textSecondary" 
            align="center" 
            mt={4}
          >
            Product not found.
          </Typography>
        ) : (
          <>
            <ProductList products={products} />
            {metaData && (
              <AppPagination
                metaData={metaData}
                onPageChange={(page: number) => dispatch(setPageNumber({ pageNumber: page }))}
              />
            )}
          </>
        )}
      </Grid>
    </Grid>
  );
}
