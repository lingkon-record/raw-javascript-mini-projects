const friends = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 28 }
];


function findFriendByName(nameToFind) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].name === nameToFind) {
      return friends[i];
    }
  }
  return null; // Friend not found
}

const friend = findFriendByName("Charlie");

if (friend) {
  console.log(`Found friend: ${friend.name}, Age: ${friend.age}`);
} else {
  console.log("Friend not found.");
}
