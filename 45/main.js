"use strict";
function makeSandwich(bread, options) {
    let sandwich = `Here's your ${bread} sandwich with `;
    if (options.meat) {
        sandwich += options.meat + ", ";
    }
    if (options.cheese) {
        sandwich += options.cheese + ", ";
    }
    if (options.veggies && options.veggies.length > 0) {
        sandwich += options.veggies.join(", ") + ", ";
    }
    if (options.sauce) {
        sandwich += options.sauce + ", ";
    }
    // Remove the trailing comma and space
    sandwich = sandwich.slice(0, -2);
    return sandwich;
}
// Example usage:
console.log(makeSandwich("whole wheat", { meat: "turkey", cheese: "cheddar", veggies: ["lettuce", "tomato"], sauce: "mayo" }));
console.log(makeSandwich("white", { meat: "ham", cheese: "swiss" }));
console.log(makeSandwich("rye", { veggies: ["onion", "bell pepper"], sauce: "mustard" }));
