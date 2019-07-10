'use strict';

module.exports = function countSameElements(collection) {
   let c=[];
   for(let item of collection){
      let element=find(c,item);
      if(element){
        element.count++;
      }else{
      c.push({key:item,count:1});
      }
   }
   return c;
  }
  const find=(collection,ch)=>{
    for(let item of collection){
         if(item.key ==ch){
           return item;
         }
    }
  return null;
}
