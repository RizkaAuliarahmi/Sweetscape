import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { setProductParams } from "./catalogSlice";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

export default function ProductSearch() {
  const { productParams } = useAppSelector((state) => state.catalog);
  const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);
  const dispatch = useAppDispatch();

  const debouncedSearch = (event: any) => {
    dispatch(setProductParams({ searchTerm: event.target.value }));
  };

  const handleClearClick = () => {
    setSearchTerm("");
    dispatch(setProductParams({ searchTerm: "" }));
  };

  return (
    <TextField
      label="Search products"
      variant="outlined"
      fullWidth
      value={searchTerm || ""}
      onChange={(event: any) => {
        setSearchTerm(event.target.value);
        debouncedSearch(event);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {searchTerm && (
              <IconButton edge="end" onClick={handleClearClick} tabIndex={-1}>
                <ClearIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
}
