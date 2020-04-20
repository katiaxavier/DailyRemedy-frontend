import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css'

export default function NewRemedy() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [hour, setHour] = useState('');
  const [amount, setAmount] = useState('');

  const userId = localStorage.getItem('userId');

  async function handleNewRemedy(e) {
    e.preventDefault();

    const data = {
      name,
      description,
      hour,
      amount
    };

    try {
      await api.post('remedys', data, {
        headers: {
          Authorization: userId,
        }
      });

      alert('Medicamento adicionado com sucesso!');

      window.location.reload();

    } catch (error) {
      alert('Não foi possivel adicionar medicamento.');
    }
  }
  return (
    <div className="new-remedy-container">
      <div className="content">
        <section>

          {/* <img src={logoImg} alt="Daily Remedy" /> */}

          <h1>Cadastrar novo medicamento</h1>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#295872" />
                    Voltar para home
                </Link>
        </section>

        <form onSubmit={handleNewRemedy}>
          <input placeholder="Nome do medicamento"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input placeholder="Observação"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <div className="input-group">
            <input placeholder="Horário"
              value={hour}
              onChange={e => setHour(e.target.value)}
              />

            <input placeholder="Qtd"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              style={{ width: 100 }}
              />

          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>

    </div>
  );
}