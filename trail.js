const food= require('./food.json');

// 1. list all the food items
function listAllFood(list) {
   return list.map((item) => ({
     id: item.id,
     foodname: item.foodname,
     calorie: item.calorie,
     category: item.category,
     proteins: item.proteins, 
     cab: item.cab,
   }));
 }
  

// 2. list all the food items with category vegetables
  function catVegitable(list){
    return list.filter(item=>item.category==='Vegetable')  
 } 

// 3. list all the food items with category fruit
 function catFruit(list){
    return list.filter(item=>item.category==='Fruit');  
 } 

// 4. list all the food items with category protien
 function catProtein(list){
    return list.filter(item=>item.category==='Protein');  
 } 

// 5. list all the food items with category nuts
 function catNuts(list){
    return list.filter(item=>item.category==='Nuts');  
 } 

// 6. list all the food items with category grains
 function catGrain(list){
    return list.filter(item=>item.category==='Grain');  
 } 

// 7. list all the food items with category dairy
 function catDairy(list){
    return list.filter(item=>item.category==='Dairy');  
 } 

// 8. list all the food items with calorie above 100
 function calAbove100(list){
    return list.filter(item=>item.calorie>100);  
 } 

//  9. list all the food items with calorie below 100
 function calBelow100(list){
    return list.filter(item=>item.calorie<100);  
 } 

// 10. list all the food items with highest protien content to lowest
 function sortProteinDesc(list){
    return list.sort((a,b)=> b.protiens - a.protiens); 
 }

// 11. list all the food items with lowest cab content to highest
 function sortCabAsc(list){
    return list.sort((a,b)=> a.cab - b.cab); 
 }

console.table(sortProteinDesc(food));
 
