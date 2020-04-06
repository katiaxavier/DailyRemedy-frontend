import React from 'react'
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){

  return <div className="register-container">
        <div className="content">
            <section>
            
              {/* <img src={logoImg} alt="Daily Remedy" /> */}
              
                <h1>Cadastro</h1>

                <p>Faça seu cadastro, organize os horários de seus medicamentos.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#295872" />
                        Não tenho cadastro
                    </Link>
            </section>

            <form 
            // onSubmit={handleRegister}
            >
                <input placeholder="Nome do Usuário"
                    // value={name}
                    // onChange={e => setName(e.target.value)}
                     />

                <input type="email" placeholder="E-mail"
                    // value={email}
                    // onChange={e => setEmail(e.target.value)} 
                    />

                <input placeholder="Whatsapp"
                    // value={whatsapp}
                    // onChange={e => setWhatsapp(e.target.value)} 
                    />

                <div className="input-group">
                    <input placeholder="Cidade"
                        // value={city}
                        // onChange={e => setCity(e.target.value)} 
                        />

                    <input placeholder="UF"
                        // value={uf}
                        // onChange={e => setUf(e.target.value)}

                        style={{ width: 80 }} />
                </div>

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>

    </div>
}