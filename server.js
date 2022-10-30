const express=require("express")
const connectDB = require("./db");
const app=express()
const PORT=3000;



app.use(express.json())

app.use("/auth", require("./Auth/Route.js"))


app.listen(PORT, ()=>{console.log(`Server Connected to port ${PORT}`)});

//Connecting the Database
connectDB();

// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  })