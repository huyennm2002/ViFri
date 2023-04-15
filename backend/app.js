import express from 'express';
import * as dotenv from 'dotenv';
import sql from './config/sql.js';
import User from './app/models/user.js';

dotenv.config();
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/sign-up', User.createUser )

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;