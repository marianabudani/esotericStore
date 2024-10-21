import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ContactView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        maxWidth: 500,
        margin: '0 auto',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    InputProps={{
                        style: { 
                            backgroundColor: '#cccc', 
                            color: '#005568',
                            fontSize: '16px',
                            fontFamily: 'Arial',
                        },
                    }}
                    sx={{
                        '& .MuiInputLabel-root': { 
                            color: '#005568', 
                        },
                        '& .MuiOutlinedInput-root': { // Estilo del borde
                            '& fieldset': {
                                borderColor: '#005568', // Color del borde
                            },
                            '&:hover fieldset': {
                                borderColor: '#005568', // Color del borde al pasar el ratón
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#005568', // Color del borde cuando está enfocado
                            },
                        },
                    }}
                />
                          <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    InputProps={{
                        style: { 
                            backgroundColor: '#cccc', 
                            color: '#005568', 
                            fontSize: '16px',
                            fontFamily: 'Arial',
                        },
                    }}
                    sx={{
                        '& .MuiInputLabel-root': { 
                            color: '#005568',
                        },
                        '& .MuiOutlinedInput-root': { 
                            '& fieldset': {
                                borderColor: '#005568', 
                            },
                            '&:hover fieldset': {
                                borderColor: '#005568',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#005568', 
                            },
                        },
                    }}
                />
        <TextField
          label="Mensaje"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          InputProps={{
            style: { 
                backgroundColor: '#cccc', 
                color: '#005568', 
                fontSize: '16px',
                fontFamily: 'Arial',
            },
        }}
        sx={{
            '& .MuiInputLabel-root': { 
                color: '#005568',
            },
            '& .MuiOutlinedInput-root': { 
                '& fieldset': {
                    borderColor: '#005568', 
                },
                '&:hover fieldset': {
                    borderColor: '#005568',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#005568', 
                },
            },
        }}
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ContactView;
