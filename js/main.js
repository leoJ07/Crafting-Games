var loading = true;
const loadScrean = document.getElementsByClassName("loadingScrean")[0];
console.log(loadScrean, window.innerWidth)
loadScrean.style.height = window.innerHeight + "px";
loadingAnimation()

function loadingAnimation(){
  if(loading){
    requestAnimationFrame(loadingAnimation);
  } else {
    console.log("done");
    return;
  }
  console.log("loading");
}

import * as Inventory from "./inventory.js";

function gameloop(){
  requestAnimationFrame(gameloop);
}

Inventory.Pack_Upp_Interfase("2x2_crafting");
Inventory.uppdate();

loading = false;
gameloop();