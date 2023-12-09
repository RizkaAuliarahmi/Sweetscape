import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <>
      <Box
        component='footer'
        sx={{
          position: 'relative',
          p: 4,
          flexDirection: 'column',
          bgcolor: 'secondary.main',
          '@media (max-width:600px)': {
            padding: '2rem',
            textAlign: 'left',
            alignItem: 'left',
          },
          '@media (min-width:601px)': {
            textAlign: 'center',
            alignItem: 'center',
          },
        }}
      >
        <img src='/images/logo.png' style={{ width: 200, marginLeft: 0 }} />
        <Typography variant="body2" color="text.secondary" sx={{ width: '100%', mt: 1 }}>
          This website is a creative project by Rizka Auliarahmi, developed with DotNet, React, and TypeScript to show web development skills.
        </Typography>
      </Box>
    </>
  );
}
