const express = require('express');
const app = express();
const cors = require('cors');
const category_router = require('./routes/category');
const newspaper_router = require('./routes/newspaper')
app.use(express.json());
app.use(cors());

const { db} = require('./models/database');
/*
const userRouter = require('./routes/user');
const detailRouter = require('./routes/detail');

app.use('/users', userRouter);
app.use('/detail', detailRouter);

const newspaperRouter = require('./routes/newspaper');
app.use('/newspaper', newspaperRouter);

const favouriteRouter = require('./routes/favourite');
app.use('/favourite', favouriteRouter);
*/

app.use('/category', category_router);
app.use('/newspaper', newspaper_router)
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});
