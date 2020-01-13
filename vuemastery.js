const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: false, args: [ '--no-sandbox' ] });
    const page = await browser.newPage();

    let urls = [];

    // read all responses
    page.on('response', async (res) => {
        let url = res.url();

        // find correct url for scraping
        if (url.includes('player.vimeo')) {
            await urls.push(url);
            console.log(`${urls.length}: found video!`);

            // save file
            await fs.writeFile('urls.csv', urls, (err) => {
                // print space
                console.log('Added to file!');
                console.log('');

                // handle error
                if (err) {
                    console.log('Something went wrong: ', err);
                }
            });
        }

        // reset list by going to vklass.se
        if (url.includes('vklass')) {
            if (fs.existsSync('urls.csv')) {
                fs.unlinkSync('urls.csv');
                urls = [];
                console.log('Reseted list!');
                console.log('');
            }
        }
    });

    await page.goto('https://www.vuemastery.com/');
})();
