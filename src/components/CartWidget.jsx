import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
  return (
    <>
        <Badge badgeContent={17} color="error">
            <CardGiftcardIcon />
        </Badge>
    </>
  )
}

export default CartWidget