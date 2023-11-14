import { Button, Container, Grid, Typography } from "@mui/material";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/ConfigureStore";
import BasketTable from "./BasketTable";

export default function BasketPage(){
  const {basket} = useAppSelector(state => state.basket);

  if (!basket) return <Typography variant="h3">Your basket empty</Typography>

  return (
    <Container sx={{mt: 4}}>
      <BasketTable items={basket.items}/>
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
    </Container>
      
  )
}