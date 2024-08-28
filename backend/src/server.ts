import express from 'express';
import cors from 'cors';
import { users } from './data';

const app = express();

//frontend localhost 4200
//backend localhost 5000

app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}));

app.get('/api/admin',(req, res) => {
    res.send(users)
})

const port = 5000
app.listen(port, () => console.log(`Server running on port ${port}`));