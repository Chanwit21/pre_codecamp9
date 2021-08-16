const express = require('express');
const app = express();
const cors = require('cors');
const todoListRoutes = require('./routes/todoList');
const db = require('./models')

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo-list', todoListRoutes);

db.sequelize.sync().then(()=>{
    app.listen(8000, () => {
        console.log(`Server is running at port 8000`);
    });
})
