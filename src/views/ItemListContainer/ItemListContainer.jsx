import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../services/firebase/productsService';
import ItemList from '../../components/ItemList';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        if (id) {

          const data = await getProductsByCategory(id);
          setProducts(data);
        } else {

          const data = await getProducts();
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <ItemList products={products} />
    </Box>
  );
};

export default ItemListContainer;
