import React, { useState } from 'react';
import { Container, Button, Stack } from '@mui/material';
import FormInsert from './Form/FormInsert';
import FormUpdate from './Form/FormUpdate';
import FormStatus from './Form/FormStatus';
import TableEntregues from './Table/TableEntregues';
import TableUser from './Table/TableUser';
import Header from './Header'

function User(){
      const [openInsert, setOpenInsert] = useState(false);
      const handleOpenInsert = () => setOpenInsert(true);
      const handleCloseInsert = () => setOpenInsert(false);

      const [openUpdate, setOpenUpdate] = useState(false);
      const handleOpenUpdate = () => setOpenUpdate(true);
      const handleCloseUpdate = () => setOpenUpdate(false);

      const [openStatus, setOpenStatus] = useState(false);
      const handleOpenStatus = () => setOpenStatus(true);
      const handleCloseStatus = () => setOpenStatus(false);

      const [openTEntregues, setOpenTEntregues] = useState(false);
      const handleOpenTEntregues = () => setOpenTEntregues(true);
      const handleCloseTEntregues = () => setOpenTEntregues(false);

    return(
<div style={{backgroundColor: '#323232'}}>
      <Header></Header>

      <Stack direction="row" spacing= {2} sx={{justifyContent: "space-evenly",alignItems: "center", marginTop:10, marginBottom:20}} >
      <Button onClick={handleOpenInsert}>Cadastrar Entrega</Button>
      <Button onClick={handleOpenStatus}>Verificar Status</Button>
      <Button onClick={handleOpenUpdate}>Atualizar Entrega</Button>
      <Button onClick={handleOpenTEntregues}>Ver Entregues</Button>
      </Stack>

      <FormInsert open={openInsert} handleClose={handleCloseInsert}></FormInsert>
      <FormUpdate open={openUpdate} handleClose={handleCloseUpdate}></FormUpdate>
      <FormStatus open={openStatus} handleClose={handleCloseStatus}></FormStatus>
      <TableEntregues open={openTEntregues} handleClose={handleCloseTEntregues}></TableEntregues>
      <Container>
      <TableUser></TableUser>
      </Container>
      
      </div>
    );
    
}
export default User;