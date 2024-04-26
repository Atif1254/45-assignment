"use strict";
function makeSandwich(...ingredients) {
    let sandwich = "Here's your sandwich with: ";
    if (ingredients.length === 0) {
        return "Sorry, your sandwich has no ingredients!";
    }
    else {
        sandwich += ingredients.join(", ");
        return sandwich;
    }
}
// Example usage:
console.log(makeSandwich("bread", "cheese", "ham", "lettuce"));
console.log(makeSandwich("bread", "peanut butter", "jelly"));
console.log(makeSandwich());
