import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  bannerContent: {
    bannerImageLight: string;
    bannerImageDark: string;
    bannerText: string;
    contentText: string;
  };
  palleteType?: string;
}


export default function Banner({ bannerContent, palleteType }: Props) {
  const isMobile = useMediaQuery('(max-width: 1000px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: palleteType === 'light' ? `url(${bannerContent.bannerImageLight})` : `url(${bannerContent.bannerImageDark})`,
        backgroundSize: 'cover',
        minHeight: isMobile ? '30vh' : '1024px',
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          mt: isMobile ? 4 : 85 
          }}
        >
        <Typography
          color={isMobile ? "black" : "white"}
          variant='h1'
          sx={{
            textAlign: isMobile ? 'center' : 'left',
            backgroundColor: isMobile ? 'secondary.main' : 'transparent',
            opacity: isMobile ? 0.8 : 1,
            mr: isMobile ? 0 : 50,
          }}
        >
          {bannerContent.bannerText}
        </Typography>
        <Typography
          color={isMobile ? "black" : "white"}
          variant='h1'
          sx={{
            textAlign: isMobile ? 'center' : 'left',
            mb: isMobile ? 2 : 0,
            backgroundColor: isMobile ? 'secondary.main' : 'transparent',
            opacity: isMobile ? 0.8 : 1,
            ml: isMobile ? 0 : 50,
          }}
        >
          {bannerContent.contentText}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to='/catalog'
          sx={{
            typography: 'h6',
            minWidth: '100%',
            px: 5,
            py: 2,
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}