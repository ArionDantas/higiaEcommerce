import React, { useState } from 'react'
import { setItem, getItem } from '../../services/LocalStorageFuncs'
import { Navigate, useNavigate } from 'react-router'

const ProfileEdit = () => {

    const navigate = useNavigate();
    const user = getItem('user')

    const [name, setName] = useState(user.name || '')
    const [email, setEmail] = useState(user.email || '')
    const [pass, setPass] = useState(user.pass || '')
    const [imgURL, setImgURL] = useState(user.imgURL || '')
    const [cpf, setCPF] = useState(user.cpf|| '')

    const cond = (
        name.length > 3 && (email.includes('@') && email.includes('.') && email.length > 8) && pass.length > 8 && imgURL.length > 4 && cpf.length === 11
    )

    const saveChanges = () => {
        setItem('user', { name, email, cpf, pass, imgURL })
        navigate('/conta')
        window.location.reload()
    }

    console.log(name, email, pass, imgURL, cpf);

    return (
        <div className='content'>
            <h1>Aqui é editar usuário</h1>

            <p>Name:</p>
            <input
                type="text"
                value={name}
                onChange={({ target: { value } }) => setName(value)}
            />
            <p>Email:</p>
            <input
                type="email"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
            />
            <p>Password:</p>
            <input
                type="password"
                value={pass}
                onChange={({ target: { value } }) => setPass(value)}
                
            />
            <p>Image URL:</p>
            <input
                type="text"
                value={imgURL}
                onChange={({ target: { value } }) => setImgURL(value)}
            />
            <p>CPF:</p>
            <input
                type="number"
                value={cpf}
                onChange={({ target: { value } }) => setCPF(value)}
            />

            <button
                disabled={!cond}
                onClick={saveChanges}
            >Salvar mudanças</button>

        </div>
    )
}

export default ProfileEdit
