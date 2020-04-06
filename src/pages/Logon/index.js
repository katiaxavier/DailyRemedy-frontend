import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css'

import remedyImg from '../../assets/remedy.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={remedyImg} alt="remedy" />
        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#295872" />
            Não tenho cadastro
        </Link>
        </form>
      </section>


    </div>
  );
}