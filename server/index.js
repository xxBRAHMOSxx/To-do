import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import { connectDB } from "./db/connectDB.js"
import authRouter from "./routes/auth.js"
import taskRouter from "./routes/task.js"

import path from "path"

dotenv.config()

const app = express()
app.use(cookieParser()) 
const PORT = 5000
const __dirname = path.resolve()

app.use(cors({ origin: true, credentials: true }))

app.use(express.json())  

app.use("/api/auth", authRouter)
app.use("/api/task",taskRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

if (process.env.NODE_ENV === "production") {
    // app.use(express.static(path.join(__dirname, "/frontend/dist")))

    // app.get("*", (req, res) => {
    //     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    // })
}

app.listen(PORT, () => {
    connectDB()
    console.log("server in running on port ", PORT);
})