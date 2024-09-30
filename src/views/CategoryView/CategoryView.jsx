import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategory } from '../../asyncMock';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CategoryView = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategory(id).then((filteredProducts) => {
      setProducts(filteredProducts);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Typography>Cargando productos...</Typography>;
  }

  if (products.length === 0) {
    return <Typography>No se encontraron productos en esta categoría.</Typography>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {products.map((product) => (
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
        </Card>
      ))}
    </div>
  );
};

export default CategoryView;
