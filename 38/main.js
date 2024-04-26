"use strict";
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in $
        {country}.`);
}
let city1 = describe_city("karachi");
let city2 = describe_city("larkana");
let city3 = describe_city("hyderabad");
let city4 = describe_city("dubai");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
