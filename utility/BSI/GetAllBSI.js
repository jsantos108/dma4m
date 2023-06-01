import { getCameraBSI } from "./getCameraBSI.js";
import { getBeautyBSI } from "./getBeautyBSI.js";
import { getBooksBSI } from "./getBooksBSI.js";
import { getCellularBSI } from "./getCellularBSI.js";
import { getElectronicsBSI } from "./getElectronicsBSI.js";
import { getGardenBSI } from "./getGardenBSI.js";
import { getHomeBSI } from "./getHomeBSI.js";
import { getOfficeBSI } from "./getOfficeBSI.js";
import { getPetBSI } from "./getPetBSI.js";
import { getScientificBSI } from "./getScientificBSI.js";
import { getVidgamesBSI } from "./getVidgamesBSI.js";


export const getAllBSI = async () => {
    let allBSI;
    let beautyBSI = await getBeautyBSI().then(beautyBSI => {
        return beautyBSI;
    });
    // let booksBSI = await getBooksBSI().then(booksBSI => {
    //     return booksBSI;
    // });
    // let cameraBSI = await getCameraBSI().then(cameraBSI => {
    //     return cameraBSI;
    // });
    // let cellularBSI = await getCellularBSI().then(cellularBSI => {
    //     return cellularBSI;
    // });
    // let electronicsBSI = await getElectronicsBSI().then(electronicsBSI => {
    //     return electronicsBSI;
    // });
    // let gardenBSI= await getGardenBSI().then(gardenBSI => {
    //     return gardenBSI;
    // });
    // let homeBSI= await getHomeBSI().then(homeBSI => {
    //     return homeBSI;
    // });
    // let officeBSI= await getOfficeBSI().then(officeBSI => {
    //     return officeBSI;
    // });
    // let petBSI = await getPetBSI().then(petBSI => {
    //     return petBSI;
    // });
    // let scientificBSI = await getScientificBSI().then(scientificBSI => {
    //     return scientificBSI;
    // });
    // let vidgamesBSI = await getVidgamesBSI().then(vidgamesBSI => {
    //     return vidgamesBSI;
    // });
    // allBSI = beautyBSI.concat(booksBSI, cameraBSI, cellularBSI, electronicsBSI, gardenBSI, homeBSI, officeBSI, petBSI, scientificBSI, vidgamesBSI);
    allBSI = beautyBSI;
    return allBSI;
};