const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch(
    {
      // headless: false,
      slowMo: 250, // slow down by 250ms
    }
  )
  const page = await browser.newPage()
  await page.goto(
    'https://awesomevietnam-270208.web.app/periodic-table'
  )
  await page.screenshot({
    path: 'covid.png',
  })
  await page.pdf({
    path: 'covid.pdf',
    format: 'A2',
  })
  await browser.close()
})()
