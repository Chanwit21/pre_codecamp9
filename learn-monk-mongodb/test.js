const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./route/user');

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);

app.listen(8000, () => console.log('Server runnig in Port 8000'));
