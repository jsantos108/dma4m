import { getAllBSI } from './utility/BSI/GetAllBSI.js'
import { getMatches } from './utility/getMatches.js';

const bsi = await getAllBSI().then((bsi) => bsi);

getMatches(bsi);