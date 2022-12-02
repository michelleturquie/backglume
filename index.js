import express from 'express';
import cors from 'cors';
import router from './routes/usuarioRoutes.js';

const app = express();
app.use(express.json())
app.use(cors());


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

app.use('/api', router)