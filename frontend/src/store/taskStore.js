import axios from "axios";

const API_URL = "http://localhost:5000/api/task";

export const getTasks = async (userId)=>{

    try {
        const response = await axios.post(`${API_URL}/getTasks`, { userId: userId });
        if (response.status === 200) {
            // console.log("Tasks fetched successfully:", response.data.tasks[0].Title);
            return response.data.tasks
        } else {
            throw new Error("Failed to fetch tasks");
        }

        
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
        
    }

}

export const newTask = async ( Title, taskDescription,userId)=>{

    try {
        const response = await axios.post(`${API_URL}/newTask`,{
            userId: userId,
            title: Title,
            taskDescription: taskDescription
        })
        if (response.status === 201) {
            console.log("New task created successfully:");
        } else {
            throw new Error("Failed to create new task");
        }
    } catch (error) {
        console.error("Error creating new task:", error);
        throw error;

    }
}

export const deleteTask = async (taskId)=>{

    try {
        const res = await axios.post(`${API_URL}/deleteTask`,{
            taskId: taskId
        })
        console.log("Task ID to delete:", typeof taskId);
        
        
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
        
    }
}