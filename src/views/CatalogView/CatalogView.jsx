import { useEffect, useState } from 'react';
import { getProducts } from '../../services/firebase/productsService'; // Asegúrate de importar la función correcta
import ItemList from '../../components/ItemList';
import { Box, Typography } from '@mui/material';

const CatalogView = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Typography variant="h4" gutterBottom>
        Product Catalog
      </Typography>
      <ItemList products={products} />
    </Box>
  );
};

export default CatalogView;
