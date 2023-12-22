import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup.string().required(),
    // productCategory: yup.string().required(),
    price: yup.number().required().moreThan(999),
    quantityInStock: yup.number().required().min(0),
    allergenInformation: yup.string().required(),
    shelfLife: yup.string().required(),
    // file: yup.mixed().required(),
})