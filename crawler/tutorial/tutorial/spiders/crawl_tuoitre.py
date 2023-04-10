import scrapy
from scrapy import Selector
class TuoiTre(scrapy.Spider):
    name = 'TuoiTre'
    allowed_domains = ['tuoitre.vn']
    start_urls = ['https://tuoitre.vn/']
    count = 0
    def parse(self, response):
        if response.status == 200 and response.css('meta[property="og:type"]::attr("content")').get() == 'article':
            f = open('data.txt', 'a', encoding='utf8')

            Link = response.url
            data = {}

            data["url"] = Link.strip()

            date = response.css('div.detail-time').getall()
            #data["date"] = date

            title = response.css('h1.article-title::text').get()
            data["title"] = title

            description = response.css('h2.detail-sapo::text').get()
            data["description"] = description

            for i in response.css('div.detail-content afcbc-body'):
                print(i)
                content = i.xpath('p.::text').getall()
                #f.write(content.strip() + '\n')
                print(content)



            f.write('Tags:')
            Tags = response.css('meta[property="article:tag"]::attr("content")').getall()
            f.write(str(Tags).strip() + '\n')
            f.write('\n')

            self.count += 1
            self.crawler.stats.set_value('CRAWL COUNT', self.count)

        yield from response.follow_all(css='a[href^="https://tuoitre.vn/"]::attr(href), a[href^="/"]::attr(href)', callback=self.parse)


