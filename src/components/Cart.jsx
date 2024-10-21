/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ id, name, img, price, quantity }) => {
    const { removeProd } = useContext(CartContext);

    return (
        <Card sx={{ display: 'flex', marginBottom: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 140, height: 140 }} 
                image={img}
                alt={name}
            />
            <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Quantity: {quantity}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    Subtotal: ${price * quantity}
                </Typography>
            </CardContent>
            <CardContent>
                <IconButton
                    color="secondary"
                    onClick={() => removeProd(id)}
                >
                    <DeleteIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default Cart;
