/*
changing Guest List: One of your guests can
't make it to the dinner, so you need to send out a new set of invitations with a
replacement guest.
*/
var guest_list = ["hanan", "duaa", "ayesha", "kabeer"];
var notpresent = "kabeer";
console.log("".concat(notpresent, ",is not joining us"));
var newguest = "atah";
guest_list[guest_list.indexOf(notpresent)] = newguest;
guest_list.forEach(function (guest_list) { return (console.log("hello ".concat(guest_list, ": tomorrow is my birthday would u join me for dinner"))); });
