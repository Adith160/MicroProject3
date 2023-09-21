const food= require('./food.json');

// 1. list all the food items
function listAllFood(list) {
   return console.table(food);
 }


// 2. list all the food items with category vegetables
  function catVegetable(list){
    return console.table(list.filter(item=>item.category==='Vegetable'));  
 } 

// 3. list all the food items with category fruit
 function catFruit(list){
    return console.table(list.filter(item=>item.category==='Fruit'));  
 } 

// 4. list all the food items with category protien
 function catProtein(list){
    return console.table(list.filter(item=>item.category==='Protein'));  
 } 

// 5. list all the food items with category nuts
 function catNuts(list){
    return console.table(list.filter(item=>item.category==='Nuts'));  
 } 

// 6. list all the food items with category grains
 function catGrain(list){
    return console.table(list.filter(item=>item.category==='Grain'));  
 } 

// 7. list all the food items with category dairy
 function catDairy(list){
    return console.table(list.filter(item=>item.category==='Dairy'));  
 } 

// 8. list all the food items with calorie above 100
 function calAbove100(list){
    return console.table(list.filter(item=>item.calorie>100));  
 } 

//  9. list all the food items with calorie below 100
 function calBelow100(list){
    return console.log(list.filter(item=>item.calorie<100));  
 } 

// 10. list all the food items with highest protien content to lowest
 function sortProteinDesc(list){
    return console.table(list.sort((a,b)=> b.protiens - a.protiens)); 
 }

// 11. list all the food items with lowest cab content to highest
 function sortCabAsc(list){
    return console.table(list.sort((a,b)=> a.cab - b.cab)); 
 }


 listAllFood(food);     //for all food list
 catVegetable(food);    //for category vegetable
 catFruit(food);        //for category Fruit
 catProtein(food);      //for category Protein
 catNuts(food);         //for category Nuts
 catGrain(food);        //for category Grain
 catDairy(food);        //for category Dairy
 calAbove100(food);     //for Calorie above 100
 calBelow100(food);     // for Calorie below 100
 sortProteinDesc(food); //for Proteins sorted in descending order
 sortCabAsc(food);      //for Cab sorted in ascending order

