const { PrismaClient } = require('@prisma/client')
const { category_entity, newspaper_entity } = require('../database');

const prisma = new PrismaClient()

const newspaper_seeder = async () => {
  await newspaper_entity.createMany({
    data :[
      {
        title : "Cho gia hạn khai thác tàu cao tốc ở bến Bạch Đằng",
        description : "Trao đổi với Tuổi Trẻ Online tối 12-4, lãnh đạo Sở Giao thông vận tải TP.HCM cho biết Chủ tịch UBND TP.HCM Phan Văn Mãi đã đồng ý đề xuất gia hạn khai thác tàu cao tốc ở bến Bạch Đằng.",
        imageUrl : "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/4/12/base64-1681281159054219270373.png",
        content : "Như vậy, Công ty TNHH Công nghệ xanh DP được phép tiếp tục vận hành tuyến tàu cao tốc Bạch Đằng - Cần Giờ - TP Vũng Tàu chờ sắp xếp của cơ quan quản lý nhà nước. Các hành khách đã mua vé tàu cao tốc tuyến Bạch Đằng - Cần Giờ - Vũng Tàu vẫn sẽ tiếp tục sử dụng phương tiện. Theo Sở Giao thông vận tải, thời gian gia hạn sẽ kéo dài tối đa 1 năm, để các đơn vị liên quan có đủ thời gian sắp xếp, bố trí vị trí mới cho tuyến tàu cao tốc hoạt động. Trong thời gian này, doanh nghiệp phải tuân thủ các quy định của cơ quan chức năng, thực hiện đầy đủ các nghĩa vụ đã được yêu cầu, đảm bảo trật tự, an toàn đối với hoạt động của bến tàu cao tốc.",
        author : "THU DUNG",
        nameCategory : "Thời sự"
      },
      {
        title : "Toàn cảnh vụ lộ tài liệu mật của Bộ Quốc phòng Mỹ",
        description : "Theo báo Financial Times, việc các tài liệu mật được phân loại của Lầu Năm Góc bị rò rỉ đã làm sáng tỏ cuộc chiến Ukraine và các hoạt động của các đồng minh Mỹ.",
        imageUrl : "https://cdn.tuoitre.vn/thumb_w/730/471584752817336…hot-2023-04-12-102558-16812699948301113095435.png",
        content : "Báo Financial Times đã xem xét hàng chục tập tin, bao gồm các bức ảnh chụp các bản in nhàu nát của các tài liệu tóm tắt. Chúng chứa dữ liệu hoạt động về cuộc chiến ở Ukraine, cũng như các cập nhật tình báo về cuộc chiến, tình hình về Trung Đông và châu Á.",
        author : "GIA MINH",
        nameCategory : "Thế giới"
      },
    ],
    skipDuplicates: true
  })

}

newspaper_seeder()
prisma.$disconnect()