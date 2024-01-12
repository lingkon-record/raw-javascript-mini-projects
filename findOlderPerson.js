const person1 = { name: 'John', age: 25 };
const person2 = { name: 'Alice', age: 30 };

function findOlderPerson(personA, personB) {
  if (personA.age > personB.age) {
    return `${personA.name} is older than ${personB.name}`;
  } else if (personA.age < personB.age) {
    return `${personB.name} is older than ${personA.name}`;
  } else {
    return `${personA.name} and ${personB.name} are of the same age`;
  }
}

// Example usage:
const result = findOlderPerson(person1, person2);
console.log(result);
