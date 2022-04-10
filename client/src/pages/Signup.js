import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className='card mx-auto col-10 col-lg-6 link'>
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            placeholder='username'
            name='username'
            type='username'
            id='username'
            onChange={handleChange}
          />
        </div>        
        <div>
          <label htmlFor='email'>Email Address:</label>
          <input
            placeholder='email'
            name='email'
            type='email'
            id='email'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='pwd'>Password:</label>
          <input
            placeholder='*******'
            name='password'
            type='password'
            id='pwd'
            onChange={handleChange}
          />
          <div>
            <button className='form-btn' type='submit'>Submit</button>
          </div>
        </div>
      </form>

      <Link to='/login'>Go to Login</Link>
    </div>
  );
}

export default Signup;
