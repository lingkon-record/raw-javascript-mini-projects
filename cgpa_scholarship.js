const people = [
  { name: "Alice", cgpa: 3.8 },
  { name: "Bob", cgpa: 3.6 },
  { name: "Charlie", cgpa: 4.0 },
  { name: "David", cgpa: 3.9 },
  { name: "Eve", cgpa: 3.7 }
];



function findPeopleInCGPARange(people, startCGPA, endCGPA) {
  return people.filter(person => person.cgpa >= startCGPA && person.cgpa <= endCGPA);
}

const startCGPA = 3.7; // Change this to the desired start CGPA
const endCGPA = 3.8;   // Change this to the desired end CGPA

const peopleInRange = findPeopleInCGPARange(people, startCGPA, endCGPA);

if (peopleInRange.length > 0) {
  console.log(`People within the CGPA range ${startCGPA} to ${endCGPA}:`);
  peopleInRange.forEach(person => {
    console.log(`Name: ${person.name}, CGPA: ${person.cgpa}`);
  });
} else {
  console.log("No people found within the specified CGPA range.");
}
