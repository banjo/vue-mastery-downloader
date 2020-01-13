const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: false, args: [ '--no-sandbox' ] });
    const page = await browser.newPage();

    const urls = [];

    // read all responses
    page.on('response', async (res) => {
        let url = res.url();

        // find correct url for scraping
        if (url.includes('player.vimeo')) {
            console.log('Found video!');
            await urls.push(res.url());

            // save file
            fs.writeFile('urls.csv', urls, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    });

    await page.goto('https://www.vuemastery.com/');
})();
