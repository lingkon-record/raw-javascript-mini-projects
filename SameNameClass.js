const friends = [
  { name: "Alice", classRollNumber: "A123" },
  { name: "Bob", classRollNumber: "B456" },
  { name: "Charlie", classRollNumber: "A123" },
  { name: "David", classRollNumber: "C789" },
  { name: "Alice", classRollNumber: "A123" }
];


function findFriendsWithSameNameAndRollNumber(friends, nameToFind, rollNumberToFind) {
  return friends.filter(friend => friend.name === nameToFind && friend.classRollNumber === rollNumberToFind);
}

const sameNameAndRollNumberFriends = findFriendsWithSameNameAndRollNumber(friends, "Alice", "A123");

if (sameNameAndRollNumberFriends.length > 0) {
  console.log("Friends with the same name and class roll number:");
  sameNameAndRollNumberFriends.forEach(friend => {
    console.log(`Name: ${friend.name}, Class Roll Number: ${friend.classRollNumber}`);
  });
} else {
  console.log("No friends found with the same name and class roll number.");
}

    
