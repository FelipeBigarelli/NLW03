import express from 'express';
import path from 'path';

import './database/connection';

import routes from './routes';

const port = 3333;
const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
