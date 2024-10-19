import { useContext } from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartActions = () => {
    const { clearCart } = useContext(CartContext);

    return (
        <Box display="flex" justifyContent="space-between" sx={{ marginTop: 2 }}>
            <Button
                variant="outlined"
                sx={{
                    color: 'black',
                    borderColor: 'purple',
                    marginRight: 2,
                    '&:hover': {
                        backgroundColor: 'darkviolet',
                        borderColor: 'darkviolet',
                    },
                }}
                onClick={clearCart}
            >
                Empty Cart
            </Button>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'purple',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'darkviolet',
                    },
                }}
            >
                <Link to='/checkout' style={{ textDecoration: 'none', color: 'black' }}>
                    Checkout
                </Link>
            </Button>
        </Box>
    );
};

export default CartActions;
