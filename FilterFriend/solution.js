const input = ['Ryan', 'Kieran', 'Jason', 'Yous'];

function friend(friends) {
  const filterFriend = friends.filter(friend => friend.length === 4);
  return filterFriend;
}
console.log(friend(input));
