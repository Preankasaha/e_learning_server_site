const express = require('express');
const app = express();
const Port = process.env.Port || 5000;

const cors = require('cors');
app.use(cors());

const options = require('./data/course-options.json');

const courses = require('./data/courses.json');


//testing
app.get('/', (req, res) => {
    res.send('app gets response from server ')
})

app.get('/course-options', (req, res) => {
    res.send(options);
})

app.get('/courses', (req, res) => {
    res.send(courses);
})




app.listen(Port, () => {
    console.log('server is running', Port);
})