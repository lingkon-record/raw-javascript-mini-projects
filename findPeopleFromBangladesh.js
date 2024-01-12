const peopleData = [
  { name: 'John', country: 'USA' },
  { name: 'Alice', country: 'Bangladesh' },
  { name: 'Bob', country: 'Canada' },
  // Add more people and their countries as needed
];

function findPeopleFromBangladesh(peopleArray) {
  return peopleArray.filter(person => person.country === 'Bangladesh');
}

// Example usage:
const peopleFromBangladesh = findPeopleFromBangladesh(peopleData);
console.log(peopleFromBangladesh);
