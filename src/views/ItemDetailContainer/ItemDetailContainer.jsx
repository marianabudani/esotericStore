import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../asyncMock';
import { Card, CardContent, CardMedia, Typography, CardActions } from '@mui/material';
import Button from '@mui/material/Button';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    fetchProducts().then(products => {
      const selectedProduct = products.find(item => item.id == id);
      setProduct(selectedProduct);
      setLoading(false); 
    });
  }, [id]);

  if (loading) {
    return <Typography>Cargando...</Typography>;
  }

  if (!product) {
    return <Typography>Producto no encontrado.</Typography>;
  }

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Stock disponible: {product.stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDecrement} size="small">-</Button>
        <Typography sx={{ margin: '0 10px' }}>{quantity}</Typography>
        <Button onClick={handleIncrement} size="small">+</Button>
      </CardActions>
    </Card>
  );
}
