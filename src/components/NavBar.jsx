import { AppBar, Box, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuCat from './CategoryMenu';
import CartWidget from './CartWidget';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#4A148C' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }} onClick={() => navigate('/')} >
            Path of the Norns
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <MenuCat />
            <Button
              variant="outlined"
              color="inherit"
              sx={{ ml: 2, color: '#E1BEE7', borderColor: '#E1BEE7' }}
              onClick={() => navigate('/contact')}
            > Contact Us
            </Button>
            <IconButton size="large" color="inherit">
              <CartWidget />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
