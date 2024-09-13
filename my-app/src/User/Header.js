import React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export default function BoxSx() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#E38020',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          height: 94,
          borderRadius: 0,
          background: 'linear-gradient(to left, #E38020, #FFFFFF 80%)', // Gradiente do laranja para o branco
          justifyContent: 'flex-start',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          display: 'flex', // Garante que a imagem esteja centralizada
          alignItems: 'center', // Centraliza a imagem verticalmente
        }}
      >
        <img 
          src="Logo horizontal.PNG" // Substitua pelo caminho da sua imagem
          alt="Logo"
          style={{ 
            maxWidth: '100%', // Garante que a imagem não exceda a largura do Box
            height: 'auto'    // Mantém a proporção da imagem
          }}
        />
      </Box>
    </ThemeProvider>
  );
}