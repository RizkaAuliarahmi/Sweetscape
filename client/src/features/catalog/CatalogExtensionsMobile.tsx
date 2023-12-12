import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { setProductParams } from "./catalogSlice";
import { Grid, IconButton } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import Dropdown from "./FilterProduct";
import SortProduct from "./SortProduct";

interface Props {
  sortOptions: any[];
  filterOptions: string[];
}

export default function CatalogExtensionsMobile({sortOptions, filterOptions}: Props) {
  const { productParams } = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSortOpen, setSortOpen] = useState(false);

  const handleFilterClick = () => {
    setFilterOpen(!isFilterOpen);
    setSortOpen(false);
  };

  const handleSortClick = () => {
    setSortOpen(!isSortOpen);
    setFilterOpen(false);
  };

  return (
    <>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton color="primary" onClick={handleFilterClick}>
          <FilterAltIcon />
        </IconButton>
        <IconButton color="primary" onClick={handleSortClick}>
          <SortIcon />
        </IconButton>
      </Grid>
      {isFilterOpen && (
        <Grid item xs={12}>
          <Dropdown
            options={filterOptions}
            selectedOptions={productParams.types}
            onChange={(items: string[]) => dispatch(setProductParams({ types: items }))}
            label="Filter Product"
          />
        </Grid>
      )}
      {isSortOpen && (
        <Grid item xs={12}>
          <SortProduct
            options={sortOptions}
            onChange={(e) => dispatch(setProductParams({ orderBy: e.target.value }))}
            selectedValue={productParams.orderBy}
            label="Sort Product"
          />
        </Grid>
      )}
    </>
  );
}
