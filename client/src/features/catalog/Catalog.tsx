import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { fetchFilters, fetchProductsAsync, productSelector, setPageNumber } from "./catalogSlice";
import { Grid } from "@mui/material";
import AppPagination from "../../app/components/AppPagination";
import CatalogExtensionsMobile from "./CatalogExtensionsMobile";
import CatalogExtensionsDekstop from "./CatalogExtensionsDekstop";

const sortOptions = [
  { value: 'name', label: 'Alphabetical' },
  { value: 'priceDesc', label: 'Price - High to low' },
  { value: 'price', label: 'Price - Low to high' },
];

export default function Catalog() {
  const products = useAppSelector(productSelector.selectAll);
  const { types } = useAppSelector(state => state.catalog);
  const { productsLoaded, filtersLoaded, metaData } = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();
  const [mobileView, setMobileView] = useState(false);
  
  useEffect(() => {
      const setResponsiveness = () => {
        setMobileView(window.innerWidth < 900);
      };
    
      setResponsiveness();
    
      window.addEventListener("resize", setResponsiveness);
    
      return () => {
        window.removeEventListener("resize", setResponsiveness);
      };
    }, []);

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded]);

  if (!filtersLoaded) return <LoadingComponent message='Loading Product...' />;

  return (
    <Grid container spacing={4}>
      {mobileView ? 
        <CatalogExtensionsMobile sortOptions={sortOptions} filterOptions={types}/> 
      : 
        <CatalogExtensionsDekstop sortOptions={sortOptions} filterOptions={types}/>
      }
      <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
        <ProductList products={products} />
      </Grid>
      <Grid item xs={12} sx={{ mb: 2 }}>
        {metaData && (
          <AppPagination
            metaData={metaData}
            onPageChange={(page: number) => dispatch(setPageNumber({ pageNumber: page }))}
          />
        )}
      </Grid>
    </Grid>
  );
}
