import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "../../components/Cart";
import CartActions from "../../components/CartActions";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const CartView = () => {
    const { cart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant="h6">
                No items in the cart. <Link to='/'>Go back to Products</Link>
            </Typography>
            </Box>
        );
    }

    return (
        <>
            {cart.map(product => (
                <Cart key={product.id} {...product} />
            ))}
            <Typography variant="h5" sx={{ marginTop: 2 }}>
                Total: ${total}
            </Typography>
            <CartActions/>
        </>
    );
};

export default CartView;
