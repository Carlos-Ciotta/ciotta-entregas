import '../HomePage/HomePage_style.css';
import React from 'react';

function HomePage() {
    function display_password_fields() {
        var input_password = document.getElementById('input_password');
        var button_password = document.getElementById('button_password');
        var button_show = document.getElementById('button_show');
        var button_register_interface = document.getElementById('button_register_interface');

        if (input_password.style.display === 'none') {
            input_password.style.display = 'block';
            button_password.style.display = 'block';
            button_show.style.display = 'none';
        } else {
            input_password.style.display = 'none';
            button_password.style.display = 'none';
            button_show.style.display = 'block';
        }
    };

    return (
        <div className='container'>
            <h2>Selecione uma opção</h2>
            <button id = "button_register_interface"style ={{ display: 'block'}} >Cadastrar Entregas</button><br></br>
            <button id="button_show" style ={{ display: 'block'}} onClick={display_password_fields}>Operar Entregas</button><br></br>
            <input id="input_password" type="password" style={{ display: 'none' }}></input>
            <button id="button_password" className="button_password" style={{ display: 'none' }}>Entrar</button>
        </div>
    );
}

export default HomePage;
