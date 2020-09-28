export var items = [
    {
        "name": "loog",
        "path": "loog.png",
        "data": {
            "stack": 64,
        },
    },
];

import * as Inventory from "./inventory.js";

function gameloop(){
  requestAnimationFrame(gameloop);
}

Inventory.Pack_Upp_Interfase("2x2_crafting");
Inventory.uppdate();

gameloop();