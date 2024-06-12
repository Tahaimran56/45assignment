/*
your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples.
Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”
*/
var transport = ["audi", "fortuner", "honda car", "tesla car"];
transport.forEach(function (transport) {
    console.log("i would like to own a ".concat(transport));
});
