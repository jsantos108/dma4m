import puppeteer from 'puppeteer';

export const getMatches = async (bsi) => {
    console.log(bsi[0].name);
    console.log('matching beautyBSI');
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.setViewport({width: 1440, height: 1080});
    await page.reload(); //avoid request delay
    await page.waitForSelector(`[aria-label="Search"]`);
    await page.focus(`[aria-label="Search"]`);
    await page.keyboard.type(`${bsi[0].name}`);
    await page.keyboard.press('Enter');
    //click shopping filter
    await page.waitForSelector('.sh-pr__product-results');
    await page.screenshot({
        path: 'screenshot.jpg'
    });
    console.log('complete beauty matches');
    await browser.close();
};

//*****search for item*****
//if matches found, calculate profit
//if profitable, add to vettedList

//....act on vetted (purchase/shipFBA/etc)