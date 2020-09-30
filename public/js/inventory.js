/*
Checklist
1. 
*/

import {items} from "./main.js";

const Inv_Slot = document.getElementsByClassName("Inventory");


var keyBoard = [];
document.addEventListener("keydown", (e) => {
    keyBoard[e.key] = true;
});
document.addEventListener("keyup", (e) => {
    keyBoard[e.key] = false;
});

var time = 0;
var stopTimer;
var mark;
var Int_Items = [];
var Inv_Items = [
    {item: "loog", count: 40}, {item: "loog", count: 63}, {item: "", count: 0}, 
    {item: "", count: 0}, {item: "", count: 0}, {item: "", count: 0}, 
    {item: "", count: 0}, {item: "", count: 0}, {item: "", count: 0}, 
    
    {item: "", count: 0}, {item: "", count: 0}, {item: "", count: 0}, 
    {item: "", count: 0}, {item: "", count: 0}, {item: "", count: 0}, 
    {item: "", count: 0}, {item: "", count: 0}, {item: "", count: 0}, 
    
    {item: "", count: 0}, {item: "", count: 0}, {item: "", count: 0}, 
    {item: "", count: 0}, {item: "", count: 0}, {item: "", count: 0}, 
    {item: "", count: 0}, {item: "", count: 0}, {item: "", count: 0}, 
    
    {item: "", count: 0}, {item: "", count: 0}, {item: "", count: 0}, 
    {item: "", count: 0}, {item: "", count: 0}, {item: "", count: 0}, 
    {item: "", count: 0}, {item: "", count: 0}, {item: "", count: 0}, 
];
var Int = {
    "this": document.getElementById("Int"),
    "block": document.getElementsByClassName("block")[1],
};

var interfases = [
    {
        "name": "2x2_crafting",
        "data": {
            
        },
        "items": [
            {
                "type": "Inv_Slot",
                "x": 10,
                "y": 10,
                "data": {
                    "take": false,
                    "place": true,
                },
            },
            {
                "type": "Inv_Slot",
                "x": 60,
                "y": 10,
                "data": {
                    "take": true,
                    "place": true,
                },
            },
            
            {
                "type": "Inv_Slot",
                "x": 10,
                "y": 60,
                "data": {
                    "take": true,
                    "place": true,
                },
            },
            {
                "type": "Inv_Slot",
                "x": 60,
                "y": 60,
                "data": {
                    "take": true,
                    "place": true,
                },
            },
            
            {
                "type": "Inv_Slot",
                "x": 160,
                "y": 35,
                "data": {
                    "take": true,
                    "place": false,
                },
            },
            
        ],
    },
];

