const standardSetings = [
  `Open Inventory<div id="key">e</div>`,
  `Open Resorses<div id="key">r</div>`,
  `Open Interfase Edit<div id="key">q</div>`,
  `Open Interfase<div id="key">f</div>`,
];

var changing_el;

const set_box = document.querySelector("#seting_box");
const setings =  document.querySelectorAll(".setings");
const change_key = document.querySelector("#change_key")
const onclick = (el) => {
  changing_el = el;
  change_key.style.display = "block";
  document.addEventListener("keypress", setkey);
};

function setkey(key){
  document.removeEventListener("keypress", setkey);
  change_key.style.display = "none";
  for(let i = 0; i < setings.length; i++){
    if(setings[i] === changing_el){
      let storage = "";
      for(let k = 0; k < setings[i].innerHTML.length; k++){
        if(setings[i].innerHTML[k] === "<"){
          break;
        }
        storage = storage + setings[i].innerHTML[k];
      }
      setings[i].innerHTML = `${storage}<div id="key">${key.key}</div>`
    }
  }
}

const loadData = () => {
  console.log("loading data")
  for(let i = 0; i < setings.length; i++){
    let storage = "";
    let path = "setings/";
    for(k = 0; k < setings[i].innerHTML.length; k++){
      if(setings[i].innerHTML[k] === "<"){
        break;
      }
      if(setings[i].innerHTML[k] === " "){
        path = path + "_";
      } else {
        path = path + setings[i].innerHTML[k];
      }
      storage = storage + setings[i].innerHTML[k];
    }
    setings[i].innerHTML = `${storage}<div id="key">${localStorage[path]}</div>`;
  }
};
const saveData = () => {
  console.log("saving data")
  for(let i = 0; i < setings.length; i++){
    let storage = "setings/";
    let data = "";
    let k;
    for(k = 0; k < setings[i].innerHTML.length; k++){
      if(setings[i].innerHTML[k] === "<"){
        break;
      }
      if(setings[i].innerHTML[k] === " "){
        storage = storage + "_";
      } else {
        storage = storage + setings[i].innerHTML[k];
      }
    }
    let start = false;
    for(let m = 0; m < setings[i].innerHTML.length; m++){
      if(start){
        if(setings[i].innerHTML[m] === "<"){
          break;
        }
        data = data + setings[i].innerHTML[m]
      }
      if(setings[i].innerHTML[m] === ">"){
        start = true
      }
    }
    localStorage[storage] = data;
  }
};
const reset = () => {
  console.log("reseting data")
  for(let i = 0; i < setings.length; i++){
    setings[i].innerHTML = standardSetings[i];
  }
};

for(let i = 0; i < setings.length; i++){
  setings[i].onclick = function(){
    onclick(this);
  }
}

loadData();

console.log("setings.js is loaded");
