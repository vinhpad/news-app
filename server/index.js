const express = require('express');
const app = express();
const cors = require('cors');
const category_api = require('./api/category_api');
const newspaper_api = require('./api/newspaper_api')
const user_api = require('./api/user_api')
const favourite_api = require('./api/favourite_api')
app.use(express.json());
app.use(cors());
const {prisma} = require('./prisma/database');

app.use('/category' , category_api)
app.use('/newspaper', newspaper_api)
app.use('/user'     , user_api)
app.use('/favourite', favourite_api)

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
prisma.$disconnect();
