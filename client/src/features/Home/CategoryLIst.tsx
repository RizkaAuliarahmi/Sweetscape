import { Grid } from "@mui/material";
import { ProductCategory } from "../../app/models/products";
import CategoryCard from "./CategoryCard";

interface Props {
    productCategories: ProductCategory[];
}

export default function CategoryList({productCategories}: Props) {
    return (
        <Grid container spacing={4} sx={{justifyContent: 'center', p: 5}}>
            {productCategories.map(productCategory => (
                <Grid item key={productCategory.id}>
                    <CategoryCard productCategory={productCategory} />
                </Grid>
            ))}
        </Grid>
    )
}