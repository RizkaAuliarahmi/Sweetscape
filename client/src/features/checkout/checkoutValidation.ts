import * as yup from 'yup';

export const validationSchema = [
    yup.object({
    fullName: yup.string().required(),
    phoneNumber: yup.string().required(),
    address1: yup.string().required(),
    postalCode: yup.string().required(),
    district: yup.string().required(),
    city: yup.string().required(),
    province: yup.string().required()
    }),
    yup.object(),
    yup.object({
        paymentMethod: yup.string().required(),
    }),
] 