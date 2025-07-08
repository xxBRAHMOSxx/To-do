import { use, useState } from "react"
import { login } from "../store/authStore"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const [username , setUsername] = useState()
    const [password , setPassword] = useState()

    const navigate = useNavigate()
    

    const handleLogin = async () =>{
        if(!username|| !password){
            alert("Please enter username and password")
            return
        }
        try {
            const data = await login({username,password})
            console.log("this is data",data);
            localStorage.setItem("user", JSON.stringify(data.user))
            
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed. Please try again.");
            return;
            
        }
        navigate("/tasks")
        
    }
    

  return (
    <div className='flex flex-col h-100 w-200 bg-gray-100 p-4 rounded-lg shadow-md overflow-y-auto m-2'>
           
     <div className="flex flex-col w-full h-full bg-white p-4 rounded-lg shadow-md items-center justify-center">
                    {/* Placeholder for login form */}
                    <input 
                            className="flex m-2 bg-gray-50 w-full h-15 placeholder: text-center rounded-2xl justify-center"
                            type="text" 
                            placeholder="Username"
                            onChange={(e)=> setUsername(e.target.value)} 
                        />
                    <input 
                        className="flex m-2 bg-gray-50 w-full h-15 placeholder: text-center rounded-2xl" 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e)=> setPassword(e.target.value)} 
                        
                        />
                </div>
     <div className='flex items-center justify-center mt-4'>
                <button 
                className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
                onClick={() => handleLogin()}>
                Login
                </button>
        </div>
</div>
  )
}

export default LoginForm