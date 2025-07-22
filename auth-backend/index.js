const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const SECRET_KEY = 'your-secret-key';

app.use(cors());
app.use(bodyParser.json());

// Dummy user for demo
const user = {
  id: 1,
  email: 'test@test.com',
  password: 'password', // In real apps, never store plain passwords!
  name: 'Test User'
};

// Login endpoint
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email === user.email && password === user.password) {
    const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ accessToken: token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected endpoint example
app.get('/profile', (req, res) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, SECRET_KEY);
    res.json({ id: payload.id, email: payload.email, name: payload.name });
  } catch (err) {
    res.sendStatus(403);
  }
});

app.listen(3000, () => console.log('Auth API running on http://localhost:3000'));
