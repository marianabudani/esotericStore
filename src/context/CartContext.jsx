import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (product, quantity) => {
        if (!existProd(product.id)) {
            setCart(prev => [...prev, { ...product, quantity }]);
        } else {
            console.error('Already in cart');
        }
    };

    const removeProd = (productId) => {
        setCart(cart.filter(prod => prod.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const existProd = (productId) => {
        return cart.some(prod => prod.id === productId);
    };

    const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeProd, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};
