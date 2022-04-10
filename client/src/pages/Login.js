import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor='email'>Email Address:</label>
          <input
            placeholder='youremail@test.com'
            name='email'
            type='email'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='pwd'>Password:</label>
          <input
            placeholder='******'
            name='password'
            type='password'
            id='pwd'
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p>The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div>
          <button className='form-btn' type='submit'>Submit</button>
        </div>
      </form>
      <Link to='/signup'>Go to Signup</Link>
    </div>
  );
}

export default Login;
