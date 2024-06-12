/*More Guests: You just found a bigger dinner table, 
so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that
 you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/


let guest_list=["hanan","duaa","ayesha","kabeer"]



guest_list.forEach(guest_list=>(
    console.log(`hello ${guest_list}: tomorrow is my birthday would u join me for dinner`)))







let notpresent="kabeer"
console.log(`${notpresent},is not joining us`)





let newguest="atah"
guest_list[guest_list.indexOf(notpresent)]=newguest


console.log("i found a bigger dinner table")



let firstguest="babar"
let middle_guest="shaheen"
let atend_guest="naseem"
guest_list.unshift(firstguest)
guest_list.splice(2,0,middle_guest)
guest_list.push(atend_guest)



guest_list.forEach(guest_list=>(
    console.log(`hello ${guest_list}: tomorrow is my birthday would u join me for dinner`)))