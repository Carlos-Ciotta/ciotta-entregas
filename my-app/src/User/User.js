import React from 'react';
import { Container, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Radio, RadioGroup, Button, Stack,Grid2, Box, FormLabel } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

function User(){
    return(
        <Container>
            <ThemeProvider theme={{palette: {primary: {main: '#007FFF',dark: '#0066CC',},},}}>
            <Box sx={{width: 100,height: 100,borderRadius: 1,bgcolor: 'primary.main','&:hover': {bgcolor: 'primary.dark',},}}>
            
            </Box>
            </ThemeProvider>
            
            <Stack>

            </Stack>
        </Container>
    );
}
export default User;
