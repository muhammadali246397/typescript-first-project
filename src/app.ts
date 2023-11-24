import express from 'express';
import cors from 'cors';
const app = express();

//persser
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
 
  res.send('this is the servr');
});
export default app;
