import axios from "axios";

const API_URL = "http://localhost:5000/api/task";

export const getTasks = async (userId)=>{

    try {
        const response = await axios.post(`${API_URL}/getTasks`, { userId: userId });
        if (response.status === 200) {
            // console.log("Tasks fetched successfully:", response.data.tasks[0].Title);
            return response.data
        } else {
            throw new Error("Failed to fetch tasks");
        }

        
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
        
    }

}