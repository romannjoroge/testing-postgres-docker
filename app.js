import express from 'express';
const app = express();
import pool from './db.js';

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/users', async (req, res) => {
    const fetchResult = await pool.query("SELECT * FROM students");
    return res.json(fetchResult.rows);
});

app.post('/users', async (req, res) => {
    let {
        name,
        dob
    } = req.body;

    await pool.query(
        "INSERT INTO students(name, dateOfBirth) VALUES ($1, $2)",
        [name, dob]
    );

    return res.status(201).json({message: "Student Created"});
})

const port = 6000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})