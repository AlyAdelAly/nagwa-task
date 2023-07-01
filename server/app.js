import express from 'express';
import cors from 'cors';
import wordRouter from './routes/wordRoutes.js';
import rankRouter from './routes/rankRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

//Routes
app.use('/word', wordRouter);
app.use('/rank', rankRouter);

const PORT = 8000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
