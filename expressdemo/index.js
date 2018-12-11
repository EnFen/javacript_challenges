const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const {
    students,
    restaurants
} = require('./data')

// Add static files
app.use(express.static('assets'))


// Insert the body parser and tell it we want to parse request bodies as JSON
app.use(bodyParser.json())

app.get('/api/students', (req, res) => {
    console.log('Getting a list of students')
    res.json(students) // return a JSON response
})

app.get('/api/restaurants', (req, res) => {
    console.log('Getting a list of students')
    res.json(restaurants) // return a JSON response
})

// app.get('/addStudent', (req, res) => {
//     res.send(`
//         <form action="/api/students" method="post">
//             <input name="student">
//             <button type="submit">Add Student</button>
//         </form>
//     `)
// })

app.post('/api/students', (req, res) => {
    const newStudent = req.body.student
    console.log('Adding a new student:', newStudent)
    students.push(newStudent)
    res.json(newStudent)
})

app.post('/api/restaurants', (req, res) => {
    const newRestaurant = req.body.restaurant
    console.log('Adding a new restaurant:', newRestaurant)
    restaurants.push(newRestaurant)
    res.json(newRestaurant)
})

/* Landing page */
app.get('/', (req, res) => {

    // Randomly sort the array (shuffle)
    students.sort(x => Math.random() < 0.5 ? -1 : 1)
    restaurants.sort(x => Math.random() < 0.5 ? -1 : 1)
    res.send(
        `<link rel="stylesheet" type="text/css" href="styles.css">
        <h1>Lunchify</h1>
   <p>Matched: ${students[0]} with ${students[1]} and ${students [2]} at ${restaurants[0]}</p>`
    )
})



app.listen(3001)