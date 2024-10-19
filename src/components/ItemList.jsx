/* eslint-disable react/prop-types */
import { Grid2 } from '@mui/material';
import Item from './Item'; 

const ItemList = ({ products }) => {
  return (
    <Grid2 container spacing={2} justifyContent="center">
      {products.map((product) => (
        <Grid2 item xs={12} sm={6} md={4} key={product.id}>
          <Item product={product} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ItemList;
