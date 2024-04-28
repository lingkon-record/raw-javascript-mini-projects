
const boys = [
    { name: "John", math: 85, science: 78, english: 92, history: 88, geography: 90 },
    { name: "Michael", math: 90, science: 82, english: 85, history: 78, geography: 88 },
    { name: "David", math: 95, science: 88, english: 90, history: 85, geography: 92 },
    { name: "James", math: 88, science: 90, english: 86, history: 92, geography: 78 },
    { name: "Robert", math: 82, science: 85, english: 88, history: 90, geography: 85 },
    { name: "William", math: 86, science: 92, english: 82, history: 80, geography: 86 },
    { name: "Joseph", math: 92, science: 86, english: 78, history: 85, geography: 84 }
];


function findBestInMath(boysArray) {
    let bestMathScore = -1;
    let bestMathStudent = null;

    boysArray.forEach(boy => {
        if (boy.math > bestMathScore) {
            bestMathScore = boy.math;
            bestMathStudent = boy.name;
        }
    });

    return bestMathStudent;
}


const bestMathStudent = findBestInMath(boys);
console.log(`highest mark in math is ${bestMathStudent}`);
