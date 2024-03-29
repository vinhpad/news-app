const express = require('express');
const app = express();
const cors = require('cors');
const category_api = require('./api/category_api');
const newspaper_api = require('./api/newspaper_api');
const user_api = require('./api/user_api');
const favourite_api = require('./api/favourite_api');
const detail_api = require('./api/detail_api');
const notification_api = require('./api/notification_api')
app.use(express.json());
app.use(cors());
const { prisma } = require('./prisma/database');

app.use('/category', category_api);
app.use('/newspaper', newspaper_api);
app.use('/users', user_api);
app.use('/favourite', favourite_api);
app.use('/detail', detail_api);
app.use('/notification',notification_api)
app.listen(3001, () => {
  console.log('Server running on port 3001');
});
prisma.$disconnect();
