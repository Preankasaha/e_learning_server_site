const express = require('express');
const app = express();
const Port = process.env.Port || 5000;

const cors = require('cors');
app.use(cors());



//testing
app.get('/', (req, res) => {
    res.send('app gets response from server ')
})



app.listen(Port, () => {
    console.log('server is running', Port);
})