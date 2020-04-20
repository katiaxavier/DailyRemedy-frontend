import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp
        };

        try {
            const response = await api.post('users', data);

            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');

        } catch (err) {
            alert(`${err}`);
        }
    }

    return <div className="register-container">
        <div className="content">
            <section>

                {/* <img src={logoImg} alt="Daily Remedy" /> */}

                <h1>Cadastro</h1>

                <p>Faça seu cadastro, organize os horários de seus medicamentos.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#295872" />
                        Faça seu logon
                    </Link>
            </section>

            <form onSubmit={handleRegister}>
                <input placeholder="Nome do Usuário"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input type="email" placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                />

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>

    </div>
}