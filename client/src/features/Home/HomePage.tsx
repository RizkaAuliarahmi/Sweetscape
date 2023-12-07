import { Box, Button, Divider, Fade, Grid, Grow, Slide, Typography, useScrollTrigger } from "@mui/material";
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
  const trigger = useScrollTrigger();
  const [isVisible, setIsVisible] = useState(false);
  const [isTypography1Visible, setIsTypography1Visible] = useState(false);
  const [isTypography2Visible, setIsTypography2Visible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);


  useEffect(() => {
    if (trigger) {
      setIsVisible(true);
    }
  }, [trigger]);

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
    <Grid container spacing={6}>
      <Grid item xs={12} >
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url('/images/home-bg.png')`,
        backgroundSize: 'cover',
        minHeight: '1024px',
        }}>
        {/* <Fade in={isVisible} timeout={1000}> */}
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 85, transition: 'opacity 1s ease', opacity: isVisible ? 1 : 0, }}>
        {/* <Fade in={isTypography1Visible} timeout={1000}> */}
            <Typography color="white" sx={{ fontSize: 80, mr: 50}}>
              Sweetest Choice
            </Typography>
            {/* </Fade> <Fade in={isTypography2Visible} timeout={1000}> */}
            <Typography color="white" sx={{ fontSize: 80, ml: 50 }}>
              For Sweet Tooth
            </Typography>
            {/* </Fade><Fade in={isButtonVisible} timeout={1000}> */}
            <Button variant="contained" color="secondary" component={Link} to='/catalog' sx={{ mt: 3, typography: 'h6' }}>
              Shop Now
            </Button>
            {/* </Fade> */}
          </Box>
          {/* </Fade> */}
        </Box>
      </Grid>
      <Grid item xs={7} sx={{ pl: 12 }}>
        <AppSlider products={newProducts}/>
      </Grid>
      <Grid item xs={5} sx={{ pr: 15 }}>
        <Typography variant="h4" align="left" sx={{ fontWeight: 'bold' }}>
          Strawberry Season Delights: New Sweet Sensations!
        </Typography>
        <Divider style={{ width: '100%', margin: '10px 0', borderColor: '#d3979f', borderWidth: 2 }}/>
        <Typography variant="h5"  sx={{textAlign: 'justify'}}>
          Our latest collection features an array of treats—Strawberry Donut, Macaroon, Slice Cake, and Cupcake—all infused with the delightful essence of strawberries. Elevate your moments of joy and indulge in the richness of the season with these delectable creations, making each encounter a memorable ode to the sweetness of summer Treat yourself to these delightful creations.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{bgcolor: 'primary.main', mt: 5, pb: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h4" color="white" sx={{  textAlign: 'center'}}>
        Treat Yourself to Our Sweet Variety
        </Typography>
        <CategoryList productCategories={productCategories}/>
        <Button variant="contained" color="secondary" component={Link} to='/catalog' sx={{  typography: 'h6', width: 'fit-content', px: 25 }}>
              Shop Now
        </Button>
      </Grid>
    </Grid>
  )
}