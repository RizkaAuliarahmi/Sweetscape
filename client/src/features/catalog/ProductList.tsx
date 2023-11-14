import { Grid } from "@mui/material";
import { Product } from "../../app/models/products";
import { useAppSelector } from "../../app/store/ConfigureStore";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
    products: Product[];
}

export default function ProductList({products}: Props) {
    const {productsLoaded} = useAppSelector(state => state.catalog);
    console.log("productList"+products);
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={4} key={product.id}>
                    {!productsLoaded ? (
                        <ProductCardSkeleton/>
                    ) : (
                        <ProductCard product={product} />
                    )}
                </Grid>
            ))}
        </Grid>
    )
}