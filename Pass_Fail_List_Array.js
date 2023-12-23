 // Object/Array with Student Names and Exam Marks
const students = [
  { name: "Ali", mark: 78 },
  { name: "Sara", mark: 45 },
  { name: "Ahmed", mark: 92 },
  { name: "Fatima", mark: 60 },
  // Adding more students
  { name: "Zain", mark: 80 },
  { name: "Aisha", mark: 40 },
  { name: "Imran", mark: 55 },
  { name: "Hira", mark: 75 },
  { name: "Kamran", mark: 63 },
  { name: "Nida", mark: 30 },
  { name: "Bilal", mark: 88 },
  { name: "Ayesha", mark: 49 },
  { name: "Farhan", mark: 68 },
  { name: "Hina", mark: 90 },
  { name: "Usman", mark: 42 },
  { name: "Madiha", mark: 57 },
  { name: "Omar", mark: 72 },
  { name: "Zara", mark: 52 },
  // Add more students as needed
];

// After Exams: Separate Pass and Fail
const passList = students.filter(student => student.mark >= 50);
const failList = students.filter(student => student.mark < 50);

// Displaying Results
console.log("All Students:", students);
console.log("Pass List:", passList);
console.log("Fail List:", failList);
