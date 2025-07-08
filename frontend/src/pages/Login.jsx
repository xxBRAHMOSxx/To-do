import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className='text-4xl font-bold mb-8'>Login</h1>
            <LoginForm/>
            
            
        </div>
    </div>
  )
}

export default Login