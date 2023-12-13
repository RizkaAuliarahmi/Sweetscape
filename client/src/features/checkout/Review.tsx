import { Grid, Typography, useMediaQuery } from '@mui/material';
import BasketSummary from '../basket/BasketSummary';
import BasketTable from '../basket/BasketTable';
import { useAppSelector } from '../../app/store/ConfigureStore';

export default function Review() {
  const {basket} = useAppSelector(state => state.basket);
  const isMobile = useMediaQuery('(max-width: 900px)');
  
  return (
    <>
      {basket &&
      <BasketTable items={basket.items} isBasket={false}/>}
      { isMobile ? ( 
        <Grid container>
          <Grid item xs={12}> 
            <BasketSummary/>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs={6}/>
          <Grid item xs={6}> 
            <BasketSummary/>
          </Grid>
        </Grid>
      )}
    </>
  );
}