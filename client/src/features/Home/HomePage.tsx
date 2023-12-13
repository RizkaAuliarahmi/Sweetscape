import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/products";
import { Link } from "react-router-dom";
import AppSlider from "../../app/components/AppSlider";
import CategoryList from "./CategoryLIst";
import LoadingComponent from "../../app/layout/LoadingComponent";
import Banner from "./Banner";
import ProductDescription from "./ProductDescription";

const bannerContent = {
  bannerImage: "/images/home-bg.png",
  bannerText: "Sweetest Choice",
  contentText: "For Sweet Tooth",
};

const productDescription = {
  title: "Strawberry Season: New Sweet Sensations!",
  description: "Our latest collection features an array of treats—Strawberry Donut, Macaroon, Slice Cake, and Cupcake—all infused with the delightful essence of strawberries. Elevate your moments of joy and indulge in the richness of the season with these delectable creations. Treat yourself to these delightful creations.",
}

export default function HomePage() {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [productCategories, setProductCategories] = useState([]);
  
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
      <Grid item xs={12} >
        <Banner bannerContent={bannerContent} />
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={7} xl={7} sx={{
          borderLeft: { xs: '8px solid #ffff', md: '12px solid #ffff', lg: '72px solid #ffff' },
          padding: 2,
        }}>
          <AppSlider products={newProducts} />
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5} sx={{
          borderRight: { xs: '8px solid #ffff', md: '12px solid #ffff', lg: '72px solid #ffff' },
          padding: 2,
        }}>
        <ProductDescription productDescription={productDescription} />
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