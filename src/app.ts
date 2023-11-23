import express from 'express';
import cors from 'cors';
const app = express();

//persser
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  const a = 20;
  res.send(a);
});
export default app;
