import { useEffect } from "react";
import ProductList from "./ProductList";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { fetchFilters, fetchProductsAsync, productSelector, setPageNumber, setProductParams } from "./catalogSlice";
import { Container, Grid, Paper } from "@mui/material";
import ProductSearch from "./productSearch";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import CheckboxButtons from "../../app/components/CheckboxButtons";
import AppPagination from "../../app/components/AppPagination";

const sortOptions = [
  {value: 'name', label: 'Alphabetical'},
  {value: 'priceDesc', label: 'Price - High to low'},
  {value: 'price', label: 'Price - Low to high'},
]

export default function Catalog() {
      //store product inside function
  const products = useAppSelector(productSelector.selectAll);
  const {productsLoaded, status, filtersLoaded, types, productParams, metaData} = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();
  console.log("catalog"+products);

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]) //PENTING bgt [] kalau engga bakalan endless loop 

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded])

  if (!filtersLoaded) return <LoadingComponent message='Loading Product...'/>

    return (
      <Container sx={{mt: 4}}>
        <Grid container columnSpacing={4}>
          <Grid item xs={3}>
            <Paper sx={{mb: 2}} square={false}>
             <ProductSearch/>
            </Paper>
            <Paper square={false} sx={{mb: 2, p: 2}}>
              <RadioButtonGroup
                selectedValue={productParams.orderBy}
                options={sortOptions}
                onChange={(e) => dispatch(setProductParams({orderBy: e.target.value}))}
              />
            </Paper>
            <Paper square={false} sx={{mb: 2, p: 2}}>
            <CheckboxButtons
                items={types}
                checked={productParams.types}
                onChange={(items: string[]) => dispatch(setProductParams({types: items}))}
              />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <ProductList products={products}/>
          </Grid>
          <Grid item xs={3}/>
          <Grid item xs={9} sx={{mb: 2}}>
            {metaData &&
            <AppPagination
              metaData={metaData}
              onPageChange={(page: number) => dispatch(setPageNumber({pageNumber: page}))}
            />}
          </Grid>
        </Grid>
        </Container>
    )
    //tanda <> same as <Fragment> </Fragment>
}