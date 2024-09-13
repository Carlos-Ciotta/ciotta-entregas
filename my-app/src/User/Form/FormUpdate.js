import React, { useState } from 'react';
import { Container, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Radio, RadioGroup, Button, Stack, FormLabel, Dialog} from '@mui/material';
import { LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

function FormUpdate({open,handleClose}) {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [radioValue1, setRadioValue1] = useState('option1');
  const [radioValue2, setRadioValue2] = useState('optionA');
  const [date, setDate] = useState(null);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('lg');

  const handleTextChange1 = (event) => setText1(event.target.value);
  const handleTextChange2 = (event) => setText2(event.target.value);
  const handleTextChange3 = (event) => setText3(event.target.value);
  const handleSelectChange = (event) => setSelectValue(event.target.value);
  const handleRadioChange1 = (event) => setRadioValue1(event.target.value);
  const handleRadioChange2 = (event) => setRadioValue2(event.target.value);
  const handleDateChange = (newValue) => setDate(newValue);
  return (
    <Dialog fullWidth={fullWidth}
    maxWidth={maxWidth} open={open}>
    <Container>
        <Stack direction="column" spacing={4} sx={{justifyContent: "center",alignItems: "flex-start",}}>
        
        <Stack direction="row">
          <TextField label="Número do Pedido" id="id_entrega" margin = "dense" value={text1} onChange={handleTextChange1}/>
          <Button>Pesquisar</Button>
        </Stack>
        
        <FormControl fullWidth>
        <TextField label="Nome do Cliente" id="id_entrega" margin = "dense" value={text2} onChange={handleTextChange2}/>
        </FormControl>
        
        <FormControl fullWidth>
          <InputLabel>Bairro</InputLabel>
          <Select value={selectValue} onChange={handleSelectChange} label="Select" >
          <MenuItem value="Esplanada">Esplanada</MenuItem>
          <MenuItem value="Palmital">Palmital</MenuItem>
          <MenuItem value="São Vendelino">São Vendelino</MenuItem>
          <MenuItem value="Agua Amarela">Agua Amarela</MenuItem>
          <MenuItem value="Seminário">Seminário</MenuItem>
          <MenuItem value="Quedas do Palmital">Quedas do Palmital</MenuItem>
          <MenuItem value="Universitário">Universitário</MenuItem>
          <MenuItem value="Linha das Palmeira">Linha das Palmeira</MenuItem>
          <MenuItem value="Linha São Rafael">Linha São Rafael</MenuItem>
          <MenuItem value="Lajeado Veríssimo">Lajeado Veríssimo</MenuItem>
          <MenuItem value="Linha São Francisco">Linha São Francisco</MenuItem>
          <MenuItem value="Linha Pequena">Linha Pequena</MenuItem>
          <MenuItem value="Dom José Gomes">Dom José Gomes</MenuItem>
          <MenuItem value="Aldeia Indígena Condá">Aldeia Indígena Condá</MenuItem>
          <MenuItem value="Santa Maria">Santa Maria</MenuItem>
          <MenuItem value="Santo Antônio">Santo Antônio</MenuItem>
          <MenuItem value="Saic">Saic</MenuItem>
          <MenuItem value="Maria Goretti">Maria Goretti</MenuItem>
          <MenuItem value="Jardim Itália">Jardim Itália</MenuItem>
          <MenuItem value="São Pedro">São Pedro</MenuItem>
          <MenuItem value="Efapi">Efapi</MenuItem>
          <MenuItem value="São Cristóvão">São Cristóvão</MenuItem>
          <MenuItem value="Trevo">Trevo</MenuItem>
          <MenuItem value="Passo dos Fortes">Passo dos Fortes</MenuItem>
          <MenuItem value="Pinheirinho">Pinheirinho</MenuItem>
          <MenuItem value="Expoente">Expoente</MenuItem>
          <MenuItem value="Monte Castelo">Monte Castelo</MenuItem>
          <MenuItem value="Cordilheira Alta">Cordilheira Alta</MenuItem>
          <MenuItem value="Monte Alegre">Monte Alegre</MenuItem>
          <MenuItem value="Centro">Centro</MenuItem>
          <MenuItem value="Ludovico Silvestre">Ludovico Silvestre</MenuItem>
          <MenuItem value="Bom Pastor">Bom Pastor</MenuItem>
          <MenuItem value="Caic">Caic</MenuItem>
          <MenuItem value="Lider">Lider</MenuItem>
          <MenuItem value="Vila Real">Vila Real</MenuItem>
          <MenuItem value="Aeroporto">Aeroporto</MenuItem>
          <MenuItem value="Passo dos Ferreira">Passo dos Ferreira</MenuItem>
          <MenuItem value="Marechal Bormann">Marechal Bormann</MenuItem>
          <MenuItem value="Parque das Palmeiras">Parque das Palmeiras</MenuItem>
          <MenuItem value="Assentamento Dom José Gomes">Assentamento Dom José Gomes</MenuItem>
          <MenuItem value="Presidente Médici">Presidente Médici</MenuItem>
        </Select>
        </FormControl>

        <FormControl component="fieldset">
        <FormLabel >Período de Entrega</FormLabel>
        <RadioGroup value={radioValue2} onChange={handleRadioChange2}>
          <FormControlLabel value="manha" control={<Radio />} label="Manhã" />
          <FormControlLabel value="tarde" control={<Radio />} label="Tarde" />
        </RadioGroup>
        </FormControl>

        <FormControl component="fieldset">
        <FormLabel >Vendedor</FormLabel>
        <RadioGroup value={radioValue1} onChange={handleRadioChange1}>
        <FormControlLabel value="Evandro" control={<Radio />} label="Evandro" />
          <FormControlLabel value="Terezinha" control={<Radio />} label="Terezinha" />
          <FormControlLabel value="Eliane" control={<Radio />} label="Eliane" />
          <FormControlLabel value="Carlos Eduardo" control={<Radio />} label="Carlos Eduardo" />
          <FormControlLabel value="Elcir" control={<Radio />} label="Elcir" />
          <FormControlLabel value="Carlos Eduardo" control={<Radio />} label="Carlos Ciotta" />
        </RadioGroup>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Data de Entrega" value={date} onChange={handleDateChange}/>
        </LocalizationProvider>

        <FormControl fullWidth>
        <TextField label="Observações (Opcional)" id="id_entrega" margin = "dense" value={text3} onChange={handleTextChange3}/>
        </FormControl>

        <Stack direction="row" spacing={115} sx={{justifyContent: "center",alignItems: "center",}}>
            <Button variant="contained" color="primary" >Alterar</Button>
            <Button variant="contained" color="primary" onClick={handleClose}>Cancelar</Button>
        </Stack>
        </Stack>
    </Container>
    </Dialog>
  );
}

export default FormUpdate;
