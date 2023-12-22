import { Typography, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { currencyFormat } from "../../app/util/utils";
import useProducts from "../../app/hooks/useProducts";
import AppPagination from "../../app/components/AppPagination";
import { removeProduct, setPageNumber } from "../catalog/catalogSlice";
import { useAppDispatch } from "../../app/store/ConfigureStore";
import { useState } from "react";
import ProductForm from "./ProductForm";
import { Product } from "../../app/models/products";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";
import ProductSearch from "../catalog/productSearch";

export default function Inventory() {
    const { products, metaData } = useProducts();
    const dispatch = useAppDispatch();
    const [editMode, setEditMode] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [target, setTarget] = useState(0);
    
    function handleSelectProduct(product: Product) {
        setSelectedProduct(product);
        setEditMode(true);
    }

    function cancelEdit() {
        if (selectedProduct) setSelectedProduct(undefined);
        setEditMode(false);
    }

    function handleDeleteProduct(id: number) {
        setLoading(true);
        setTarget(id)
        agent.Admin.deleteProduct(id)
            .then(() => dispatch(removeProduct(id)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }

    if (editMode) return <ProductForm product={selectedProduct} cancelEdit={cancelEdit}/>

    return (
        <>
            <Box display='flex' justifyContent='space-between'>    
                <Typography sx={{ p: 2 }} variant='h4'>Inventory</Typography>
                <Box display='flex' alignItems='center'>
                    <ProductSearch />
                    <Button onClick={() => setEditMode(true)} sx={{ m: 2 }} size='large' variant='contained'>Create</Button>
                </Box>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">
                                    <Box display='flex' alignItems='center'>
                                        <img src={product.pictureUrl} alt={product.name} style={{ height: 50, marginRight: 20 }} />
                                        <span>{product.name}</span>
                                    </Box>
                                </TableCell>
                                <TableCell align="right">{currencyFormat(product.price)}</TableCell>
                                <TableCell align="center">{product.quantityInStock}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleSelectProduct(product)} startIcon={<Edit />} />
                                    <LoadingButton
                                        loading={loading && target === product.id}
                                        onClick={() => {
                                            const shouldDelete = window.confirm("Are you sure you want to delete this item?");
                                            if (shouldDelete) {
                                                handleDeleteProduct(product.id);
                                            }
                                        }}
                                        startIcon={<Delete />}
                                        color='error'
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {metaData && 
                <Box sx={{pt: 2}}>
                    <AppPagination 
                        metaData={metaData} 
                        onPageChange={(page: number) => dispatch(setPageNumber({pageNumber: page}))} />
                </Box>
            }
        </>
    )
}