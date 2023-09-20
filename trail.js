const food= require('./food.json');

// 1. list all the food items
  function listAllFood(list){
     return list.map(item=>item.foodname);  
  } 

// 2. list all the food items with category vegetables
  function catVegitable(list){
    return list.filter(item=>item.category==='Vegetable').map(item=>item.foodname);  
 } 

// 3. list all the food items with category fruit
 function catFruit(list){
    return list.filter(item=>item.category==='Fruit').map(item=>item.foodname);  
 } 

// 4. list all the food items with category protien
 function catProtein(list){
    return list.filter(item=>item.category==='Protein').map(item=>item.foodname);  
 } 

// 5. list all the food items with category nuts
 function catNuts(list){
    return list.filter(item=>item.category==='Nuts').map(item=>item.foodname);  
 } 

// 6. list all the food items with category grains
 function catGrain(list){
    return list.filter(item=>item.category==='Grain').map(item=>item.foodname);  
 } 

// 7. list all the food items with category dairy
 function catDairy(list){
    return list.filter(item=>item.category==='Dairy').map(item=>item.foodname);  
 } 

// 8. list all the food items with calorie above 100
 function calAbove100(list){
    return list.filter(item=>item.calorie>100).map(item=>item.foodname);  
 } 

//  9. list all the food items with calorie below 100
 function calBelow100(list){
    return list.filter(item=>item.calorie<100).map(item=>item.foodname);  
 } 

// 10. list all the food items with highest protien content to lowest
 function sortProteinDesc(list){
    return list.sort((a,b)=> b.protiens - a.protiens).map(item=>item.foodname); 
 }

// 11. list all the food items with lowest cab content to highest
 function sortCabAsc(list){
    return list.sort((a,b)=> a.cab - b.cab).map(item=>item.foodname); 
 }

 function sortCabAsc2(list){
    return list.sort((a,b)=> a.cab - b.cab).map(item=>item.foodname); 
 }

