const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const category_entity = prisma.category
const user_entity = prisma.user
const favourite_entity = prisma.favourite
const newspaper_entity = prisma.newspaper
const notification_entity = prisma.notification
module.exports = {
  prisma,
  category_entity,
  user_entity,
  favourite_entity,
  newspaper_entity,
  notification_entity
}