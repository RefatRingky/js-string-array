// function megaFriends(friends) {
//    let mega = friends[0];
//    for(const friend of  friends) {
//        if (friend.length > mega.length) {
//            mega = friend;
//        }
//    }
//    return mega;
// }
// const friends = ['sourav','shopnil','sourav hasan'];
// const bigBuddy = megaFriends(friends);
// console.log(bigBuddy);

// is Array checking
function megaFriends(friends) {
    if (Array.isArray(friends) == false ) {
        return 'please provide a array'
    }
   let mega = friends[0];
   for(const friend of  friends) {
       if (friend.length > mega.length) {
           mega = friend;
       }
   }
   return mega;
}
const friends = ['sourav','shopnil','sourav hasan'];
const bigBuddy = megaFriends(12345);
console.log(bigBuddy);
if (friends.indexOf('sourav') != -1) {
    console.log("Sourav is here");
}
if (friends.includes('sourav') != -1) {
    console.log("Sourav is includes");
}

