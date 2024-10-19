/* eslint-disable react/prop-types */
import { CardContent, Typography, Button, Box } from '@mui/material';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <CardContent sx={{ maxWidth: 345, margin: '0 auto', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button variant="contained" color="secondary" onClick={handleDecrement} size="small" sx={{ minWidth: 40 }} >
                    -
                </Button>
                <Typography variant="h6" component="span" sx={{ mx: 2 }}>
                    {quantity}
                </Typography>
                <Button variant="contained" color="secondary" onClick={handleIncrement} size="small" sx={{ minWidth: 40 }} >
                    +
                </Button>
            </Box>
            <Button variant="contained" color="primary" onClick={() => onAdd(quantity)} disabled={!stock} sx={{ marginTop: 2 }} fullWidth >
                Add to Cart
            </Button>
        </CardContent>
    );
};

export default ItemCount;
