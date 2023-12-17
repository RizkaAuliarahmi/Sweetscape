import { Switch } from "@mui/material";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function DarkModeToggleSwitch ({ handleThemeChange, darkMode }: Props) {
    <Switch
        checked={darkMode}
        onChange={handleThemeChange}
        color="primary"
        inputProps={{ 'aria-label': 'toggle dark mode' }}
        sx={{
            '& .MuiSwitch-thumb': {
            backgroundColor: darkMode ? '#f8d151' : '#000',
            },
            '& .Mui-checked': {
            backgroundColor: darkMode ? '#ffd43b' : '#65a5f2',
            },
        }}
    />
}