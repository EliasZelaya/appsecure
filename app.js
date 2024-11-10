import express from 'express';
import 'dotenv/config';
import { connectiondb } from './src/config/conecctiondb.config.js';

const app = express();
connectiondb();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});