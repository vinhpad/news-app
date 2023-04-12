const { PrismaClient } = require('@prisma/client')
const { category_entity } = require('../database');

const prisma = new PrismaClient()

const category_seeder = async () => {
  await category_entity.createMany({
    data :[
      { nameCategory : "Thời sự" },
      { nameCategory : "Thế giới" },
      { nameCategory : "Pháp luật" },
      { nameCategory : "Kinh doanh" },
      { nameCategory : "Công nghệ" },
      { nameCategory : "Xe" },
      { nameCategory : "Du lịch" },
      { nameCategory : "Nhịp sống trẻ" },
      { nameCategory : "Văn hóa" },
      { nameCategory : "Giải trí"},
      { nameCategory : "Thể thao" },
      { nameCategory : "Giáo dục" },
      { nameCategory : "Nhà đất" },
      { nameCategory : "Sức khỏe" },
      { nameCategory : "Giả thật" },
      { nameCategory : "Bạn đọc" }
    ],
    skipDuplicates: true
  })

}

category_seeder()

prisma.$disconnect()