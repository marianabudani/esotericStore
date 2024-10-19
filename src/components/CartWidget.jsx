import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import {Link} from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
      <Link to='/cart'>
          <Badge badgeContent={totalQuantity} color="error">
              <CardGiftcardIcon />
          </Badge>
      </Link>
  );
};


export default CartWidget