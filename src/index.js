const express = require('express');
const connect = require("./configs/db");

const app = express();


app.use(express.json());
const user =require("./controllers/user.controller");
const contract = require("./controllers/contracts.controller");


// app.get("/", (req, res) => {
//     return res.send('data')
// })

app.use("/user", user)
app.use("/contract", contract);


const PORT =  8000;

app.listen(PORT, async() => {
   try {
       await connect    
   } catch (error) {
    console.log(error)
   }
   console.log(`listing ${PORT}`)
})