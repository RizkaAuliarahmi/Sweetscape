import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  
  return (
    <>
          <Box component='footer'sx={{ position: 'relative', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'secondary.main'}}>
            <img src='/images/logo.png' style={{width: 200}}/>
            <Typography variant="body2" color="text.secondary" sx={{width: 700, textAlign: 'center', mt: 1}}>
              This website is a creative project by Rizka Auliarahmi, developed with DotNet, React, and TypeScript to show web development skills.
            </Typography>
          </Box>
    </>
  );
}