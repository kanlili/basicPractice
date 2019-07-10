'use strict';

module.exports = function countSameElements(collection) {
  let result = [];
     for(let item of collection){
         if(item.length > 1){
             let {key,count} = split(item);   
                push(result,key,count);
                }else{
                    result.push(item);
                }           
          }
 
  return countSameEle(result);
}
  
  const countSameEle=(collection)=>{
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
  const split=(ch)=>{
   if(ch.include("-")){
   let arr=ch.split("-");
   return {key:array[0],count:parseInt(arr[1],10)};
   }
   if(ch.include(":")){
   let arr=ch.split(":");
   return {key:array[0],count:parseInt(arr[1],10)};
   }
   if(ch.include(":")){
   let name = ch.charAt(0);
   let num = parseInt(ch.substr(2,ch.length-1));
   return {name,num};
   }
  }
  const push=(result,key,count)=>{
   for(let i=0;i<count;i++){
   result.push(key);
  }
}
