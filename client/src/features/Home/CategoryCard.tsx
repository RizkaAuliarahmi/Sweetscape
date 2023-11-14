import { ImageListItem, ImageListItemBar } from "@mui/material";
import { Product } from "../../app/models/products";
import { Link } from "react-router-dom";

interface Props {
    productCategory: Product;
}
   
export default function ProductCard({productCategory}: Props) {
    
    return (
          <ImageListItem 
            key={productCategory.pictureUrl} 
            component={Link} 
            to={`/catalog/${productCategory.id}`} 
            style={{ textDecoration: "none", color: 'black', fontSize: 'large'}}
          >
            <img
              src={`${productCategory.pictureUrl}?w=248&fit=crop&auto=format`}
              alt={productCategory.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={productCategory.name}
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