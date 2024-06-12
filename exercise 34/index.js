/*
Pizzas: Think of at least three kinds of your favorite pizza.
Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing
 like pizza. The output should consist of three or more lines about the kinds of pizza
 you like and then an additional sentence, such as I really love pizza!
 */
var pizzas = ["shawarma", "bbq ", "cheeze"];
for (var i = 0; i < pizzas.length; i++) {
    console.log("i like:".concat(pizzas[i], " pizza"));
}
console.log("i really like pizza!");
