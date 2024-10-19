import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../services/firebase/productsService'; // Asegúrate de importar getProductsByCategory
import ItemList from '../../components/ItemList';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Obtener el parámetro de la categoría de la URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Mostrar el loader antes de la carga
        if (id) {
          // Si hay un ID de categoría, obtén los productos por categoría
          const data = await getProductsByCategory(id);
          setProducts(data);
        } else {
          // Si no hay ID de categoría, obtén todos los productos
          const data = await getProducts();
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Ocultar el loader al finalizar la carga
      }
    };

    fetchProducts();
  }, [id]); // El efecto se vuelve a ejecutar si cambia el ID

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
