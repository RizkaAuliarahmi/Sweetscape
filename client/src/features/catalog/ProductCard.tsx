import { ImageListItem, ImageListItemBar } from "@mui/material";
import { Product } from "../../app/models/products";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { currencyFormat } from "../../app/util/utils";

interface Props {
    product: Product;
}
   
export default function ProductCard({product}: Props) {
    const {status} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();
    
    return (
          <ImageListItem 
            key={product.pictureUrl} 
            component={Link} 
            to={`/catalog/${product.id}`} 
            style={{ textDecoration: "none", color: 'black', fontSize: 'large'}}
          >
            <img
              src={`${product.pictureUrl}?w=248&fit=crop&auto=format`}
              alt={product.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={product.name}
              subtitle={currencyFormat(product.price)}
              position="below"
              sx={{
                '.MuiImageListItemBar-title': {
                  fontFamily: 'Montserrat',
                  fontSize: '1.3rem',
                  marginBottom: 1,
                },
                '.MuiImageListItemBar-subtitle': {
                  fontSize: '1rem',
                },
              }}
            />
          </ImageListItem>
    )
}