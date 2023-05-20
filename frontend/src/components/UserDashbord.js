import React, { useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const UserDashbord = () => {
  const location = useLocation()
  const { user } = location.state || {}
  console.log(user)

  return (
    <>
      <section className='page'>
        <h2>Hello there, {user}</h2>
        <p>
          Your ID : <span>12344</span>
        </p>
        <p>
          Your Role : <span>user</span>
        </p>
      </section>
    </>
  )
}

export default UserDashbord
