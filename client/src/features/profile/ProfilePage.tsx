import { Typography, Container, Paper, Avatar, Button, Grid } from '@mui/material';

export default function ProfilePage() {
  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar alt="User Avatar" src="/path/to/avatar.jpg" sx={{ width: 80, height: 80, marginBottom: 2 }} />
        <Typography variant="h5" component="div" gutterBottom>
          John Doe
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          johndoe@example.com
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Edit Profile
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" sx={{ marginTop: 2 }}>
              Change Password
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
