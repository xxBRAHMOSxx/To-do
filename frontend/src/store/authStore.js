import axios from "axios"
const API_URL = "http://localhost:5000/api/auth"

export const register = async (userData)=>{
    try {
        const response = await axios.post(`${API_URL}/register`,userData)
        if (response.status === 200) {
            console.log("Registration successful:", response.data);
            
            return response.data;
            
        } else {
            throw new Error("Registration failed");
        }
    } catch (error) {
        console.error("Error during frontend registration:", error);
        throw error;
        
    }
}

export const login = async (userData)=>{
    try {
        const response = await axios.post(`${API_URL}/login`,userData)
        if(response.status===200){
            console.log("login successful:", response.data);
            

            return response.data;
        }
        
    } catch (error) {
        console.error("Error during frontend login:", error);
        throw error;
        
    }
}