/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {
  const turnos = ["Madrugada", "Manhã", "Tarde", "Noite"];
  const [remedys, setRemedys] = useState([]);

  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    api.get('profiles', {
      headers: {
        Authorization: userId,
      }
    }).then(response => {
      setRemedys(response.data);
    })
  }, [userId]);


  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Daily Remedy" />
        <span>Bem vindo(a), {userName}</span>

        <Link className="button" to="/remedys/new">
          Cadastrar novo medicamento
        </Link>
        <button type="button">
          <FiPower size={18} color="#295872" />
        </button>
      </header>

      {turnos.map(turno => {
        return (
          <table >
            <tr>
              <th className="th" colSpan="5">
                <p>{turno}</p>
              </th>
            </tr>

            <tr className="back-tr">
              <th>Remédio</th>
              <th>Observação</th>
              <th>Qtd</th>
              <th>Horas</th>
              <th></th>
            </tr>

            {remedys.map(remedy => {
              if (remedy.shift === turno) {
                return (
                  <tr key={remedy.id}>
                    <th>{remedy.name}</th>
                    <th>{remedy.description}</th>
                    <th>{remedy.shift}</th>
                    <th>{remedy.hour}</th>
                    <th>
                      <button type="button">
                        <FiTrash2 size={20} color="#295872" />
                      </button>
                    </th>
                  </tr>
                )
              }
            })}
          </table>
        )
      })
      }
    </div>

  );
}