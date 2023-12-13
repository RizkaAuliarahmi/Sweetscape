import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/ConfigureStore";
import BasketTable from "./BasketTable";

export default function BasketPage(){
  const {basket} = useAppSelector(state => state.basket);
  const isMobile = useMediaQuery('(max-width: 900px)');

  if (!basket) return (
    <>
      <Typography variant="h3">Your basket empty</Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to='/catalog'
        sx={{ typography: 'h6',  minWidth: 'fit-content', mt: 2}}
      >
        Shop Now
      </Button>
    </>
  )

  return (
    <>
      <BasketTable items={basket.items}/>
      { isMobile ? ( 
        <Grid container>
          <Grid item xs={12}> 
            <BasketSummary/>
            <Button
              component={Link}
              to='/checkout'
              variant='contained'
              size='large'
              fullWidth
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs={6}/>
          <Grid item xs={6}> 
            <BasketSummary/>
            <Button
              component={Link}
              to='/checkout'
              variant='contained'
              size='large'
              fullWidth
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
       )}
    </>
  )
}