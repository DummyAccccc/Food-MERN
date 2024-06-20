import express from 'express';
import cors from 'cors';
import { PORT } from '../constants/index.constants.js';

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => {
    console.log(`server is running on port - ${PORT}`);
})


