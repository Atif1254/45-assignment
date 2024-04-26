function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A ".concat(size, " shirt will be printed with the message: \"").concat(message, "\"."));
}
// Making a large shirt with default message
make_shirt();
// Making a medium shirt with default message
make_shirt("medium");
// Making a shirt of any size with a different message
make_shirt("small", "Hello, GPT-3.5!");
