const boys = [
    { name: "John", math: 85 }, 
    { name: "Michael", math: 90 }, 
    { name: "David", math: 95 }, 
    { name: "James", math: 88 }, 
    { name: "Robert", math: 82 }, 
    { name: "William", math: 86 }, 
    { name: "Joseph", math: 92 }
];

const bestMathStudent = boys.reduce((prev, current) => (prev.math > current.math) ? prev : current);
console.log(`The student with the highest mark in math is ${bestMathStudent.name}`);
