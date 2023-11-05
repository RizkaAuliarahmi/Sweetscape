import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function StickyFooter() {
  return (
    <>
          <Box component='footer'sx={{ mt: 50,  p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'primary.main'}}>
            <img src='/images/logo.png'/>
            <Typography variant="body2" color="text.secondary">
              Rizka Auliarahmi's fake project.
            </Typography>
          </Box>
    </>
  );
}