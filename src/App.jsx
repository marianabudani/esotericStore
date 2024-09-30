import { AppBar } from '@mui/material';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactView from './views/ContactView/ContactView';
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
import CategoryView from './views/CategoryView/CategoryView';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <BrowserRouter>
      <AppBar position="fixed">
        <NavBar />
      </AppBar>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/category/:id" element={<CategoryView />} />
        <Route exact path="/contact" element={<ContactView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
