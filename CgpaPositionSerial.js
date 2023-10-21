const people = [
  { name: "Alice", cgpa: 3.8 },
  { name: "Bob", cgpa: 3.6 },
  { name: "Charlie", cgpa: 4.0 },
  { name: "David", cgpa: 3.9 },
  { name: "Eve", cgpa: 3.7 }
];




function findPersonByCGPAPosition(people, position) {
  const sortedPeople = people.slice().sort((a, b) => b.cgpa - a.cgpa);
  if (position >= 1 && position <= sortedPeople.length) {
    return sortedPeople[position - 1];
  } else {
    return null; // Invalid position
  }
}

const position = 2; // Change this to the desired position
const person = findPersonByCGPAPosition(people, position);

if (person) {
  console.log(`Person at position ${position}: Name - ${person.name}, CGPA - ${person.cgpa}`);
} else {
  console.log("Invalid position or person not found.");
}
