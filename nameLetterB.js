const friends = [
  { name: "Alice", classRollNumber: "A123" },
  { name: "Bob", classRollNumber: "B456" },
  { name: "Anna", classRollNumber: "A789" },
  { name: "David", classRollNumber: "C789" },
  { name: "Alom", classRollNumber: "A456" }
];

const friendsWithANameAndRollNumber = friends.filter(({ name, classRollNumber }) => name.toLowerCase().startsWith('b') && classRollNumber);

friendsWithANameAndRollNumber.length ?
  friendsWithANameAndRollNumber.forEach(({ name, classRollNumber }) => console.log(`Name: ${name}, Class Roll Number: ${classRollNumber}`)) :
  console.log("No friends found with names starting with 'B' (case-insensitive) and class roll numbers.");
