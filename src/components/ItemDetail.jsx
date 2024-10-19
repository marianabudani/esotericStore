/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Card, CardMedia, CardContent, Box } from '@mui/material';
import ItemCount from './ItemCount';
import { useState } from 'react';
import Swal from 'sweetalert2'; // Importar SweetAlert

const ItemDetail = ({ product }) => {
  const { id, name, price, description, stock, img } = product;
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (quantity) => {
    addItem({ id, name, price }, quantity);
    setAddedToCart(true);

    // Muestra el mensaje de éxito con SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Product added to cart!',
      text: `${quantity} ${name} has been added to your cart.`,
      confirmButtonText: 'OK',
    });
  };

  return (
    <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
      <CardMedia component="img" height="140" image={img} alt={name} />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6">${price}</Typography>
        <Typography variant="body2">Stock: {stock}</Typography>
      </CardContent>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
        {!addedToCart ? (
          <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
        ) : (
          <Button variant="contained" color="success" onClick={() => navigate('/cart')}>
            Go to Cart
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default ItemDetail;
