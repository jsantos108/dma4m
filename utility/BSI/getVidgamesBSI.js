import puppeteer from 'puppeteer';
import {StartBsGroup} from './StartBSGroup.js';
import {CompleteBsGroup} from './CompleteBsGroup.js';
import {autoScroll} from './autoScroll.js';

let vidgamesBSI = [{}];
let names;
let asins;
let images;
let urls;

export const getVidgamesBSI = async () => {
        console.log('open browser');
    const browser = await puppeteer.launch({headless: 'new'});
        const page = await browser.newPage();
        await page.goto('https://www.amazon.com/best-sellers-video-games/zgbs/videogames/ref=zg_bs_nav_0');
        await page.setViewport({width: 1440, height: 1080});
        await page.reload(); //avoid request delay
        //scroll to bottom to lazy load all products
        await autoScroll(page);
        
        console.log('Vidgames page 1');

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
        
        StartBsGroup(vidgamesBSI, names, asins, images, urls);

        await page.click('.a-last');
        await page
            .waitForSelector('.a-disabled.a-last')
            .then(() => console.log('Vidgames page 2'));
    
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
    
        CompleteBsGroup(vidgamesBSI, names, asins, images, urls);
        console.log(`vidgamesBSI complete with ${vidgamesBSI.length} items`);
        
        await browser.close();
        return vidgamesBSI;
};
