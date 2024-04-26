var guest_list = ['ali', 'madeen', 'kifa', 'bisma'];
//  for (let index = 0; index < guest_list.length; index++) {
//     console.log('Respeted Sir/madam' + guest_list[index] + ',', '\nWe invited you on dinner tomorrow.', '\nTHank you\n');
// }
var not_present = 'farhan';
var new_guest = 'messi';
// for (let index = 0; index < guest_list.length; index++) {
//     console.log('Respeted Sir/madam' + guest_list[index] + ',', '\nWe invited you on dinner tomorrow.', '\nTHank you\n');
// }
// console.log(`Mr. ${not_present} will not coming tomorrow dinner.`);
guest_list.unshift('shaheen', 'rizwan', 'sarfaraz');
// for (let index = 0; index < guest_list.length; index++) {
//     console.log('Respeted Sir/madam' + guest_list[index] + ',', '\nWe invited you on dinner tomorrow. we found big table so we decide to invited 3 more guest', '\nTHank you\n');
// }
console.log('\nUnfortunately we can not arrange big table , Only two people allow .');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry Sir/Madam.".concat(remove_guest, " you are not invited for dinner."));
}
for (var index = 0; index < guest_list.length; index++) {
    console.log('Respeted Sir/madam' + guest_list[index] + ',', '\nyes you are still invited on tomorrow dinner', '\nTHank you\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
