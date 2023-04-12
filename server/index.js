const express = require('express');
const app = express();
const cors = require('cors');
const  category  = require('./api/category_api');
const newspaper = require('./api/newspaper_api')
app.use(express.json());
app.use(cors());
const { prisma } = require('./prisma/database');

app.use('/category',category);
app.use('/newspaper', newspaper)
/*
app.use('/users', user_router)

 */
app.listen(3001, () => {
  console.log('Server running on port 3001');
});
prisma.$disconnect();
