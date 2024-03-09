import React, { useState } from 'react';
import '../Form/Form_style.css';

function Form_insert(){
    const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    var button_open = document.getElementById('openModal');
    button_open.style.display = 'none'
    setIsOpen(true);

  };

  const closeModal = () => {
    setIsOpen(false);
    var button_open = document.getElementById('openModal');
    button_open.style.display = 'block'
  };

  return (
    <div>
      <button id="openModal" onClick={openModal} style={{display:'block'}}>Open the modal</button>

      {isOpen && (
        <div className="modal">
          <div className="container">
            <button id="closeModal" className="modal-close-btn" onClick={closeModal}>Close</button>
            <label htmlFor="id_input">Número do Pedido:</label>
            <input type="text" id="id_input"/>

            <label htmlFor="nome_input">Nome do Cliente:</label>
            <input type="text" id="nome_input" />

            <label htmlFor="cmbOpcoes">Bairro:</label>
            <select id="cmbOpcoes">
                <option value="opcao1">Selecione o Bairro</option>
                <option value="Esplanada">Esplanada</option>
                <option value="Palmital">Palmital</option>
                <option value="São Vendelino">São Vendelino</option>
                <option value="Agua Amarela">Agua Amarela</option>
                <option value="Seminário">Seminário</option>
                <option value="Quedas do Palmital">Quedas do Palmital</option>
                <option value="Universitário">Universitário</option>
                <option value="Linha das Palmeira">Linha das Palmeira</option>
                <option value="Linha São Rafael">Linha São Rafael</option>
                <option value="Lajeado Veríssimo">Lajeado Veríssimo</option>
                <option value="Linha São Francisco">Linha São Francisco</option>
                <option value="Linha Pequena">Linha Pequena</option>
                <option value="Dom José Gomes">Dom José Gomes</option>
                <option value="Aldeia Indígena Condá">Aldeia Indígena Condá</option>
                <option value="Santa Maria">Santa Maria</option>
                <option value="Santo Antônio">Santo Antônio</option>
                <option value="Saic">Saic</option>
                <option value="Maria Goretti">Maria Goretti</option>
                <option value="Jardim Itália">Jardim Itália</option>
                <option value="São Pedro">São Pedro</option>
                <option value="Efapi">Efapi</option>
                <option value="São Cristóvão">São Cristóvão</option>
                <option value="Trevo">Trevo</option>
                <option value="Passo dos Fortes">Passo dos Fortes</option>
                <option value="Pinheirinho">Pinheirinho</option>
                <option value="Expoente">Expoente</option>
                <option value="Monte Castelo">Monte Castelo</option>
                <option value="Cordilheira Alta">Cordilheira Alta</option>
            </select><br></br>

            <label htmlFor="radio_delivery_time">Horário de Entrega</label><br></br>
            <label>
                <input type="radio" id="radOpcao" value="Manhã" name="opcaoRadio1"/> Manhã
            </label>
            <label>
                <input type="radio" id="radOpcao" value = "Tarde" name="opcaoRadio1"/> Tarde
            </label><br></br>

            <label htmlFor="radio_sales_person">Vendedor</label><br></br>
            <label>
                <input type="radio" id="opcaoRadio" value="Terezinha" name="opcaoRadio" class="radio-group"/> Terezinha
            </label>
            <label>
                <input type="radio" id="opcaoRadio" value="Eliane" name="opcaoRadio"class="radio-group"/> Eliane
            </label>
            <label>
                <input type="radio" id="opcaoRadio" value="Elcir" name="opcaoRadio"class="radio-group"/> Elcir
            </label>
            <label>
                <input type="radio" id="opcaoRadio" value="Carlos Ciotta" name="opcaoRadio"class="radio-group"/> Carlos Ciotta
            </label>
            <label>
                <input type="radio" id="opcaoRadio" value="Evandro" name="opcaoRadio"class="radio-group"/> Evandro
            </label>
            <label>
                <input type="radio" id="opcaoRadio" value="Carlos Eduardo" name="opcaoRadio"class="radio-group"/> Carlos Eduardo
            </label><br></br>

            <label htmlFor="datePicker">Data de Entrega</label><br></br>
            <input type="date" id="datePicker" /><br />
            <label htmlFor="observacao_input">Observações (opcional):</label>
            <input type="text" id="observacao_input"/>

            <button id="enviarBtn" className="button" style={{ float: 'right' }}>Enviar Entrega</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form_insert;