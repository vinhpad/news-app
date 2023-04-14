const { PrismaClient } = require('@prisma/client')
const { category_entity, newspaper_entity } = require('../database');

const prisma = new PrismaClient()

const newspaper_seeder = async () => {
  await newspaper_entity.createMany({
    data :[
      {
        title : "Cho gia hạn khai thác tàu cao tốc ở bến Bạch Đằng",
        description : "Trao đổi với Tuổi Trẻ Online tối 12-4, lãnh đạo Sở Giao thông vận tải TP.HCM cho biết Chủ tịch UBND TP.HCM Phan Văn Mãi đã đồng ý đề xuất gia hạn khai thác tàu cao tốc ở bến Bạch Đằng.",
        image : "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/4/12/base64-1681281159054219270373.png",
        content : "Như vậy, Công ty TNHH Công nghệ xanh DP được phép tiếp tục vận hành tuyến tàu cao tốc Bạch Đằng - Cần Giờ - TP Vũng Tàu chờ sắp xếp của cơ quan quản lý nhà nước. Các hành khách đã mua vé tàu cao tốc tuyến Bạch Đằng - Cần Giờ - Vũng Tàu vẫn sẽ tiếp tục sử dụng phương tiện. Theo Sở Giao thông vận tải, thời gian gia hạn sẽ kéo dài tối đa 1 năm, để các đơn vị liên quan có đủ thời gian sắp xếp, bố trí vị trí mới cho tuyến tàu cao tốc hoạt động. Trong thời gian này, doanh nghiệp phải tuân thủ các quy định của cơ quan chức năng, thực hiện đầy đủ các nghĩa vụ đã được yêu cầu, đảm bảo trật tự, an toàn đối với hoạt động của bến tàu cao tốc.",
        writer : "THU DUNG",
        nameCategory : "Thời sự"
      },
      {
        title : "Toàn cảnh vụ lộ tài liệu mật của Bộ Quốc phòng Mỹ",
        description : "Theo báo Financial Times, việc các tài liệu mật được phân loại của Lầu Năm Góc bị rò rỉ đã làm sáng tỏ cuộc chiến Ukraine và các hoạt động của các đồng minh Mỹ.",
        image : "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/4/14/2023-03-23t154454z202880235rc2qzz9843qtrtrmadp3usa-trump-defamation-lawsuit-16814307666191839710932.jpg",
        content : "Báo Financial Times đã xem xét hàng chục tập tin, bao gồm các bức ảnh chụp các bản in nhàu nát của các tài liệu tóm tắt. Chúng chứa dữ liệu hoạt động về cuộc chiến ở Ukraine, cũng như các cập nhật tình báo về cuộc chiến, tình hình về Trung Đông và châu Á.",
        writer : "GIA MINH",
        nameCategory : "Thế giới"
      },
      {
        title: "Cảnh sát biển điều tra tàu chở 520 tấn phân urê không có giấy tờ, nguồn gốc",
        description: "Ngày 13-4, Bộ tư lệnh Vùng cảnh sát biển 3 cho biết cơ quan này đang tạm giữ tàu mang số hiệu LA 05058 để điều tra về hành vi tàu này chở khoảng 520 tấn phân urê không có giấy tờ chứng minh nguồn gốc.",
        image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/4/13/csb-lai-dat-tau-la-05058-ve-vung-tau-168138216025377080918.jpg",
        content: "Ngày 13-4, tàu LA 05058 đã được lực lượng chức năng của Hải đoàn 32 (thuộc Bộ tư lệnh Vùng cảnh sát biển 3) lai dắt từ Côn Đảo về Vũng Tàu để tạm giữ, điều tra hành vi chở phân urê không có giấy tờ. \n" +
          "\n" +
          "Trước đó, tại vùng biển cách Côn Đảo 90 hải lý về phía nam đông nam, cảnh sát biển phát hiện tàu mang số hiệu LA 05058 có dấu hiệu nghi vấn nên kiểm tra. " +
          "Tại thời điểm kiểm tra, trên tàu có bốn thuyền viên do ông Trần Văn Chí (sinh năm 1994, thường trú tại xã Phước Đông, huyện Cần Đước, tỉnh Long An) làm thuyền trưởng. \n" +
          "\n" +
          "Theo lời khai của ông Chí, tàu đang chở phân urê được mua từ một tàu không rõ số hiệu. Ông này cũng không xuất trình được hóa đơn, chứng từ chứng minh nguồn gốc của hàng hóa. Số lượng phân urê lên đến 520 tấn.\n" +
          "\n" +
          "Hiện vụ việc tiếp tục được lực lượng chức năng Bộ tư lệnh Vùng cảnh sát biển 3 điều tra, xử lý theo quy định.",
        writer: "ĐÔNG HÀ - ĐỨC ĐỊNH",
        nameCategory: "Pháp luật"
      },
      {
        title: "Ghế nóng nhiều ngân hàng đổi chủ",
        description: "Mùa đại hội cổ đông năm nay đã chứng kiến sự thay đổi nhân sự ghế nóng tại hàng loạt ngân hàng.",
        image: "https://cdn.tuoitre.vn/471584752817336320/2023/4/13/edit-edit-ong-luu-trung-thai-ct-hdqt-mb-16813808847721532246569.png",
        content: "Chiều nay, 13-4, Ngân hàng Quân Đội (MB) đã công bố quyết nghị của hội đồng quản trị về việc miễn nhiệm chức danh chủ tịch hội đồng quản trị MB đối với ông Lê Hữu Đức, đồng thời bầu ông Lưu Trung Thái làm chủ tịch hội đồng quản trị trong thời gian còn lại của nhiệm kỳ 2019-2024.\n" +
          "\n" +
          "Ông Phạm Như Ánh, phó tổng giám đốc, sẽ phụ trách ban điều hành MB, đảm nhiệm quyền hạn và nhiệm vụ của tổng giám đốc.\n" +
          "\n" +
          "Thông tin này được công bố ngay trước thềm đại hội cổ đông thường niên của MB, dự kiến được tổ chức vào ngày 25-4 tới.\n" +
          "\n" +
          "Trước khi được bầu làm chủ tịch hội đồng quản trị, ông Lưu Trung Thái giữ chức phó chủ tịch hội đồng quản trị kiêm tổng giám đốc MB.\n" +
          "\n" +
          "Tân chủ tịch hội đồng quản trị MB sinh năm 1975, tốt nghiệp thạc sĩ quản trị kinh doanh, Đại học Hawaii, Mỹ và đã có hơn 26 năm gắn bó, làm việc và nắm giữ các vị trí quan trọng tại MB.\n" +
          "\n" +
          "Ông Lưu Trung Thái đã tham gia hội đồng quản trị MB từ năm 2013, đảm nhận vị trí phó chủ tịch hội đồng quản trị. Giai đoạn 2013-2017, ông Lưu Trung Thái tham gia thực hiện tái cấu trúc các công ty thành viên, góp phần xây dựng hệ sinh thái tập đoàn tài chính với 6 công ty thành viên.\n" +
          "\n" +
          "Từ tháng 1-2017, ông Lưu Trung Thái đảm nhận vị trí phó chủ tịch hội đồng quản trị kiêm tổng giám đốc MB.\n" +
          "\n" +
          "Ông Phạm Như Ánh sinh năm 1980, thuộc lớp lãnh đạo trẻ của MB, có gần 20 năm kinh nghiệm làm việc trong ngành tài chính, ngân hàng. Tại Ngân hàng TMCP Quân Đội, ông Phạm Như Ánh đã đảm nhiệm nhiều vị trí từ giám đốc chi nhánh, giám đốc khối, phụ trách kinh doanh khu vực phía Nam đến thành viên ban điều hành." +
          "\n" +
          "Tại Đại hội đồng cổ đông thường niên được tổ chức hôm nay, Ngân hàng Á Châu (ACB) cũng đã bầu hội đồng quản trị và ban kiểm soát nhiệm kỳ 2023 - 2028 và thông qua kế hoạch kinh doanh năm 2023, với mục tiêu lợi nhuận trước thuế đạt hơn 20.000 tỉ đồng.\n" +
          "\n" +
          "Các cổ đông Ngân hàng ACB đã bầu 9 thành viên hội đồng quản trị, và các thành viên đã bầu ông Trần Hùng Huy làm chủ tịch hội đồng quản trị Ngân hàng ACB. Ban kiểm soát có 3 thành viên và ông Huỳnh Nghĩa Hiệp được bầu làm trưởng ban." +
          "\n" +
          "Hai ngân hàng khác là LienVietPostBank và SHB cũng vừa thay đổi nhân sự ghế nóng. Tại LienVietPostBank, hội đồng quản trị ngân hàng này vừa có nghị quyết phê duyệt tiếp nhận nhân sự là ông Đoàn Nguyên Ngọc, sinh năm 1975, vào làm việc tại ngân hàng này.\n" +
          "\n" +
          "Ông Đoàn Nguyên Ngọc là em rể của ông Nguyễn Đức Thụy (bầu Thụy), chủ tịch hội đồng quản trị LienVietPostBank. Ông Ngọc là người có kinh nghiệm làm việc trong lĩnh vực bảo hiểm, từng giữ chức vụ phó chủ tịch hội đồng quản trị Bảo hiểm Xuân Thành, tổng giám đốc Bảo hiểm Xuân Thành.\n" +
          "\n" +
          "Trước đó, hồi cuối tháng 3-2023, LienVietPostBank cũng công bố thông tin nghị quyết hội đồng quản trị phê duyệt một nhân sự khác vào làm việc là ông Nguyễn Đức Thùy, sinh năm 1981. Ông Thùy là em ruột của bầu Thụy.\n" +
          "\n" +
          "Ông Thùy cũng từng là nhân sự cấp cao của Bảo hiểm Xuân Thành. Ông làm việc tại đây từ năm 2013 và trở thành chủ tịch hội đồng quản trị từ cuối năm 2015 đến nay.\n" +
          "\n" +
          "Hội đồng quản trị SHB cũng thống nhất bầu bổ sung 2 chức danh phó chủ tịch hội đồng quản trị nhiệm kỳ 2022-2027 với ông Đỗ Quang Vinh và ông Đỗ Đức Hải.\n" +
          "\n" +
          "Ông Đỗ Quang Vinh hiện là thành viên hội đồng quản trị kiêm phó tổng giám đốc SHB. Ông Vinh cũng chính là con trai cả của ông Đỗ Quang Hiển, chủ tịch hội đồng quản trị SHB. Còn ông Đỗ Đức Hải trước khi được bổ nhiệm làm phó chủ tịch hội đồng quản trị SHB cũng là thành viên hội đồng quản trị kiêm phó tổng giám đốc ngân hàng.\n" +
          "\n",
        writer: "ANH HONG",
        nameCategory: "Kinh doanh"
      },
      {
        title: "Sa thải 80% nhân viên, Twitter đối mặt hàng loạt vụ kiện",
        description: "Kể từ cuối năm ngoái, Twitter đã sa thải hơn 6.000 nhân viên, tương đương khoảng 80% tổng số nhân sự. Hiện Twitter chỉ còn khoảng 1.500 nhân viên.",
        content: "Ngày 11-4, Giám đốc điều hành của mạng xã hội Twitter Elon Musk cho biết kể từ cuối năm ngoái, hãng này đã sa thải hơn 6.000 nhân viên, tương đương khoảng 80% tổng số nhân viên của Twitter.\n" +
          "\n" +
          "Cụ thể ở thời điểm này, Twitter chỉ còn khoảng 1.500 nhân viên. Thời điểm trước khi được tỉ phú Elon Musk mua lại, Twitter đang có 7.800 nhân viên. \n" +
          "\n" +
          "Ông Musk cũng tiết lộ việc các thương hiệu cắt giảm quảng cáo trên nền tảng này khiến doanh thu của Twitter giảm mạnh.",
        image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/4/13/twitter-16813673438162099670012.png",
        writer: "TTXVN",
        nameCategory: "Công nghệ",
      },
      {
        title: "Xe đạp xịt lốp, cậu bé 11 tuổi cưỡi ngựa đến trường",
        description: "Khi xe bị xịt lốp, thông thường người ta sẽ gọi taxi, xe ôm. Nhưng một cậu bé 11 tuổi đã nghĩ ra phương tiện thay thế thú vị hơn nhiều: cưỡi ngựa.",
        content: "Không giống như hầu hết mọi người, Stephanie Kirchner, đến từ Schupbach, Đức, không chuyển sang sử dụng xe điện khi giá xăng tăng cao. Thay vào đó, cô lùi xa hơn nữa khi chọn dùng xe ngựa.\n" +
          "\n" +
          "Khi chọn một chiếc xe \"2 mã lực\", dĩ nhiên thời gian đi làm bị kéo dài hơn nhiều. Nhưng cô vẫn thấy thoải mái vì chí ít cũng rẻ hơn rất nhiều so với việc dùng chiếc SUV đang cất ở nhà.\n" +
          "\n" +
          "Có lẽ sẽ có vài người đi đường khó chịu ấn còi vì xe cô đi quá chậm, nhưng cô chấp nhận đánh đổi để tiết kiệm được tiền xăng. Hơn nữa, xe ngựa cũng không phải thứ xa lạ với một nông dân kiêm huấn luyện viên ngựa như Kirchner.\n" +
          "\n" +
          "Kirchner cho biết cô đã chọn xe ngựa sau khi giá xăng tăng chóng mặt. Hiện tại, 1 lít xăng ở Đức có giá 2,091 EUR (2,182 USD hay 51.000 đồng). \"Tôi đã chịu đủ rồi. Không chỉ đi lại, việc thu hoạch cỏ khô và mọi thứ khác cần đến xăng dầu sẽ đắt đỏ hơn rất nhiều, nên tôi chỉ có thể nghĩ đến việc tiết kiệm được chừng nào hay chừng ấy\", cô nói.\n" +
          "\n" +
          "Với giá xăng tăng chóng mặt, cô có thể mua xe điện. Nhưng xe điện cũng đang bị đẩy giá khi chi phí đầu vào tăng cao. Ước tính, giá xe điện trung bình ở Đức hiện vào khoảng 62.000 USD.",
        image: "https://cdn.tuoitre.vn/thumb_w/730/2022/5/22/nong-dan-duc-bo-suv-dung-xe-ngua-khi-gia-xang-tang-1-16531849831062050695175.jpg",
        writer: "THANH LINH",
        nameCategory: "Xe"
      },
      {
        title: "Cung đường ven biển Bắc Khánh Hòa nối những điểm du lịch hoang sơ tuyệt đẹp",
        description: "Đường quốc lộ 1 đi Đầm Môn không chỉ là cú hích cho hạ tầng khu kinh tế Bắc Vân Phong mà còn kết nối nhiều điểm du lịch hoang sơ và hấp dẫn.",
        content: "Tuyến đường dài 14,3km này đã kết nối một loạt các điểm du lịch nổi tiếng ven biển phía Bắc Khánh Hòa (trên bán đảo Hòn Gốm bao gồm: đồi cát Đầm Môn \"tiểu sa mạc\", chùa Thiên Ân, bãi biển làng chài Sơn Đừng, Mũi Đôi...).\n" +
          "\n" +
          "Từ đất liền ở Đầm Môn, du khách còn có thể đi thuyền, ca nô đến tham quan các đảo lớn nhỏ như đảo Hòn Ông, đảo Hòn Săng, Hòn Lớn... nằm trong vịnh Vân Phong.",
        image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/4/13/1-45-16813609167901215025146.jpeg",
        writer: "MINH CHIẾN",
        nameCategory: "Du lịch",
      },
      {
        title: "Cựu vận động viên xây dựng combo phát triển chiều cao cho trẻ",
        description: "Khởi nghiệp với mong muốn phát triển hình thể trẻ em cùng trang lứa với con mình, đến nay lớp thể dục phát triển chiều cao của cựu vận động viên nhảy cao Việt Nam Nguyễn Thị Ngọc Tâm đã hướng tới mở rộng nhượng quyền.",
        content: "Bắt đầu từ những mối quan tâm gần gũi và một mối cơ duyên\n" +
          "Vốn là một vận động viên nhảy cao của Hải Phòng và lên tuyển quốc gia năm 2001, Tâm đặc biệt yêu nghề và luôn mang ý niệm về thể hình thể lực và tinh thần thể thao. Tới năm 2007, khi nghỉ nghiệp vận động viên, Tâm vẫn không thôi ấp ủ một dự định liên quan nghiệp cũ.\n" +
          "\n" +
          "\"Nghiệp vận động viên khá ngắn. Mình thấy bản thân và đồng đội đối mặt với khá nhiều khó khăn trong cuộc sống khi kết thúc sự nghiệp thể dục thể thao đỉnh cao. Lúc đó, mình đã muốn làm gì đó để mình và anh chị em cùng tham gia, có việc sau khi hết chơi thể thao\", Tâm chia sẻ.\n" +
          "\n" +
          "Cùng lúc đó, cũng như bất kỳ phụ huynh nào, vợ chồng Tâm cũng mong muốn con phát triển hình thể và sức khỏe tốt nhất. Nhìn sang xung quanh bạn bè đồng nghiệp và người quen cũng chung trăn trở như mình, năm 2013 vợ chồng Tâm quyết định mở lớp thể dục phát triển chiều cao. Mục tiêu là giúp các em nhỏ Việt Nam có thể phát triển chiều cao tối đa trong độ tuổi của mình.\n" +
          "\n" +
          "Một cơ duyên nữa giúp Tâm phấn chấn khởi nghiệp là khi vận động viên dancesport Khánh Thi gửi hai vận động viên nhí đến, nhờ chị dùng kiến thức và kinh nghiệm phát triển thể hình và chiều cao có từ thời làm vận động viên chuyên nghiệp để giúp hai em. Sau bốn năm tập luyện, cả hai vận động viên này đều cao thêm 5-6cm. \n" +
          "\n" +
          "Tiếng lành đồn xa, từ đó Tâm thường xuyên nhận được những lời hỏi han về bí quyết gia tăng chiều cao khiến chị càng đau đáu với giấc mơ riêng.",
        image: "https://cdn.tuoitre.vn/thumb_w/1060/471584752817336320/2023/4/14/base64-1681444963986513790829.png",
        writer: "HỒNG QUÝ",
        nameCategory: "Nhịp sống trẻ",
      },
      {
        title: "Màu vôi biệt thự 49 Trần Hưng Đạo trùng tu 14 tỉ đồng bị chê",
        description: "Cộng đồng, giới chuyên gia về kiến trúc và bảo tồn di sản đều đang ‘không ưa’ màu vôi quá ‘kệch’ của căn biệt thự cổ 49 Trần Hưng Đạo (Hà Nội) sau dự án trùng tu được coi là kiểu mẫu. Số tiền cho việc trùng tu này là 14 tỉ đồng.\n",
        content: "Trước đó, quá trình trùng tu biệt thự cổ 49 Trần Hưng Đạo (Hà Nội) nhận được sự quan tâm lớn của dư luận, nhiều lời ngợi khen bởi căn biệt thự từng được phong là \"biệt thự ma\", bị bỏ hoang giữa đất vàng nhiều năm được hồi sinh, lột xác từng ngày một cách ngoạn mục.\n" +
          "\n" +
          "Không chỉ công trình được trùng tu mà các cây cổ thụ trong sân vườn của biệt thự cũng được bảo vệ.\n" +
          "\n" +
          "Nhưng khi dự án đang đi vào những công đoạn cuối cùng thì cả giới chuyên môn và cộng đồng ngỡ ngàng với màu vôi vừa được phủ lên ngôi biệt thự này.\n" +
          "\n" +
          "Mức độ phản ứng khác nhau tùy vào độ hiểu biết về chuyên môn cũng như dự án này, người gay gắt, người ôn hòa hơn, nhưng đa số đều không \"ưa\" màu vôi của công trình đang được hoàn thiện.\n" +
          "\n" +
          "Một số người thêm hoài nghi với số tiền cho dự án trùng tu căn biệt thự cổ hai tầng lên tới 14 tỉ đồng.",
        image: "https://cdn.tuoitre.vn/thumb_w/1060/471584752817336320/2023/4/14/base64-16814485993081950620135.png",
        writer: "THIÊN ĐIỂU",
        nameCategory: "Văn hóa",
      },
      {
        title: "Tin tức giải trí 14-4: Xuân Lan phủ nhận ăn chặn tiền phúng điếu",
        description: "Tin tức đáng chú ý: Xuân Lan phủ nhận ăn chặn tiền phúng điếu; Sao Việt bị tung tin thất thiệt; Ngọc Châu dọn rác; Hồ Ngọc Hà làm Love Songs tại Đà Nẵng.",
        content: "Trong buổi gặp gỡ báo chí vào ngày 14-4, Xuân Lan đã làm rõ thông tin cho rằng cô trục lợi, ăn chặn tiền đám tang của đạo diễn Vũ Minh.\n" +
          "\n" +
          "Cô nói: \"Thời gian qua, có nhiều tin đồn về việc tôi làm giả tin nhắn dặn dò trước khi mất của anh Vũ Minh từ bệnh viện với mục đích chiếm đoạt tài sản hay dàn dựng hiện trường giả khi anh Vũ Minh mất đến trục lợi, ăn chặn tiền phúng điếu…\n" +
          "\n" +
          "Tôi khẳng định không làm những điều đó và sẵn sàng đối chất với nhiều bên. Những thông tin này xúc phạm, ảnh hưởng đến nhiều người, trong đó có tôi. Tôi muốn làm rõ để lấy lại sự trong sạch của mình\".",
        image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/4/14/1610-1681469011280293867597.jpg",
        writer: "THÁI THÁI",
        nameCategory: "Giải trí",
      },
      {
        title: "Ông Trần Anh Tú làm trưởng đoàn U22 Việt Nam tại SEA Games 32",
        description: "Thường trực Liên đoàn Bóng đá Việt Nam (VFF) đã quyết định phân công trưởng đoàn cho hai đội tuyển U22 Việt Nam và đội tuyển nữ Việt Nam tại SEA Games 32.",
        content: "Theo đó, ông Trần Anh Tú - phó chủ tịch phụ trách chuyên môn VFF - sẽ là trưởng đoàn đội tuyển U22 Việt Nam. Ông Dương Nghiệp Khôi - tổng thư ký VFF - là trưởng đoàn đội tuyển nữ Việt Nam tham dự SEA Games 32 tại Campuchia.\n" +
          "\n" +
          "Đội tuyển U22 Việt Nam sẽ tập trung vào ngày 16-4 tới tại Bà Rịa - Vũng Tàu với 31 cầu thủ. Tuy nhiên, dự kiến ngày tập trung đầu tiên sẽ chỉ có khoảng 10 cầu thủ cùng ban huấn luyện. Bởi 21 cầu thủ còn lại vẫn còn thi đấu ở vòng 7 V-League 2023 và vòng 3 Giải hạng nhất 2023 nên chỉ lên tập trung vào ngày 18-4.\n" +
          "\n" +
          "Ở đợt tập trung cuối cùng này, đội tuyển U22 Việt Nam dự kiến sẽ có hai trận đá tập với CLB TP.HCM và Bà Rịa - Vũng Tàu trước khi HLV Philippe Troussier gút danh sách 20 cầu thủ tham dự SEA Games 32. Thầy trò HLV Troussier sẽ lên đường sang Campuchia vào 16h ngày 26-4.",
        image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/4/14/tran-anh-tu-16814674144131017761395.jpg",
        writer: "NGUYÊN KHÔI",
        nameCategory: "Thể thao",
      },
      {
        title: "Thủ tướng Phạm Minh Chính: 'Đào tạo nhân lực của chúng ta đi sau nhưng phải về trước'",
        description: "Hôm nay đến Hòa Lạc để hướng đến đột phá về nhân lực. Đào tạo nhân lực của chúng ta đi sau nhưng phải về trước, muốn thế phải đi đúng hướng\", Thủ tướng Chính phủ Phạm Minh Chính nói.",
        content: "Sáng 14-4, tại khu đô thị đại học Hòa Lạc, Thủ tướng Chính phủ Phạm Minh Chính đã đến thăm, làm việc với Đại học Quốc gia Hà Nội và Trường đại học FPT.\n" +
          "\n" +
          "Cùng đi với Thủ tướng Phạm Minh Chính có lãnh đạo các bộ, ngành, đại diện lãnh đạo một số tập đoàn, doanh nghiệp nhà nước.\n" +
          "\n" +
          "Đề xuất xây dựng Trung tâm hỗ trợ thiết kế và đo kiểm vi mạch quốc gia\n" +
          "Báo cáo Thủ tướng, ông Lê Quân - giám đốc Đại học Quốc gia Hà Nội - cho hay mỗi năm Đại học Quốc gia Hà Nội cung cấp hơn 1.000 sinh viên tốt nghiệp các ngành liên quan đến thiết kế vi mạch.\n" +
          "\n" +
          "Nhiều sinh viên, học viên, nghiên cứu sinh của Đại học Quốc gia Hà Nội tốt nghiệp các chương trình này hiện đang hoạt động trong lĩnh vực thiết kế vi mạch ở các tổ chức nghiên cứu, doanh nghiệp trong và ngoài nước.",
        image: "https://cdn.tuoitre.vn/471584752817336320/2023/4/14/base64-1681455711180360428450.png",
        writer: "NGUYÊN BẢO",
        nameCategory: "Giáo dục"
      },
      {
        title: "Gỡ vướng bất động sản: Cần một 'bàn tay quyền lực",
        description: "Cần có mô hình \"bàn tay quyền lực\" đủ thẩm quyền giải quyết từng vụ việc, từng vướng mắc của các dự án đầu tư tư nhân, sử dụng linh hoạt các quy định pháp luật để có hành lang xử lý, không để bất động sản vướng \"từ năm này qua tháng nọ\".",
        content: "Ông Huỳnh Phước Nghĩa, giám đốc Trung tâm kinh tế luật và quản lý (Đại học Kinh tế TP.HCM), đề xuất như vậy khi trao đổi với Tuổi Trẻ về các giải pháp gỡ vướng cho các dự án đầu tư tư nhân trên địa bàn, nhất là lĩnh vực bất động sản.\n" +
          "\n" +
          "Ông Nghĩa nói: Bên cạnh nỗ lực giải quyết, gỡ vướng cho các dự án của chính quyền TP.HCM, cần có một cơ quan mang tính \"đa phương\", liên thông các ban ngành và đủ thẩm quyền để giải quyết dứt điểm các vướng mắc.\n" +
          "\n" +
          "* Để đưa kinh tế TP.HCM trở lại \"đường đua\", ngoài việc thúc đẩy nhanh giải ngân vốn đầu tư công, ông có cho rằng việc gỡ vướng cho các dự án bất động sản cũng là yêu cầu cấp bách?\n" +
          "\n" +
          "- Nếu thị trường bất động sản được khơi thông, dòng tiền từ các nơi đổ vào bất động sản trên địa bàn càng nhiều, đầu tư nước ngoài và M&A (mua bán, sáp nhập) lĩnh vực bất động sản tăng... sẽ góp phần thúc đẩy kinh tế TP.HCM, tạo nên sức lan tỏa cho hàng chục ngành nghề khác.\n" +
          "\n" +
          "Ngược lại, bất động sản bị tắc nghẽn cũng làm giảm động lực phát triển của các ngành khác từ tài chính, bán lẻ, các dịch vụ từ cao cấp đến giải trí, ngay cả giáo dục.\n" +
          "\n" +
          "Theo báo cáo của Hiệp hội bất động sản TP, có 156 dự án vẫn đang gặp vướng, khiến hàng tỉ USD vốn đầu tư vào lĩnh vực này không phát huy được hiệu quả, chưa kể hệ sinh thái xung quanh bất động sản cũng bị ảnh hưởng.\n" +
          "\n" +
          "Tắc nghẽn dòng tài chính, tắc với lĩnh vực bất động sản trong khi các ngành xuất khẩu chủ lực cũng giảm sút, kinh tế TP.HCM bị chững lại là điều khó tránh khỏi, cần sớm có những giải pháp để gỡ vướng, khơi thông dòng chảy cho bất động sản và hệ sinh thái xung quanh.",
        image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/4/14/13-4-bat-dong-san-gap-vuong-2-read-only-16814336986541308891340.jpg",
        writer: "NGỌC HIỂN THỰC HIỆN",
        nameCategory: "Nhà đất"
      },
      {
        title: "Bộ Y tế đề nghị bệnh viện cả nước rà soát, ngăn trục lợi từ thiện sau điều tra của Tuổi Trẻ",
        description: "Chiều 14-4, Cục Quản lý khám, chữa bệnh (Bộ Y tế) có công văn đề nghị bệnh viện cảnh giác và rà soát các hoạt động kêu gọi gây quỹ từ thiện sau khi báo Tuổi Trẻ đăng phóng sự điều tra “Tiền của nhà hảo tâm rơi rụng dần”.",
        content: "Trao đổi với Tuổi Trẻ Online, ông Lương Ngọc Khuê - cục trưởng Cục Quản lý khám, chữa bệnh - cho biết đã nhận được thông tin phản ánh về hoạt động kêu gọi quyên góp gây quỹ của Công ty TNHH Deeda Việt Nam đăng tải trên báo Tuổi Trẻ. Ngày 14-4, cục đã có công văn gửi đến các bệnh viện trên cả nước để kịp thời ngăn chặn hành vi trục lợi từ thiện.\n" +
          "\n" +
          "Cụ thể, văn bản của Cục Quản lý khám, chữa bệnh nêu rõ: ngày 13-4, báo Tuổi Trẻ đăng bài phóng sự điều tra \"Tiền của nhà hảo tâm rơi rụng dần\" phản ánh về hoạt động kêu gọi quyên góp gây quỹ của Công ty TNHH Deeda Việt Nam.\n" +
          "\n" +
          "Sau khi nhận được thông tin trên và ý kiến phản hồi của Sở Y tế TP.HCM, Cục Quản lý khám, chữa bệnh đề nghị các cơ quan quản lý, các bệnh viện trên toàn quốc rà soát hoạt động của các tổ chức, cá nhân kêu gọi quyên góp từ thiện gây quỹ tại bệnh viện cho người bệnh. Cần kịp thời ngăn chặn các hành vi trục lợi, gây ảnh hưởng đến uy tín của đơn vị.\n" +
          "\n" +
          "Đồng thời, Cục Quản lý khám, chữa bệnh đề nghị các đơn vị hướng dẫn cảnh báo để người bệnh, người dân cảnh giác đối với các hoạt động kêu gọi gây quỹ, không để bị lợi dụng trở thành mục tiêu của các đơn vị, cá nhân trục lợi từ việc quyên góp từ thiện; thực hiện đúng các quy định về vận động, tiếp nhận, phân phối và sử dụng các nguồn đóng góp tự nguyện và hướng dẫn của Bộ Y tế.",
        image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/4/14/34114395835931604375852671512011270484708420n-16814719061681399684077.jpg",
        writer: "DƯƠNG LIỄU",
        nameCategory: "Sức khỏe"
      },
      {
        title: "Ghi âm cuộc gọi chủ đầu tư buộc nhà thầu rút hồ sơ đấu thầu?",
        description: "Sáng 14-4, ông Nguyễn Văn Nghĩa, giám đốc Ban quản lý các dự án đầu tư xây dựng tỉnh Đắk Nông, khẳng định rất bất ngờ với đoạn ghi âm cuộc gọi mình buộc nhà thầu rút hồ sơ đấu thầu đang lan truyền trên mạng.",
        content: "Đoạn ghi âm xuất hiện thu hút chú ý của nhiều người, ghi lại cuộc gọi giữa ông Nghĩa và ông Nguyễn Văn Thịnh, giám đốc Công ty TNHH MTV Thịnh Thành Đắk Nông, vào khoảng tháng 10-2022.\n" +
          "\n" +
          "Trong đó, có đoạn ông Nghĩa nói \"Rút, rút, rút đi nhé\"; \"Rút cái hồ sơ tỉnh lộ 5 đi\"; \"Của đứa nào, chú mua (hồ sơ - PV), đứa nào, của đứa nào?\".\n" +
          "\n" +
          "Thông tin này gây dư luận xôn xao theo hướng cho rằng chủ đầu tư bố trí người quen làm dự án, yêu cầu các đơn vị dự thầu khác rút hồ sơ, liệu có thiếu minh bạch?\n" +
          "\n" +
          "Nói về đoạn ghi âm này, ông Nguyễn Văn Thịnh, giám đốc Công ty TNHH MTV Thịnh Thành Đắk Nông, thừa nhận có việc ông Nghĩa gọi điện cho mình về việc có \"khuyên\" ông rút hồ sơ vì doanh nghiệp không đủ điều kiện với gói thầu này, hội đồng sẽ loại.\n" +
          "\n" +
          "Ông Thịnh khẳng định ông Nghĩa không dọa nạt, ép ông phải bỏ dự thầu. Thực tế liên danh của ông vẫn mua, gửi hồ sơ nhưng không đạt và bị loại.\n" +
          "\n" +
          "\"Tôi cũng không phải là người ghi âm. Có một người bạn, cũng là doanh nghiệp đi nhậu cùng hôm đó. Tôi mở loa to và người này lén ghi âm lúc nào không hay. Chuyện anh em trao đổi bình thường thôi. Tôi cũng không hề gửi ghi âm, không gặp ai để 'tố' về việc này cả\", ông Thịnh nói.\n" +
          "\n" +
          "Trong khi đó, về phía ông Nguyễn Văn Nghĩa - giám đốc Ban quản lý các dự án đầu tư xây dựng tỉnh Đắk Nông, ông khẳng định không có ý loại nhà thầu này để nhường dự án tỉnh lộ 5 cho doanh nghiệp khác, \"có quen biết\".\n" +
          "\n" +
          "Doanh nghiệp của ông Thịnh đang thực hiện một dự án đường giao thông nông thôn ở huyện Cư Jut (Đắk Nông) với tổng kinh phí gần 80 tỉ đồng. Gói thầu do doanh nghiệp ông Thịnh thực hiện có nhiều sai sót, chậm tiến độ và đã bị phạt hợp đồng.\n" +
          "\n" +
          "\"Theo quy định, chủ đầu tư có thể thu hồi dự án nhưng vẫn tạo điều kiện gia hạn để doanh nghiệp vượt qua khó khăn. Đối với dự án tỉnh lộ 5, doanh nghiệp của anh Thịnh nếu có dự thầu cũng sẽ không đạt vì đang chậm dự án khác. Việc tôi gọi cho anh Thịnh cũng chỉ là anh em thân tình khuyên bảo, cũng không nói rõ nên rút dự án nào cả.\n" +
          "\n" +
          "Thực tế doanh nghiệp anh Thịnh vẫn dự thầu, hội đồng chấm không đạt, bị loại. Tôi không hiểu lý do gì mãi 6-7 tháng sau, khi dự án đã thực hiện lại có người tung đoạn ghi âm cuộc gọi này. Tôi đã đề nghị ngành chức năng làm rõ để giải oan cho tôi và anh Thịnh\", ông Nghĩa nói.",
        image: "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/4/14/base64-1681447178815575389665.png",
        writer: "TRUNG TAN",
        nameCategory: "Giả thật",
      },
      {
        title: "Đại lý bảo hiểm đem con bỏ chợ, ai chịu trách nhiệm?",
        description: "Đó là câu hỏi nhiều bạn đọc Tuổi Trẻ Online đặt ra sau vụ việc của diễn viên Ngọc Lan, đến lượt nghệ sĩ Kim Tử Long bị hủy hợp đồng bảo hiểm và mất trắng tiền sau 3 năm đóng phí vì nhân viên tư vấn \"đem con bỏ chợ\".\n",
        content: "Lên tiếng về vụ việc, Kim Tử Long nói: \"Đừng bao giờ tin vào những lời hứa ban đầu rằng mua bảo hiểm sẽ được chăm sóc, chỉ được một vài năm đầu thôi. Long không trách công ty, chính sách của công ty bảo hiểm, mà trách nhân viên tư vấn đã không làm hết cái tâm của mình. Khi họ bán được bảo hiểm, lấy hoa hồng xong rồi buông mình luôn. Tuy nhiên không phải công ty bảo hiểm nào cũng như vậy\".",
        image: "https://cdn.tuoitre.vn/471584752817336320/2023/4/14/tranh-biem-hoa-hop-dong-bao-hiem-nhan-tho-1681305598375616246877-1681443053478136472738.jpg",
        writer: "CÔNG DŨNG TỔNG HỢP",
        nameCategory: "Bạn đọc"
      }
    ],
    skipDuplicates: true
  })

}

newspaper_seeder()
prisma.$disconnect()