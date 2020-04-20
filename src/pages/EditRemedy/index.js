import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

export default function NewRemedy() {
  return (
    <div className="new-remedy-container">
      <div className="content">
        <section>

          {/* <img src={logoImg} alt="Daily Remedy" /> */}

          <h1>Editar medicamento</h1>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#295872" />
                    Voltar para home
                </Link>
        </section>

        <form
        // onSubmit={handleRegister}
        >
          <input placeholder="Nome do medicamento"
          // value={name}
          // onChange={e => setName(e.target.value)}
          />

          <input placeholder="Observação"
          // value={email}
          // onChange={e => setEmail(e.target.value)} 
          />

          <div className="input-group">
            <input placeholder="Horário"
              // value={whatsapp}
              // onChange={e => setWhatsapp(e.target.value)} 
              style={{ width: 200 }}
            />

            <input placeholder="Qtd"
              // value={uf}
              // onChange={e => setUf(e.target.value)}

              style={{ width: 80 }} />

            <select className="custom-select">
              <option value="" >Turno</option>
              <option value="manhã">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
            </select>
          </div>


          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>

    </div>
  );
}