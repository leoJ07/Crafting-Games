export {items} from "../items/config.js";
export {recipes} from "../items/recipes_config.js";

import * as Inventory from "./inventory.js";

function gameloop(){
  requestAnimationFrame(gameloop);
}

Inventory.Pack_Upp_Interfase("2x2_crafting");
Inventory.uppdate();

gameloop();

console.log("main.js is loaded")
