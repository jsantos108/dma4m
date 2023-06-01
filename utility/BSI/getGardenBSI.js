import puppeteer from 'puppeteer';
import {StartBsGroup} from './StartBSGroup.js';
import {CompleteBsGroup} from './CompleteBsGroup.js';
import {autoScroll} from './autoScroll.js';

let gardenBSI = [{}];
let names;
let asins;
let images;
let urls;

export const getGardenBSI = async () => {
        console.log('open browser');
    const browser = await puppeteer.launch({headless: 'new'});
        const page = await browser.newPage();
        await page.goto('https://www.amazon.com/Best-Sellers-Patio-Lawn-Garden/zgbs/lawn-garden/ref=zg_bs_nav_0');
        await page.setViewport({width: 1440, height: 1080});
        await page.reload(); //avoid request delay
        //scroll to bottom to lazy load all products
        await autoScroll(page);
        
        console.log('Garden page 1');

        names = await page.$$eval(".zg-grid-general-faceout>div>a>span", tags => {
            return tags.map(tag => tag.innerText)
        });
    
        asins = await page.$$eval(".zg-grid-general-faceout>div", tags => {
            return tags.map(tag => tag.id)
        });
    
        images = await page.$$eval(".zg-grid-general-faceout>div>a>div>img", tags => {
            return tags.map(tag => tag.src)
        });
    
        urls = await page.$$eval(".zg-grid-general-faceout>div>a:first-of-type", tags => {
            return tags.map(tag => tag.href)
        });
        
        StartBsGroup(gardenBSI, names, asins, images, urls);

        await page.click('.a-last');
        await page
            .waitForSelector('.a-disabled.a-last')
            .then(() => console.log('Garden page 2'));
    
        await autoScroll(page);
    
        names = await page.$$eval(".zg-grid-general-faceout>div>a>span", tags => {
            return tags.map(tag => tag.innerText)
        });
    
        asins = await page.$$eval(".zg-grid-general-faceout>div", tags => {
            return tags.map(tag => tag.id)
        });
    
        images = await page.$$eval(".zg-grid-general-faceout>div>a>div>img", tags => {
            return tags.map(tag => tag.src)
        });
    
        urls = await page.$$eval(".zg-grid-general-faceout>div>a:first-of-type", tags => {
            return tags.map(tag => tag.href)
        });
    
        CompleteBsGroup(gardenBSI, names, asins, images, urls);
        console.log(`gardenBSI complete with ${gardenBSI.length} items`);
        
        await browser.close();
        return gardenBSI;
};
