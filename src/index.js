const express = require('express');

const app = express();


app.use(express.json());


app.get("/", (req, res) => {
    return res.send('data')
})


app.listen(8080, () => {
    console.log("listing port 8080")
})