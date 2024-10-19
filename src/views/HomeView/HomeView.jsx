import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Path of the Norns!
      </Typography>
      <Button variant="contained" component={Link} to="/catalog">
        Go to Catalog
      </Button>
    </Box>
  );
};

export default HomeView;
