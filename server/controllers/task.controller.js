import { TaskModel } from "../db/Schema.js";

export const getTasks = async (req,res)=>{
    const { userId } = req.body;
    if(!userId){
        return res.status(400).json({message:"login first"})
    }
    try {
        const tasks = await TaskModel.find({ user: userId }).sort({ createdAt: -1 });
        if(!tasks){
            return res.status(404).json({message:"no tasks found"})
        }
        res.status(200).json({
            message: "Tasks fetched successfully",
            tasks: tasks,
            // Title: tasks.Title,
            // Description: tasks.Task,
        })

    } catch (error) {
        console.log("Error fetching tasks:", error);
        return res.status(500).json({message:"backend server error"})
    }
}

export const newTask = async (req,res)=>{
    const {userId , title, taskDescription} = req.body;
    if(!userId || ! title || !taskDescription){
        return res.status(400).json({
            message:"userId, title and taskDescription are required"
        })
    }
    try {

        const newTask = await TaskModel.create({
            user:userId,
            Title:title,
            Task:taskDescription,
        })
        await newTask.save();
        res.status(201).json({
            message: "New task created successfully",
            task: newTask,
        })
        
    } catch (error) {
        console.log("Error creating new task:", error);
        return res.status(500).json({message:"backend server error"})
        
    }
}

export const deleteTask = async(req,res)=>{
    const {taskId} = req.body
    if(!taskId){
        return res.status(400).json({message:"taskId is required"})
    }
    try {
        await TaskModel.findByIdAndDelete(taskId);
        res.status(200).json({
            message: "Task deleted successfully",
        })
        
    } catch (error) {
        console.log("Error deleting task:", error);
        return res.status(500).json({message:"backend server error"})
        
    }
}