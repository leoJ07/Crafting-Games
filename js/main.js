var loading = true;
const loadScrean = document.getElementsByClassName("loadingScrean")[0];
console.log(loadScrean, window.innerWidth)
loadScrean.style.height = window.innerHeight + "px";
loadingAnimation()

animation = {
  "loading": [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
};

function loadingAnimation(){
  i++;
  if(i >= Animation.loading.length) i = 0;
  if(loading){
    requestAnimationFrame(loadingAnimation);
  } else {
    console.log("done");
    return;
  }
  console.log("loading", i);
}

import * as Inventory from "./inventory.js";

function gameloop(){
  requestAnimationFrame(gameloop);
}

Inventory.Pack_Upp_Interfase("2x2_crafting");
Inventory.uppdate();

loading = false;
gameloop();