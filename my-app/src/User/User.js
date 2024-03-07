import '../User/User_style.css';
import React from 'react';

function User(){
    return(
        <body>
            <div className='table_container'>
            <table>
                <thead>
                    <tr>
                        <th>Pedido</th>
                        <th>Nome Cliente</th>
                        <th>Bairro</th>
                        <th>Situação</th>
                        <th>Data Entrega</th>
                        <th>Hora Entrega</th>
                        <th>Observação</th>
                        <th>Vendedor</th>
                    </tr>
                </thead>
                <tbody id="tabelaBody">
                    {/* Aqui você pode adicionar as linhas da tabela dinamicamente, se necessário */}
                </tbody>
            </table>

            </div>
        </body>
        
    );
}
export default User;
