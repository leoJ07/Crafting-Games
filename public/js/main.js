export {items} from "../items/config.js";

import * as Inventory from "./inventory.js";

function gameloop(){
  requestAnimationFrame(gameloop);
}

Inventory.Pack_Upp_Interfase("2x2_crafting");
Inventory.uppdate();

gameloop();