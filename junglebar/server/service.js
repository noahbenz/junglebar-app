const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database');
    db.run(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT)',
      (err) => {
        if (err) {
          console.error('Error creating users table:', err.message);
        } else {
          console.log('Users table created or already exists');
        }
      }
    );
  }
});

app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;
  db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (err) => {
    if (err) {
      console.error('Error inserting user data:', err.message);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      console.log('New user signed up:', { email, password });
      res.json({ message: 'Signup successful' });
    }
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      console.error('Error checking login credentials:', err.message);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      if (row) {
        console.log('Login successful:', { email, password });
        res.json({ message: 'Login successful' });
      } else {
        console.log('Invalid credentials:', { email, password });
        res.status(401).json({ message: 'Invalid credentials' });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
