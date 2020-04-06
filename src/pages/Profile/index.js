import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Daily Remedy" />
        <span>Bem vindo(a), Kátia Xavier</span>

        <Link className="button" to="/remedys/new">
          Cadastrar novo medicamento
        </Link>
        <button type="button">
          <FiPower size={18} color="#295872" />
        </button>
      </header>

      <div>

        <table>
          <tr>
          <th className="th" colspan="5">
              <p>MANHÃ</p>
            </th>
          </tr>

          <tr className="back-tr">
            <th>Remédio</th>
            <th>Observação</th>
            <th>Qtd</th>
            <th>Horas</th>
            <th></th>
          </tr>

          <tr>
            <th>DIAMICRON 60mg</th>
            <th>Jejum</th>
            <th>2</th>
            <th>07:00</th>

            <th>
              <button type="button">
                <FiTrash2 size={20} color="#295872" />
              </button>
            </th>

          </tr>

          <tr>
            <th>DIAMICRON 60mg</th>
            <th>Jejum</th>
            <th>2</th>
            <th>07:00</th>

            <th>
              <button type="button">
                <FiTrash2 size={20} color="#295872" />
              </button>
            </th>

          </tr>

          <tr>
            <th>DIAMICRON 60mg</th>
            <th>Jejum</th>
            <th>2</th>
            <th>07:00</th>


            <th>
              <button type="button">
                <FiTrash2 size={20} color="#295872" />
              </button>
            </th>

          </tr>

        </table>
      </div>

      <table>

        <tr>
          <th className="th" colspan="5">
            <p>TARDE</p>
          </th>
        </tr>

        <tr className="back-tr">
          <th>Remedio</th>
          <th>Observação</th>
          <th>Qtd</th>
          <th>Horas</th>
          <th></th>
        </tr>

        <tr>
          <th>DIAMICRON 60mg</th>
          <th>Jejum</th>
          <th>2</th>
          <th>07:00</th>
          <th>
            <button type="button">
              <FiTrash2 size={20} color="#295872" />
            </button>
          </th>
        </tr>

        <tr>
          <th>DIAMICRON 60mg</th>
          <th>Jejum</th>
          <th>2</th>
          <th>07:00</th>
          <th>
            <button type="button">
              <FiTrash2 size={20} color="#295872" />
            </button>
          </th>
        </tr>

        <tr>
          <th>DIAMICRON 60mg</th>
          <th>Jejum</th>
          <th>2</th>
          <th>07:00</th>
          <th>
            <button type="button">
              <FiTrash2 size={20} color="#295872" />
            </button>
          </th>
        </tr>

      </table>
    </div>

  );
}