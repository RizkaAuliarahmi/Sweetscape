import { FormControl, InputLabel, MenuItem, Select, IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  options: any[];
  selectedOptions?: any[];
  onChange: (selectedOptions: any[]) => void;
  label?: string;
}

export default function DropdownFilter({ 
  options, 
  selectedOptions, 
  onChange, 
  label, 
}: Props) {
  const [selectedItems, setSelectedItems] = useState(selectedOptions || []);

  const handleDelete = (item: any) => {
    const updatedSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem !== item
    );
    setSelectedItems(updatedSelectedItems);
    onChange(updatedSelectedItems);
  };

  return (
    <FormControl fullWidth>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        multiple
        value={selectedItems}
        onChange={(event: SelectChangeEvent<typeof selectedItems>) => {
          const selected = event.target.value as typeof selectedItems;
          setSelectedItems(selected);
          onChange(selected);
        }}
        renderValue={(selected) => (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {(selected as any[]).map((value) => (
              <div 
                key={value} 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  marginRight: 8 
                  }}
              >
                <span style={{ marginRight: 8 }}>{value}</span>
              </div>
            ))}
          </div>
        )}
      >
        {options.map((option) => (
          <MenuItem 
            key={option} 
            value={option} 
            style={{ 
              backgroundColor: selectedItems.includes(option) ? '#fff4e6' : 'transparent', 
              display: "flex", 
              justifyContent: "space-between" 
              }}
          >
            <>
              <span>{option}</span>
              {selectedItems.includes(option) && (
                <IconButton
                  onClick={() => handleDelete(option)}
                  color="error"
                  size="small"
                  style={{ marginLeft: 8, padding: 4 }}
                >
                  <ClearIcon fontSize="large" />
                </IconButton>
              )}
            </>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
