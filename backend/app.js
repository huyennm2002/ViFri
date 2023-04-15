import express from 'express';
import * as dotenv from 'dotenv';
import sql from './server.js';

dotenv.config();
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;