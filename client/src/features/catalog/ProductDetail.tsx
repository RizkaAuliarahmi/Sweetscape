import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { addBasketItemAsync, removeBasketItemAsync } from "../basket/basketSlice";
import { fetchProductAsync, productSelector } from "./catalogSlice";
import { currencyFormat } from "../../app/util/utils";

export default function ProductDetails() {
    const {basket, status} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();
    const {id} = useParams<{id: string}>();
    const product = useAppSelector(state => productSelector.selectById(state, id!));
    const {status: productStatus} = useAppSelector(state => state.catalog);
    const [quantity, setQuantity] = useState(0);
    const item = basket?.items.find(i => i.productId === product?.id);
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));

    useEffect(() => {
        if (item) setQuantity(item.quantity);
        if (!product && id) dispatch(fetchProductAsync(parseInt(id)));
    }, [id, item, product])

    function handleInputChange(event: any) {
        if (event.target.value >= 0) {
            setQuantity(parseInt(event.target.value));
        }
    }

    function handleUpdateCart() {
        if (!item || quantity > item.quantity) {
            const updatedQuantity = item ? quantity - item.quantity : quantity;
            dispatch(addBasketItemAsync({productId: product?.id!, quantity: updatedQuantity}))
        } else {
            const updatedQuantity = item.quantity - quantity;
            dispatch(removeBasketItemAsync({productId: product?.id!, quantity: updatedQuantity}))
        }
    }

    if (productStatus.includes('pending')) return <LoadingComponent message='Loading product...'/>

    if (!product) return <NotFound/>

    return (
        <Grid container spacing={isMobile ? 2 : 6}>
            <Grid item xs={12} sm={isMobile ? 12 : 6}>
                <img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} sm={isMobile ? 12 : 6}>
                {/* Konten lainnya */}
                <Typography variant='h3'>{product.name}</Typography>
                <Typography variant='h4' color='primary'>{currencyFormat(product.price)}</Typography>
                <Divider sx={{ mb: 2 }} />
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Allergen Information</TableCell>
                                <TableCell>{product.allergenInformation}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Shelf Life</TableCell>
                                <TableCell>{product.shelfLife}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={isMobile ? 2 : 2}>
                    <Grid item xs={12} sm={isMobile ? 12 : 6}>
                        <TextField
                            onChange={handleInputChange}
                            variant='outlined'
                            type='number'
                            label='Quantity in Cart'
                            fullWidth
                            value={quantity}
                        />
                    </Grid>
                    <Grid item xs={12} sm={isMobile ? 12 : 6}>
                        <LoadingButton
                            disabled={item?.quantity === quantity || !item && quantity === 0}
                            loading={status.includes('pending')}
                            onClick={handleUpdateCart}
                            sx={{ height: '55px' }}
                            color='primary'
                            size='large'
                            variant='contained'
                            fullWidth
                        >
                            {item ? 'Update Quantity' : 'Add to Cart'}
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}