const friends = [
  { name: "Alice", classRollNumber: "A123" },
  { name: "Bob", classRollNumber: "B456" },
  { name: "Charlie", classRollNumber: "A123" },
  { name: "David", classRollNumber: "C789" },
  { name: "Alice", classRollNumber: "D987" }
];

function findFriendsWithSameNameAndUniqueRollNumber(friends, nameToFind) {
  const uniqueRollNumbers = new Set();
  return friends.filter(friend => {
    if (friend.name === nameToFind && !uniqueRollNumbers.has(friend.classRollNumber)) {
      uniqueRollNumbers.add(friend.classRollNumber);
      return true;
    }
    return false;
  });
}

const sameNameAndUniqueRollNumberFriends = findFriendsWithSameNameAndUniqueRollNumber(friends, "Alice");

if (sameNameAndUniqueRollNumberFriends.length > 0) {
  console.log("Friends with the same name and unique class roll numbers:");
  sameNameAndUniqueRollNumberFriends.forEach(friend => {
    console.log(`Name: ${friend.name}, Class Roll Number: ${friend.classRollNumber}`);
  });
} else {
  console.log("No friends found with the same name and unique class roll numbers.");
}

    
