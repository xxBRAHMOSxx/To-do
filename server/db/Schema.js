import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema({
    username:{
        type : String,
        required: true,
        unique: true,
    },
    password:{
        type : String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task',
    }],
})

const Task = new Schema({
    Title: {
        type: String,
        required: true,
    },
    Task: [{
        type: String,
        required: true,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

export const UserModel = mongoose.model("User", User);
export const TaskModel = mongoose.model("Task", Task);