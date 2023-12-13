import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, } from "@mui/material";

interface DropdownProps {
  options: any[];
  onChange: (event: SelectChangeEvent<string>) => void;
  selectedValue: string;
  label?: string; // Add label as an optional prop
}

export default function Dropdown({
  options,
  onChange,
  selectedValue,
  label,
}: DropdownProps) {
  return (
    <FormControl fullWidth>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        value={selectedValue}
        onChange={onChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {options.map(({ value, label }) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
