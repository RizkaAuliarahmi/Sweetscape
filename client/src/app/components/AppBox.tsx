import { Box } from "@mui/material";

interface Props {
  selected: boolean;
  onClick: () => void;
  label: string;
}

const BoxStyles = {
  cursor: "pointer",
  border: "1px solid black",
  borderRadius: "4px",
  padding: "8px",
  textAlign: "center",
};

export default function AppBox({ selected, onClick, label }: Props) {
  return (
    <Box
      onClick={onClick}
      sx={{
        ...BoxStyles,
        backgroundColor: selected ? "#d3979f" : "white",
        color: selected ? "#ffffff" : "inherit",
        flex: 1,
      }}
    >
      {label}
    </Box>
  );
}
