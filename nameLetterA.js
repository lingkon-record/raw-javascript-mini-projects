
const friends = [
  { name: "Alice", classRollNumber: "A123" },
  { name: "Bob", classRollNumber: "B456" },
  { name: "Anna", classRollNumber: "A789" },
  { name: "David", classRollNumber: "C789" },
  { name: "alom", classRollNumber: "A456" }
];



function findFriendsWithNameAndRollNumberStartingWithA(friends) {
  return friends.filter(friend => friend.name.match(/^a/i) && friend.classRollNumber);
}

const friendsWithANameAndRollNumber = findFriendsWithNameAndRollNumberStartingWithA(friends);

if (friendsWithANameAndRollNumber.length > 0) {
  console.log("Friends with names starting with 'A' (case-insensitive) and class roll numbers:");
  friendsWithANameAndRollNumber.forEach(friend => {
    console.log(`Name: ${friend.name}, Class Roll Number: ${friend.classRollNumber}`);
  });
} else {
  console.log("No friends found with names starting with 'A' (case-insensitive) and class roll numbers.");
}
