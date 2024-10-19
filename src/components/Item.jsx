/* eslint-disable react/prop-types */
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  const { id, name, price, img } = product;

  if (!id || !name || !price || !img) {
    return (
      <div>
        Product not found
      </div>
    );
  }

  return (
    <Card sx={{ maxWidth: 345, margin: '0 auto', textAlign: 'center' }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
        <Button
          component={Link}
          to={`/item/${id}`}
          variant="contained"
          sx={{ marginTop: 2 }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default Item;
