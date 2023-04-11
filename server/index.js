const express = require('express');
const app = express();
const cors = require('cors');
const category_router = require('./api/category_api');
const newspaper_router = require('./api/newspaper_api')
const user_router = require('./api/user_api')
app.use(express.json());
app.use(cors());
const { db} = require('./models/database');
app.use('/category', category_router);
app.use('/newspaper', newspaper_router)
app.use('/users', user_router)
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});
