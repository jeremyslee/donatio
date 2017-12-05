const cheerio = require('cheerio');
const request = require('request');

const scrapeController = {
    scrapeCharity: (req, res, next) => {
        request('https://www.globalgiving.org/search/?size=50&sortField=approveddt_orig', (error, response, html) => {
            let $ = cheerio.load(html);
         
            let data = $('.grid-12.grid-md-6.grid-lg-12.box_topMargin4.box_md_horizontalPadded1.box_lg_horizontalPadded0.grid-parent.flex_growChildren').map((i,el)=>{
                let category = $(el).find('a.col_inherit.js-addFilter').eq(0)
                let country = $(el).find('a.col_inherit.js-addFilter').eq(1)
                let title = $(el).find('.col_inherit.text_letterSpacingNormal').text()
                let organization = $(el).find('.grid-12.box_verticalPadded1 a.col_inherit').text()
                let summary = $(el).find('.grid-12.col_ggSecondary1LightText.box_verticalMargin2').text()
                let fullImage = $(el).find('.grid-12.grid-lg-4.grid-parent.img-bg.img-bg-cover.img-minHeight.img-emphasizeOnHover').attr('style')
                let imageOne = fullImage.replace('background-image:url(','')
                let image = imageOne.replace(');','')
                return {
                    category: category.text(),
                    country: country.text(),
                    title: title,
                    organization: organization,
                    summary: summary.trim(),
                    image: 'https://www.globalgiving.org'+image
                }
            }).get();
            res.json(data)
        })
    },
};

module.exports = scrapeController;