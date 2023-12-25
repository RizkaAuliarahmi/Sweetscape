import { Box, CircularProgress, Typography } from "@mui/material";

interface Props {
    message?: string;
}

export default function LoadingComponent({message = 'Loading...'}: Props) {

    return (
        <Box 
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            height='100vh'
        >
            <CircularProgress size={100} color="primary" />
            <Typography 
                variant='h4' 
                sx={{
                    justifyContent: 'center', 
                    position: 'fixed', 
                    top: '60%', 
                    pt: message === 'Initializing app...' ? 0 : 15
                }}
            >
                {message}
            </Typography>
        </Box>
    )
}