export function mark_slot(element){
  if(mark === undefined){
      time = 0;
      stopTimer = false;
      requestAnimationFrame(timer);

      mark = {"el": element, "key": {"shift": keyBoard["Shift"]}};
      element.style.borderColor = "white";
      
  } else if(element === mark.el){
      stopTimer = true;

      if(time < 20){
        fillSlot(pack_Upp_Item_Data(element));
      }

      mark = undefined;
      element.style.borderColor = "#571200";
      
  } else {
      stopTimer = true;

      move_item({"from": pack_Upp_Item_Data(mark.el), "to": pack_Upp_Item_Data(element)}, {"shift": {"to": keyBoard["Shift"], "from": mark.key.shift}});
      
      if(!(keyBoard["Shift"])){
          if(mark !== undefined){
            mark.el.style.borderColor = "#571200";
            mark = undefined;
          }
      }
      
  }
}
export function pack_Upp_Item_Data(element){
  for(let i = 0; i < Int_Items.length; i++){
      if(Int_Items[i].el === element){
          return {item: Int_Items[i].item, count: Int_Items[i].count, index: i, plase: "Int"};
      }
  }
  
  for(let i = 0; i < Inv_Slot.length; i++){
      if(Inv_Slot[i] === element){
          return {item: Inv_Items[i].item, count: Inv_Items[i].count, index: i, plase: "Inv"}
          
      }
  }
}
export function move_item(els, keys){
  let Move = true;
  let MaxMoveItems;
  let MaxStackItems;

  if(els.to.item !== ""){
      for(let i = 0; i < items.length; i++){
          if(items[i].name === els.to.item){
              MaxMoveItems = items[i].data.stack;
              MaxStackItems = items[i].data.stack;
              break;
          }
      }
  } else {
      for(let i = 0; i < items.length; i++){
          if(items[i].name === els.from.item){
              MaxMoveItems = items[i].data.stack;
              MaxStackItems = items[i].data.stack;
              break;
          }
      }
  }
  
  if(keys !== undefined){
    if(keys.shift.from){
        MaxMoveItems = Math.ceil(els.from.count / 2);
    }

    if(keys.shift.to){
        MaxMoveItems = 1;
    }
  }
  

  if(els.to.plase === `Int`){
      Move = Move && Int_Items[els.to.index].data.place ? true : false;
  }
  
  if(els.from.plase === `Int`){
      Move = Move && Int_Items[els.from.index].data.take ? true : false;
  }
  
  if(Move){
      if(els.from.item !== ""){
          if(els.to.item === els.from.item){
            
            //adding items to: els.to
            if(els.to.plase === `Inv`){
                Inv_Items[els.to.index].count += els.from.count >= (MaxStackItems - els.to.count)? MaxStackItems - els.to.count >= MaxMoveItems? MaxMoveItems : MaxStackItems - els.to.count : MaxStackItems - els.to.count >= MaxMoveItems? MaxMoveItems : els.from.count;
            } else {
                Int_Items[els.to.index].count += els.from.count >= (MaxStackItems - els.to.count)? MaxStackItems - els.to.count >= MaxMoveItems? MaxMoveItems : MaxStackItems - els.to.count : MaxStackItems - els.to.count >= MaxMoveItems? MaxMoveItems : els.from.count;
            }
            
            //tar bort items from: els.from
            if(els.from.plase === `Inv`){
                Inv_Items[els.from.index].count -= els.from.count >= (MaxStackItems - els.to.count)? MaxStackItems - els.to.count >= MaxMoveItems? MaxMoveItems : MaxStackItems - els.to.count : MaxStackItems - els.to.count >= MaxMoveItems? MaxMoveItems : els.from.count;
            } else {
                Int_Items[els.from.index].count -= els.from.count >= (MaxStackItems - els.to.count)? MaxStackItems - els.to.count >= MaxMoveItems? MaxMoveItems : MaxStackItems - els.to.count : MaxStackItems - els.to.count >= MaxMoveItems? MaxMoveItems : els.from.count;
            }
            
            //deliting the item if its nofing left
            if(els.from.plase === `Inv`){
              if(Inv_Items[els.from.index].count === 0){
                Inv_Items[els.from.index].item = ``;
                if(mark !== undefined){
                  mark.el.style.borderColor = "#571200";
                  mark = undefined;
                }
              }
            } else {
              if(Int_Items[els.from.index].count === 0){
                Int_Items[els.from.index].item = ``;
                if(mark !== undefined){
                  mark.el.style.borderColor = "#571200";
                  mark = undefined;
                }
              }
            }
            
          } else {
              if(els.to.item === ""){
                  if(els.to.plase === "Inv"){
                      Inv_Items[els.to.index].item = els.from.item;
                      for(let i = 0; i < MaxMoveItems; i++){
                          Inv_Items[els.to.index].count += 1;
                          if(els.from.plase === "Inv"){
                              Inv_Items[els.from.index].count -= 1;
                              if(Inv_Items[els.from.index].count === 0){
                                  Inv_Items[els.from.index].item = "";
                                  break;
                              }
                          } else {
                              Int_Items[els.from.index].count -= 1;
                              if(Int_Items[els.from.index].count === 0){
                                  Int_Items[els.from.index].item = "";
                                  break;
                              }
                          }
                          if(Inv_Items[els.to.index].count === MaxStackItems){
                              break;
                          }
                      }
                  } else {
                      Int_Items[els.to.index].item = els.from.item;
                      for(let i = 0; i < MaxMoveItems; i++){
                          Int_Items[els.to.index].count += 1;
                          if(els.from.plase === "Inv"){
                              Inv_Items[els.from.index].count -= 1;
                              if(Inv_Items[els.from.index].count === 0){
                                  Inv_Items[els.from.index].item = "";
                                  break;
                              }
                          } else {
                              Int_Items[els.from.index].count -= 1;
                              if(Int_Items[els.from.index].count === 0){
                                  Int_Items[els.from.index].item = "";
                                  break;
                              }
                          }
                          if(Int_Items[els.to.index].count === MaxStackItems){
                              break;
                          }
                      }
                  }
              }
          }
      }
  }
  
  uppdate();
}
export function create_int_items(type, x, y, data){
  var div = document.createElement("div");
  Int.block.appendChild(div);
  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  Int_Items.push({ item: `loog`, count: 1, el: div, data: data,});
  switch (type) {
      case 'Inv_Slot':
          div.className = "Inv_Slot";
          div.onclick = function(){ mark_slot(this); };
          break;
  }
  return div;
}
export function Pack_Upp_Interfase(name){
  for(let i = 0; i < interfases.length; i++){
      if(name === interfases[i].name){
          for(let k = 0; k < interfases[i].items.length; k++){
              create_int_items(interfases[i].items[k].type, interfases[i].items[k].x, interfases[i].items[k].y, interfases[i].items[k].data)
          }
          break;
      }
  }
}
export function uppdate(){
    for(let i = 0; i < Inv_Slot.length; i++){
        let path;
        for(let k = 0; k < items.length; k++){
            if(items[k].name === Inv_Items[i].item){
                path = `../items/textures/item/${items[k].texture.item.path}`;
                break;
            }
        }
        Inv_Slot[i].className = `Inv_Slot Inventory`;
        if(Inv_Items[i].count > 1){

            Inv_Slot[i].innerHTML = `<img src="${path}" alt="" /><p><b>${Inv_Items[i].count}</b></p>`;
            if(Inv_Items[i].item !== ""){
                Inv_Slot[i].className += ` Inv_Slot_Img`;
            }
        } else if(Inv_Items[i].item !== ""){
          
            Inv_Slot[i].innerHTML = `<img src="${path}" alt="" /><p><b></b></p>`;
            Inv_Slot[i].className += ` Inv_Slot_Img`;
          
        } else {
          
            Inv_Slot[i].innerHTML = ``; 
      }
  }
  
  
  for(let i = 0; i < Int_Items.length; i++){
        Int_Items[i].el.className = `Inv_Slot`;
        let path;
        for(let k = 0; k < items.length; k++){
            if(items[k].name === Int_Items[i].item){
                path = `../items/textures/item/${items[k].texture.item.path}`;
                break;
            }
        }
      if(Int_Items[i].count > 1){
          
          Int_Items[i].el.innerHTML = `<img src="${path}" alt="" /><p><b>${Int_Items[i].count}</b></p>`;
          if(Int_Items[i].item !== ""){
              Int_Items[i].el.className += ` Inv_Slot_Img`;
          }
      } else if(Int_Items[i].item !== ""){
          
          Int_Items[i].el.innerHTML = `<img src="${path}" alt="" /><p><b></b></p>`;
          Int_Items[i].el.className += ` Inv_Slot_Img`;
          
      } else {
          
          Int_Items[i].el.innerHTML = ``;
          
      }
  }
}
export function timer(){
  if(stopTimer){
    return;
  }
  time++
  window.requestAnimationFrame(timer);
}
export function fillSlot(el){
  var maxStack;
  for(let i = 0; i < items.length; i++){
    if(items[i].name === el.item){
      maxStack = items[i].data.stack;
    }
  }

  for(let i = 0; i < Inv_Items.length; i++){
    if(el.plase === "Inv"){
      if(Inv_Items[el.index].count >= maxStack){
        break;
      }
    } else {
      if(Int_Items[el.index].count >= maxStack){
        break;
      }
    }
    if(el.plase === "Inv"){
      if(i === el.index){
        continue;
      }
    }
    
    if(Inv_Items[i].item === el.item){
      move_item({from: pack_Upp_Item_Data(Inv_Slot[i]), to: el,});
    }
    
    if(el.plase === "Inv"){
      el.count = Inv_Items[el.index].count
    } else {
      el.count = Int_Items[el.index].count
    }
    

  }

  for(let i = 0; i < Int_Items.length; i++){
    if(el.plase === "Inv"){
      if(Inv_Items[el.index].count >= maxStack){
        break;
      }
    } else {
      if(Int_Items[el.index].count >= maxStack){
        break;
      }
    }

    if(el.plase === "Int"){
      if(i === el.index){
        continue;
      }
    }
    
    if(Int_Items[i].item === el.item){
      move_item({from: pack_Upp_Item_Data(Int_Items[i].el), to: el,});
    }

    if(el.plase === "Inv"){
      el.count = Inv_Items[el.index].count
    } else {
      el.count = Int_Items[el.index].count
    }
  }
}

for(let i = 0; i < Inv_Slot.length; i++){
    Inv_Slot[i].onclick = function(){mark_slot(this)};
}