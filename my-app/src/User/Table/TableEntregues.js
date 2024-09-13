import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog } from '@mui/material';

const URL = 'https://sistema-de-entregas-ciotta-25e16c0667db.herokuapp.com'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#BEBEBE',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

    

function TableEntregues({open, handleClose}){
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('xl');

    const [rows, setRows] = useState([]);
    useEffect(() => {
      // Simulando a obtenção de dados JSON
      const fetchData = async () => {
        // Substitua a URL pelo endpoint correto para obter os dados
        const response = await fetch(`${URL}/entregas/entregues/70`);
        const data = await response.json();
        setRows(data);
      };
  
      fetchData();
    }, []);
    return(
      
      <Dialog fullWidth={fullWidth}
      maxWidth={maxWidth} open={open}>
        <Button onClick={handleClose}>Fechar</Button>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Pedido</StyledTableCell>
            <StyledTableCell align="center">Cliente</StyledTableCell>
            <StyledTableCell align="center">Bairro</StyledTableCell>
            <StyledTableCell align="center">Situação</StyledTableCell>
            <StyledTableCell align="center">Data Entrega</StyledTableCell>
            <StyledTableCell align="center">Hora Entrega</StyledTableCell>
            <StyledTableCell align="center">Vendedor</StyledTableCell>
            <StyledTableCell align="center">Observacao</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id_entregues} >
              <StyledTableCell align="center" >{row.id_entrega}</StyledTableCell>
              <StyledTableCell align="center">{row.nome_cliente}</StyledTableCell>
              <StyledTableCell align="center">{row.bairro}</StyledTableCell>
              <StyledTableCell align="center">{row.situacao}</StyledTableCell>
              <StyledTableCell align="center">{row.data_entrega}</StyledTableCell>
              <StyledTableCell align="center">{row.hora_entrega}</StyledTableCell>
              <StyledTableCell align="center">{row.vendedor}</StyledTableCell>
              <StyledTableCell align="center">{row.observacao}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Dialog>
        
    );
}

export default TableEntregues;