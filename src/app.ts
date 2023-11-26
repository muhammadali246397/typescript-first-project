import express from 'express';
import cors from 'cors';
import { studentRoute } from './app/module/student/student.route';
const app = express();

//persser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', studentRoute);

app.get('/', (req, res) => {
  res.send('this server is runnig fine and not any error');
});
export default app;
