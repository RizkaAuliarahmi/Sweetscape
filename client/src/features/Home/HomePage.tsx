import { Box, Button, Divider, Grid, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/products";
import { Link } from "react-router-dom";
import AppSlider from "../../app/components/AppSlider";
import CategoryList from "./CategoryLIst";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default function HomePage() {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [productCategories, setProductCategories] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    agent.Catalog.latest()
        .then(newProducts => setNewProducts(newProducts))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
  }, []);

  useEffect(() => {
    agent.Catalog.getProductCategories()
        .then(newProductCategories => setProductCategories(newProductCategories))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message="Loading..." />

  return (
    <Grid container rowSpacing={2}>
      {/* <Grid item xs={12} >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: `url('/images/home-bg.png')`,
          backgroundSize: 'cover',
          minHeight: '1024px',
        }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 85}}>
            <Typography color="white" variant='h1' sx={{ mr: 50 }}>
              Sweetest Choice
            </Typography>
            <Typography color="white" variant='h1' sx={{ ml: 50 }}>
              For Sweet Tooth
            </Typography>
            <Button variant="contained" color="secondary" component={Link} to='/catalog' sx={{ mt: 3, typography: 'h6' }}>
              Shop Now
            </Button>
          </Box>
        </Box>
      </Grid> */}

      <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
        <Box sx={{
          borderLeft: { xs: '8px solid #ffff', md: '12px solid #ffff', lg: '72px solid #ffff' },
          padding: 2,
        }}>
          <AppSlider products={newProducts} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
        <Box sx={{
          borderRight: { xs: '8px solid #ffff', md: '12px solid #ffff', lg: '72px solid #ffff' },
          padding: 2,
        }}>
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', margin: 0 }}>
            Strawberry Season: New Sweet Sensations!
          </Typography>
          <Divider style={{ width: '100%', margin: '10px 0', borderColor: '#d3979f', borderWidth: 2 }} />
          <Typography variant="h5" sx={{ textAlign: 'justify', margin: 0 }}>
            Our latest collection features an array of treats—Strawberry Donut, Macaroon, Slice Cake, and Cupcake—all infused with the delightful essence of strawberries. Elevate your moments of joy and indulge in the richness of the season with these delectable creations. Treat yourself to these delightful creations.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{pb: 5, bgcolor: 'primary.main', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h4" color="white" sx={{ pt: 2, textAlign: 'center'}}>
          Treat Yourself to Our Sweet Variety
        </Typography>
        <CategoryList productCategories={productCategories}/>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to='/catalog'
          sx={{ typography: 'h6',  minWidth: 'fit-content',  px: 5, py: 2, }}
        >
          Shop Now
        </Button>
      </Grid>
    </Grid>
  )
}