var current_users = ["saba", "babar", "ali", "rohan", "atif"];
var new_users = ["raza", "hussain", "admin", "ahmed"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) {
        return currentUser.toLowerCase() === newUser.toString().toLowerCase();
    })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
