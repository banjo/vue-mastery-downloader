const puppeteer = require('puppeteer');
const fs = require('fs');
const clipboardy = require('clipboardy');

(async () => {
  const browser = await puppeteer.launch({ headless: false, args: [ '--no-sandbox' ] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 926 });

  const urls = [];
  page.on('response', (res) => {
    let url = res.url();
    if (url.includes('player.vimeo')) {
      console.log(res.url());
      urls.push(res.url());

      // save file
      fs.writeFileSync('urls.txt', urls, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });

  await page.goto('https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance');


  // await browser.close();
})();
