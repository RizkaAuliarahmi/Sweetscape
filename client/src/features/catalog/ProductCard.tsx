import { ImageListItem, ImageListItemBar } from "@mui/material";
import { Product } from "../../app/models/products";
import { Link } from "react-router-dom";
import { currencyFormat } from "../../app/util/utils";

interface Props {
    product: Product;
}
   
export default function ProductCard({product}: Props) {
    
    return (
          <ImageListItem 
            key={product.pictureUrl} 
            component={Link} 
            to={`/catalog/${product.id}`} 
            style={{ 
              textDecoration: "none", 
              color: 'black', 
              fontSize: 'large'
            }}
          >
            <img
              src={product.pictureUrl}
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
                '&:hover': {color: 'primary.main'}
              }}
            />
          </ImageListItem>
    )
}