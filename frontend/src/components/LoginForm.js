import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const resp = await axios.post(
        'http://localhost:5000/login',
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      let user = resp.data.user
      // console.log(user)
      navigate('/dashbord', { state: { user: email } })
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log({ msg: error.message })
    }
  }
  return (
    <div className='main-block'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='account-type'></div>
        <hr />

        <input
          type='email'
          name='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <hr />

        <div className='btn-block'>
          <button type='submit' href='/'>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
