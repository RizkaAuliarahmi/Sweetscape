import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
    sx?: React.CSSProperties;
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" ;
    letterSpacing: string | number;
}

export default function HeaderLogo({sx, variant, letterSpacing } : Props) {
    return (
        <Box 
            display='flex' 
            alignItems='center' 
            component={Link} 
            to={'/'} 
            sx={{ textDecoration: 'none', ...sx}}>
            <Typography 
                variant={variant} 
                style={{ 
                    color: '#fff4e6', 
                    fontFamily: 'Great Vibes', 
                    letterSpacing: letterSpacing }}
            >
                Sweetscape
            </Typography>
        </Box>
    )
}