import React, { useState } from 'react';
import { Container, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Radio, RadioGroup, Button, Stack,Grid2, Box, FormLabel } from '@mui/material';
import { LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Form_update() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [radioValue1, setRadioValue1] = useState('option1');
  const [radioValue2, setRadioValue2] = useState('optionA');
  const [date, setDate] = useState(null);

  const handleTextChange1 = (event) => setText1(event.target.value);
  const handleTextChange2 = (event) => setText2(event.target.value);
  const handleTextChange3 = (event) => setText3(event.target.value);
  const handleSelectChange = (event) => setSelectValue(event.target.value);
  const handleRadioChange1 = (event) => setRadioValue1(event.target.value);
  const handleRadioChange2 = (event) => setRadioValue2(event.target.value);
  const handleDateChange = (newValue) => setDate(newValue);
  return (
    <Container>
        <Stack direction="column" spacing={4} sx={{justifyContent: "center",alignItems: "flex-start",}}>
        
        <FormControl fullWidth>
          <TextField label="Número do Pedido" id="id_entrega" margin = "dense" value={text1} onChange={handleTextChange1}/>
          <TextField label="Nome do Cliente" id="id_entrega" margin = "dense" value={text2} onChange={handleTextChange2}/>
        </FormControl>
        
        <FormControl fullWidth>
          <InputLabel>Bairro</InputLabel>
          <Select value={selectValue} onChange={handleSelectChange} label="Select" >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
        </FormControl>

        <FormControl component="fieldset">
        <FormLabel >Período de Entrega</FormLabel>
        <RadioGroup value={radioValue2} onChange={handleRadioChange2}>
          <FormControlLabel value="optionA" control={<Radio />} label="Radio A" />
          <FormControlLabel value="optionB" control={<Radio />} label="Radio B" />
        </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
        <FormLabel >Vendedor</FormLabel>
        <RadioGroup value={radioValue1} onChange={handleRadioChange1}>
          <FormControlLabel value="option1" control={<Radio />} label="Radio 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Radio 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Radio 3" />
        </RadioGroup>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Data de Entrega"/>
        </LocalizationProvider>

        <FormControl fullWidth>
        <TextField label="Observações (Opcional)" id="id_entrega" margin = "dense" value={text3} onChange={handleTextChange3}/>
        </FormControl>

        <Stack direction="row" sx={{justifyContent: "space-evenly",alignItems: "center",}}>
            <Button variant="contained" color="primary" >Alterar Entrega</Button>
            <Button variant="contained" color="primary" >Voltar</Button>
        </Stack>
        </Stack>
    </Container>
  );
}

export default Form_update;
