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
          <Grid>
            <Grid item xs={12}>
              <img src="/images/home-bg.png" style={{ width: '100%'}}/>
            </Grid>
          </Grid>
      </>
    )
}