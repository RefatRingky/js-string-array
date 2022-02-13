function megaFriends(friends) {
   let mega = friends[0];
   for(const friend of  friends) {
       if (friend.length > mega.length) {
           mega = friend;
       }
   }
   return mega;
}
const friends = ['sourav','shopnil','sourav hasan'];
const bigBuddy = megaFriends(friends);
console.log(bigBuddy);

