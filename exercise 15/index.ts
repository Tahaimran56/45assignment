/*
changing Guest List: One of your guests can
't make it to the dinner, so you need to send out a new set of invitations with a 
replacement guest.
*/
let guest_list=["hanan","duaa","ayesha","kabeer"]


let notpresent="kabeer"
console.log(`${notpresent},is not joining us`)


let newguest="atah"
guest_list[guest_list.indexOf(notpresent)]=newguest


guest_list.forEach(guest_list=>(
    console.log(`hello ${guest_list}: tomorrow is my birthday would u join me for dinner`)))
