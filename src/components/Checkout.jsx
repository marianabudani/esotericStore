import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { createOrder, updateProductStock, getNextOrderNumber, getProductById } from '../services/firebase/productsService';
import { TextField, Button, Box, Typography } from '@mui/material';
import Swal from 'sweetalert2';

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleCheckout = async (e) => {
        e.preventDefault();
        
        const orderNum = `${new Date().toISOString().split('T')[0].replace(/-/g, '')}-${await getNextOrderNumber()}`;
        const products = cart.map(item => ({ id: item.id, name: item.name, quantity: item.quantity }));

        const orderData = {
            name,
            mail,
            address,
            ordernum: orderNum,
            products,
        };

        try {
            await createOrder(orderData);
            await Promise.all(
                products.map(async (item) => {
                    const productData = await getProductById(item.id);
                    const newStock = productData.stock - item.quantity;

                    if (!isNaN(newStock) && newStock >= 0) {
                        await updateProductStock(item.id, newStock);
                    } else {
                        console.error(`Error: Stock is not a valid number for item ${item.id}`);
                    }
                })
            );

            Swal.fire({
                icon: 'success',
                title: 'Order registered successfully!',
                text: `Your order number is: ${orderNum}`,
                confirmButtonText: 'OK',
            });
            clearCart();
            navigate('/');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error registering order',
                text: error.message || "An unexpected error occurred.",
                confirmButtonText: 'Try Again',
            });
        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: '0 auto', mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Checkout
            </Typography>
            <form onSubmit={handleCheckout}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    InputProps={{
                        style: { 
                            backgroundColor: '#cccc', 
                            color: '#005568', 
                            fontSize: '16px', 
                            fontFamily: 'Arial',
                        },
                    }}
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: '#005568', 
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#005568', 
                            },
                            '&:hover fieldset': {
                                borderColor: '#005568',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#005568', 
                            },
                        },
                    }}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    required
                    InputProps={{
                        style: { 
                            backgroundColor: '#cccc', 
                            color: '#005568', 
                            fontSize: '16px',
                            fontFamily: 'Arial',
                        },
                    }}
                    sx={{
                        '& .MuiInputLabel-root': { 
                            color: '#005568',
                        },
                        '& .MuiOutlinedInput-root': { 
                            '& fieldset': {
                                borderColor: '#005568', 
                            },
                            '&:hover fieldset': {
                                borderColor: '#005568',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#005568', 
                            },
                        },
                    }}
                />
                <TextField
                    label="Address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    InputProps={{
                        style: { 
                            backgroundColor: '#cccc', 
                            color: '#005568', 
                            fontSize: '16px', 
                            fontFamily: 'Arial',
                        },
                    }}
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: '#005568', 
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#005568',
                            },
                            '&:hover fieldset': {
                                borderColor: '#005568',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#005568', 
                            },
                        },
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Confirm
                </Button>
            </form>
        </Box>
    );
};

export default Checkout;
