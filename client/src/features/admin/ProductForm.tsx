import { Typography, Grid, Paper, Box, Button } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import AppTextInput from "../../app/components/AppTextInput";
import { Product} from "../../app/models/products";
import { useEffect, useState } from "react";
import AppSelectList from "../../app/components/AppSelectList";
import useProducts from "../../app/hooks/useProducts";
import AppDropzone from "../../app/components/AppDropzone";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../../app/store/ConfigureStore";
import agent from "../../app/api/agent";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from "./productValidation";
import { setProduct } from "../catalog/catalogSlice";

interface Props {
    product?: Product;
    cancelEdit: () => void;
}

export default function ProductForm({ product, cancelEdit }: Props) {
    const { control, reset, handleSubmit, watch, setValue, formState: { isDirty, isSubmitting } } = useForm({
        resolver: yupResolver<any>(validationSchema)
    });
    const { types } = useProducts();
    const watchFile = watch('file', null);
    const dispatch = useAppDispatch();
    const [img, setImg] = useState(true);

    useEffect(() => {
        if (product && !watchFile && !isDirty) reset(product);
        return () => {
            if (watchFile) URL.revokeObjectURL(watchFile.preview);
        }
    }, [product, reset, watchFile, isDirty])

    const handleDeleteImage = () => {
        console.log("hapus y");
        setValue('file', null);
        setImg(false);
  
    };

    async function handleSubmitData(data: FieldValues) {
        try {
            let response: Product;
            if (product) {
                response = await agent.Admin.updateProduct(data);
            } else {
                response = await agent.Admin.createProduct(data);
            }
            dispatch(setProduct(response));
            cancelEdit();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Box component={Paper} sx={{p: 4}}>
            <Typography variant="h4" gutterBottom sx={{mb: 4}}>
                Product Details
            </Typography>
            <form onSubmit={handleSubmit(handleSubmitData)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <AppTextInput control={control} name='name' label='Product name' />
                    </Grid>
                    <Grid item xs={12}>
                        <AppSelectList control={control} items={types} name='productCategoryId' label='Product Category' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AppTextInput type='number' control={control} name='price' label='Price' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AppTextInput type='number' control={control} name='quantityInStock' label='Quantity in Stock' />
                    </Grid>
                    <Grid item xs={12}>
                        <AppTextInput multiline={true} rows={5} control={control} name='allergenInformation' label='Allergen Information' />
                    </Grid>
                    <Grid item xs={12}>
                        <AppTextInput multiline={true} rows={5} control={control} name='shelfLife' label='Shelf Life' />
                    </Grid>
                    <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                    {/* Conditionally render AppDropzone based on whether there is a product.pictureUrl */}
                    { ((product?.pictureUrl === undefined) || (!img)) && <AppDropzone control={control} name="file" />}
                    {watchFile ? (
                        <div>
                            <img src={watchFile.preview} alt="preview" style={{ maxHeight: 200 }} />
                            <Button color="error" onClick={handleDeleteImage}>
                                Remove
                            </Button>
                        </div>
                    ) : (
                        product?.pictureUrl && (img) && (
                            <div>
                                <img src={product?.pictureUrl} alt={product?.name} style={{ maxHeight: 200 }} />
                                <Button color="error" onClick={handleDeleteImage}>
                                    Remove
                                </Button>
                            </div>
                        )
                    )}
                </Box>
                    </Grid>
                </Grid>
                <Box display='flex' justifyContent='space-between' sx={{mt: 3}}>
                    <Button onClick={cancelEdit} variant='contained' color='inherit'>Cancel</Button>
                    <LoadingButton loading={isSubmitting} type='submit' variant='contained' color='success'>Submit</LoadingButton>
                </Box>
            </form>
        </Box>
    )
}