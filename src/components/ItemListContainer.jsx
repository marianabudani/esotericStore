import { useEffect, useState } from 'react';
import { fetchProducts } from '../asyncMock';
import { useNavigate } from 'react-router-dom';
import { Grid2 } from '@mui/material';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Typography>Cargando productos...</Typography>;
  }

  return (
    <Grid2 container spacing={2} justifyContent="center">
      {products.map((product) => (
        <Grid2 item xs={12} sm={6} md={4} key={product.id}>
        <Card key={product.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <Button onClick={() => navigate(`/item/${product.id}`)}>Detalles del producto</Button>
        </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ItemListContainer;
