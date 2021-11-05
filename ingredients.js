const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0
// Write a while loop that prints out the contents of ingredients:
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// adding blank space between console.log
console.log(" ")

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// adding blank space between console.log
console.log(" ")

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}