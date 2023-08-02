import React, { useState } from 'react';
import { getItem, setItem } from '../../services/LocalStorageFuncs';
import { useNavigate } from 'react-router';

const Login = () => {
  const user = getItem('user') || {};

  const [name, setName] = useState(user.name || '');
  const [pass, setPass] = useState(user.pass || '');

  const navigate = useNavigate();
  const cond = name.length > 5 && pass.length > 5;

  const saveUser = (name, pass) => {
    if (name === user.name && pass === user.pass) {
      navigate('/');
    } else {
      setItem('user', { name, pass });
      navigate("/");
    }
  };

  const style = {
    width: '25%',
    backgroundColor: '#ddd'
  }

  console.log(name, pass);

  return (
    <div className='content d-flex justify-content-center align-items-center'>

      <form action="#" className='border rounded px-4 pt-5 pb-3 mt-5 shadow' style={style}>

        <div className='w-100 d-flex aling-items-center'> 
          <img src="src/img/logo-higia-bgremove.png" alt="Logo higia" className="mx-auto" style={{ width: '100px', height: '100px' }} />
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group mb-3">
              <label git className='mb-2' htmlFor="user">Usuário:</label>
              <input
                placeholder='Digite seu usuário'
                id="user"
                className="form-control"
                type="text"
                onChange={({ target: { value } }) => setName(value)} value={name}
              />
            </div>

            <div className="form-group mb-3">
              <label git className='mb-2' htmlFor="pass">Senha:</label>
              <input
                placeholder='Digite sua senha'
                id="pass"
                className="form-control"
                type="password"
                onChange={({ target: { value } }) => setPass(value)} value={pass}
              />
            </div>
          </div>
        </div>

        {/* <p>Name</p>
        <input type="text" onChange={({ target: { value } }) => setName(value)} value={name} />

        <p>Password</p>
        <input type="password" onChange={({ target: { value } }) => setPass(value)} value={pass} /> */}

        <button
          className='btn btn-success w-100 mt-5'
          type='button'
          onClick={() => saveUser(name, pass)}
          disabled={!cond}
        >
          Login
        </button>

      </form>


    </div>
  );
};

export default Login;