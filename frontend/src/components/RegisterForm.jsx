import { use, useState } from "react"
import { login } from "../store/authStore"
import { useNavigate } from "react-router-dom"

const RegisterForm = () => {
    const [username , setUsername] = useState()
    const [password , setPassword] = useState()

    const navigate = useNavigate()
    const handleRegister = async () =>{
        if(!username || !password){
            alert("Please enter username and password")
            return
        }
        try {
            
            console.log("Registration successful for:", username);
            alert("Registered successfully");
            navigate("/"); // Redirect to login after registration
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Registration failed. Please try again.");
        }
    }

  return (
    <div className='flex flex-col h-100 w-200 bg-gray-100 p-4 rounded-lg shadow-md overflow-y-auto m-2'>
           
     <div className="flex flex-col w-full h-full bg-white p-4 rounded-lg shadow-md items-center justify-center">
                    {/* Placeholder for login form */}
                    <label className="bold text-sm text--200" htmlFor="username">set your username</label>
                    <input 
                            className="flex m-2 bg-gray-50 w-full h-15 placeholder: text-center rounded-2xl justify-center"
                            type="text" 
                            id="username"
                            placeholder="Username"
                            onChange={(e)=> setUsername(e.target.value)}
                            
                        />
                    <label htmlFor="password">set your password</label>
                    <input 
                        className="flex m-2 bg-gray-50 w-full h-15 placeholder: text-center rounded-2xl" 
                        type="password"
                        id="password" 
                        placeholder="Password" 
                        onChange={(e)=> setPassword(e.target.value)} 
                        
                        />
                </div>
     <div className='flex items-center justify-center mt-4'>
                <button 
                className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
                onClick={() => handleRegister()}>
                register
                </button>
        </div>
</div>
  )
}

export default RegisterForm