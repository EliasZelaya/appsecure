import express from 'express';
import 'dotenv/config';
import { connectiondb } from './src/config/conecctiondb.config.js';
import { mainRouter } from './src/routes/main.route.js';

const app = express();
connectiondb();

app.use(express.json());
app.use(mainRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});