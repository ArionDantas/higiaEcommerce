import React from 'react'
import { getItem } from '../../services/LocalStorageFuncs'
import { Link } from 'react-router-dom'

const Profile = () => {

    const user = getItem('user')

  return (
    <div className='content'>
        <h1>Aqui é profile</h1>


        <p>{`Nome: ${user.name}`}</p>
        <p>{`CPF: ${user.cpf}`}</p>
        <p>{`Email: ${user.email}`}</p>
        <p>{`Senha: ${user.pass}`}</p>
         <p>Imagem:</p>
         <img src={user.imgURL} alt="img-user" width={200} height={200}/>

        <Link to={'/conta/editar'}>Editar perfil</Link>

    </div>
  )
}

export default Profile
