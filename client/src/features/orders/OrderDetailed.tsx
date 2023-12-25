import { Box, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import { BasketItem } from "../../app/models/basket";
import { Order } from "../../app/models/order";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";

interface Props {
    order?: Order;
    setSelectedOrder: (id: number) => void;
}

export default function OrderDetailed({ order, setSelectedOrder }: Props) {
    const subtotal = order?.orderItems.reduce(
        (sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
    const isMobile = useMediaQuery('(max-width: 600px)');

    return (
        <>
            <Box display='flex' flexDirection={isMobile ? 'column' : 'row'} justifyContent='space-between'>
                <Typography 
                    sx={{ 
                        p: 2, 
                        fontSize: isMobile ? '1.5rem' : '2rem' 
                    }} 
                    gutterBottom variant='h4'
                >
                    Order# {order?.id} - {order?.orderStatus}
                </Typography>
                <Button
                    onClick={() => setSelectedOrder(0)}
                    sx={{ m: 2, fontSize: isMobile ? '1rem' : '1.25rem' }}
                    size={isMobile ? 'small' : 'large'}
                    variant='contained'
                >
                    Back to orders
                </Button>
            </Box>
            <BasketTable 
                items={order?.orderItems as BasketItem[]} 
                isBasket={false} 
            />
            { isMobile ? (
                <BasketSummary subtotal={subtotal} />
            ) : (
                <Grid container>
                    <Grid item xs={6} />
                    <Grid item xs={6}>
                        <BasketSummary subtotal={subtotal} />
                    </Grid>
                </Grid>
            )}
        </>
    )
}