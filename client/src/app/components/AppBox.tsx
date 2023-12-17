import { Box } from "@mui/material";

interface Props {
  selected: boolean;
  onClick: () => void;
  label: string;
}

const BoxStyles = {
  cursor: "pointer",
  border: "1px solid pink",
  borderRadius: "4px",
  padding: "8px",
  textAlign: "center",
  '&:hover': { backgroundColor: 'secondary.main' }
};

export default function AppBox({ selected, onClick, label }: Props) {
  return (
    <Box
      onClick={onClick}
      sx={{
        ...BoxStyles,
        backgroundColor: selected ? "#d3979f" : "inherit",
        color: "inherit",
        flex: 1,
      }}
    >
      {label}
    </Box>
  );
}
