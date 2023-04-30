import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from '#src/router';

const app = express();

app.use(
  cors(),
  helmet(),
  express.urlencoded({
    extended: true,
  }),
  express.json(),
);

app.use(`/api/`, router);

const { PORT } = process.env;
app.listen(PORT);
