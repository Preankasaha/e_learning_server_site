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

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const getSingleCourse = courses.find(course => course.id == id);

    res.send(getSingleCourse);
})



app.listen(Port, () => {
    console.log('server is running', Port);
})