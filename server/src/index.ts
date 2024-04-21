import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as categoryRoutes } from './routes/categories';
import { router as taskRoutes } from './routes/tasks';

const PORT = process.env.PORT ?? '8888';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/categories', categoryRoutes);
app.use('/tasks', taskRoutes);

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
