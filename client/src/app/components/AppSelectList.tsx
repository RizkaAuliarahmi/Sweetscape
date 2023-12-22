import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

interface Props extends UseControllerProps {
    label: string;
    // items: { id: number; name: string }[];
    items: string[];
}

export default function AppSelectList(props: Props) {
    const {fieldState, field} = useController({...props, defaultValue: ''})
    // const selectedValue = field.value as number;
    // console.log("item yg kepilih"+props.items[selectedValue - 1]);
    // console.log("val"+field.value);
    return (
        <FormControl fullWidth error={!!fieldState.error}>
            <InputLabel>{props.label}</InputLabel>
            <Select
                value={field.value}
                label={props.label}
                onChange={field.onChange}
            >
                {props.items.map((item, index) => (
                    <MenuItem value={index+1} key={index}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
    )
}