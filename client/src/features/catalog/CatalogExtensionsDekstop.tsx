import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { setProductParams } from "./catalogSlice";
import { Grid, Paper } from "@mui/material";
import ProductSearch from "./productSearch";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import CheckboxButtons from "../../app/components/CheckboxButtons";

interface Props {
  sortOptions: any[];
  filterOptions: string[];
}

export default function CatalogExtensionsDekstop({sortOptions, filterOptions}: Props) {
  const { productParams } = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();

    return (
      <>
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
              items={filterOptions}
              checked={productParams.types}
              onChange={(items: string[]) => dispatch(setProductParams({types: items}))}
            />
          </Paper>
        </Grid>
      </>
    )
}