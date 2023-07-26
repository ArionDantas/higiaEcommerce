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

  console.log(name, pass);

  return (
    <div className='content align-items-center'>
      <p>Name</p>
      <input type="text" onChange={({ target: { value } }) => setName(value)} value={name} />

      <p>Password</p>
      <input type="password" onChange={({ target: { value } }) => setPass(value)} value={pass} />

      <button
        type='button'
        onClick={() => saveUser(name, pass)}
        disabled={!cond}
      >
        Sign in
      </button>
    </div>
  );
};

export default Login;
