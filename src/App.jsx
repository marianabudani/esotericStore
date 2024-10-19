import { AppBar, Box } from '@mui/material';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactView from './views/ContactView/ContactView';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './views/ItemListContainer/ItemListContainer';
import { CartProvider } from './context/CartContext';
import CartView from './views/CartView/CartView';
import Checkout from './components/Checkout';
import HomeView from './views/HomeView/HomeView';
import CatalogView from './views/CatalogView/CatalogView';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppBar position="fixed">
          <NavBar />
        </AppBar>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Routes>
            <Route exact path="/" element={<HomeView />} />
            <Route exact path="/catalog" element={<CatalogView />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/contact" element={<ContactView />} />
            <Route exact path="/cart" element={<CartView />} />
            <Route exact path="/checkout" element={<Checkout/>} />
          </Routes>
        </Box>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
