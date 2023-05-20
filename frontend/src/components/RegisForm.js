import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import LoginForm from './LoginForm'

const RegisForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await axios.post('http://localhost:5000/register', {
        email: email,
        password: password,
      })
      console.log(data.data.user)
      setEmail('')
      setPassword('')
      navigate('/login')
    } catch (error) {
      console.log({ msg: error.message })
    }
  }
  return (
    <div className='main-block'>
      <h1>Registration</h1>
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
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default RegisForm
