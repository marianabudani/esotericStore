import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const categories = [
  { key: '1', name: 'Tarot', id: 'tarot' },
  { key: '2', name: 'Herbs', id: 'herbs' },
  { key: '3', name: 'Books', id: 'books' },
];

const CategoryMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="inherit"
        sx={{ mr: 2, color: '#E1BEE7', borderColor: '#E1BEE7' }}
        onClick={handleClick}
      >
        Categories
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        {categories.map((category) => (
          <MenuItem key={category.key} onClick={handleClose}>
            <Link to={`/category/${category.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {category.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CategoryMenu;
