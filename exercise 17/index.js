/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message
saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print a message
to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list,
 letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program.
*/
var guest_list = ["hanan", "duaa", "ayesha", "kabeer"];
guest_list.forEach(function (guest_list) { return (console.log("hello ".concat(guest_list, ": tomorrow is my birthday would u join me for dinner"))); });
var notpresent = "kabeer";
console.log("".concat(notpresent, ",is not joining us"));
var newguest = "atah";
guest_list[guest_list.indexOf(notpresent)] = newguest;
console.log("i found a bigger dinner table");
var firstguest = "babar";
var middle_guest = "shaheen";
var atend_guest = "naseem";
guest_list.unshift(firstguest);
guest_list.splice(2, 0, middle_guest);
guest_list.push(atend_guest);
guest_list.forEach(function (guest_list) { return (console.log("hello ".concat(guest_list, ": tomorrow is my birthday would u join me for dinner"))); });
console.log("i can only invite 2people for dinner");
while (guest_list.length > 2) {
    var removedGuest = guest_list.pop();
    console.log("Sorry, ".concat(removedGuest, ",i am sorry  I can't invite you in dinner."));
}
guest_list.forEach(function (guest_list) {
    console.log("Dear ".concat(guest_list, ", you're still invited to dinner."));
});
guest_list.splice(0, guest_list.length);
console.log(guest_list);
