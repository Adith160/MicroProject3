const food = require('./food.json');

function catWise(catName) {
   if(catName === 'All'){
      console.log("List All Food Items");
      return console.table(food); 
   }else{
      console.log("Items of category :", catName);
      return console.table(food.filter(item => item.category === catName));
}}

function calorieWise(task) {
  if (task === 'above') {
      console.log("Calorie above 100");
    return console.table(food.filter(item => item.calorie > 100));
  } else {
   console.log("Calorie below 100");
    return console.table(food.filter(item => item.calorie < 100));
  }
}

function sortProteinDesc() {
   console.log("Proteins sorted in descending order");
  return console.table(food.sort((a, b) => b.protein - a.protein));
}

function sortCabAsc() {
   console.log("Cab sorted in ascending order");
  return console.table(food.sort((a, b) => a.carb - b.carb));
}

//Call the functions
catWise('All');         //for all food list
catWise('Vegetable');   //for category vegetable
catWise('Fruit');       //for category Fruit
catWise('Protein');     //for category Protein
catWise('Nuts');        //for category Nuts
catWise('Grain');       //for category Grain
catWise('Dairy');       //for category Dairy
calorieWise('above');   //for Calorie above 100
calorieWise('Below');   // for Calorie below 100
sortProteinDesc();      //for Proteins sorted in descending order
sortCabAsc();           //for Cab sorted in ascending order

