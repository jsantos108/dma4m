import { getAllBSI } from './utility/BSI/GetAllBSI.js'

const bsi = await getAllBSI().then((bsi) => bsi);

console.log(bsi);