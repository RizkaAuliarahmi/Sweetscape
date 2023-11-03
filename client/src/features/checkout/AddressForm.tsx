import { Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AppTextInput from "../../app/components/AppTextInput";
import AppCheckbox from "../../app/components/AppCheckbox";

export default function AddressForm() {
    const {control, formState} = useFormContext();
    return (
        <>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <AppTextInput control={control} name="fullName" label="Full name" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <AppTextInput control={control} name="phoneNumber" label="Phone Number" />
            </Grid>
            <Grid item xs={12}>
                <AppTextInput control={control} name="address1" label="Address" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <AppTextInput control={control} name="postalCode" label="Postal Code" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <AppTextInput control={control} name="district" label="District" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <AppTextInput control={control} name="city" label="City" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <AppTextInput control={control} name="province" label="Province" />
            </Grid>
            <Grid item xs={12}>
                <AppCheckbox
                    disabled={!formState.isDirty}
                    control={control} 
                    name="saveAddress" 
                    label="Save this as the default address"
                     
                />
            </Grid>
        </Grid>
        </>
    );
}
