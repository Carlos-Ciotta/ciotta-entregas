import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Stack, Dialog} from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

function FormStatus({open,handleClose}) {
  const [text1, setText1] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleTextChange1 = (event) => setText1(event.target.value);
  const handleSelectChange = (event) => setSelectValue(event.target.value);
  return (
    <Dialog sx={{'& .MuiPaper-root': {border: '15px solid #FFFFFF',borderRadius: '8px',},}} open={open}>

        <Stack direction="column" spacing={4} sx={{justifyContent: "center",alignItems: "flex-start",}}>
        
        <FormControl fullWidth>
          <TextField label="Número do Pedido" id="id_entrega" margin = "dense" value={text1} onChange={handleTextChange1}/>
        </FormControl>
        
        <FormControl fullWidth>
          <InputLabel>Filtro</InputLabel>
          <Select value={selectValue} onChange={handleSelectChange} label="Select" >
          <MenuItem value="id_pedido">Número do Pedido</MenuItem>
          <MenuItem value="nome">Nome do Cliente</MenuItem>
          <MenuItem value="bairro">Bairro</MenuItem>
        </Select>
        </FormControl>

        <Stack direction="row" spacing={20} sx={{justifyContent: "center",alignItems: "center",}}>
            <Button variant="contained" color="primary" >Pesquisar</Button>
            <Button variant="contained" color="primary" onClick={handleClose}>Cancelar</Button>
        </Stack>
        </Stack>
    </Dialog>
  );
}

export default FormStatus;
