import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from "@mui/material";
// import AppCarousel from "../../app/components/AppCarousel";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { useEffect, useState } from "react";
import { productSelector, setProductParams } from "../catalog/catalogSlice";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/products";
import CategoryCard from "./CategoryCard";

const categoryProduct = [
    {
      id: 1,
      name: 'kategori 1',
      pictureUrl: '/images/cake1.png',
      description: 'Deskripsi Produk Panas 1',
      price: 20000,
      date : "2022-10-27"
    },
    {
      id: 2,
      name: 'kategori 2',
      pictureUrl: '/images/cake1.png',
      description: 'Deskripsi Produk Panas 2',
      price: 20000,
      date : "2022-10-27"
    },
    // Tambahkan produk panas lainnya
  ];

export default function HomePage() {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.latest()
        .then(newProducts => setNewProducts(newProducts))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
  }, []);

    return (
        <>
          <Grid container rowSpacing={3}>
            <Grid item xs={6} sx={{ textAlign: 'left', bgcolor:'primary.main',}}>
              <Typography variant="h2" sx={{fontFamily:'Poppins', ml: 12, mt: 20}}>
              The Sweetest Choice for Sweet Tooth
              </Typography>
              <Typography variant="body2" sx={{fontFamily:'Poppins', ml: 12, mb: 20}}>
                Welcome to Sweetscape: Your Sweet Escape. <br/> Now Available in Every City In Indonesia.
              </Typography>
            </Grid>
          
            <Grid item xs={6} sx={{ bgcolor:'primary.main'}}>
              <img src="/images/cake.png" style={{ width: '100%', height: '100%'}} />
            </Grid>
          
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'secondary.main'}}>
              {/* <Typography variant="h4" sx={{mb:2}}>New Product</Typography> */}
              <Typography variant="h4" sx={{mb:2}}>Exploring the Sweetness of Strawberry Season</Typography>
              {/* <AppCarousel products={newProducts}/> */}
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" sx={{ mb: 2, textAlign:'center' }}>Product Category</Typography>
              <Grid container spacing={4}>
                {categoryProduct.map(category => (
                  <Grid item xs={4}>
                      <CategoryCard productCategory={category}/>
                  </Grid>
            ))}
            </Grid>
            </Grid>
        </Grid>
    </>
        // <>
        //     <Typography variant='h2'>
        //     The Sweetest Choice for a Sweet Lovers
        //     </Typography>
        //     <Typography variant='h6'>
        //     Welcome to Sweetscape: Your Sweet Escape.
        //     </Typography>
        //     
        // </>
    )
}