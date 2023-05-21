const { notification_entity } = require('../prisma/database');
const { retarget } = require('jsdom/lib/jsdom/living/helpers/shadow-dom');
exports.find_one = async () => {
  const data = await notification_entity.findMany();
  console.log(data)
  return data[0];
};