/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.
*/
// function make_shirt(size: string = "large", message: string = "I love TypeScript") {
//     console.log(`size of t-shirt is ${size}  with the message "${message}" in t-shirt`);
// }
// make_shirt()
// make_shirt("medium")
// make_shirt("small", "#one or nothing")
function shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "hello taha"; }
    console.log("".concat(size, "and message is ").concat(message));
}
shirt("small");
