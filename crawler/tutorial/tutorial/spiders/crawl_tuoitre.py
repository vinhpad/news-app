import scrapy
from scrapy import Selector
class TuoiTre(scrapy.Spider):
    name = 'TuoiTre'
    allowed_domains = ['tuoitre.vn']
    start_urls = ['https://tuoitre.vn/']
    count = 0
    datas = []
    def parse(self, response):
        if response.status == 200 and response.css('meta[property="og:type"]::attr("content")').get() == 'article':
            data = {}
            title = response.css('div.detail-cate a::text').get()
            data["title"] = title.strip()

            description = response.css('h2.detail-sapo::text').get()
            data["description"] = description.strip()

            data['content'] = ''
            for i in response.css('div.detail-content.afcbc-body p::text').getall():
                data['content'] = data['content'] + i

            data["image"] = response.css('div a img::attr(src)').extract()[6]

            data["author"] = response.css('div.author-info a::text').get()
            print(data)

            self.count += 1
            self.crawler.stats.set_value('CRAWL COUNT', self.count)
            #self.datas = self.datas.append(data)
            #if self.count==100:
                #print(self.datas)
        yield from response.follow_all(css='a[href^="https://tuoitre.vn/"]::attr(href), a[href^="/"]::attr(href)', callback=self.parse)


