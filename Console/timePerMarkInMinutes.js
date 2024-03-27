function calculateTimeAllocation(totalMarks, examDuration) {
    // Convert exam duration to minutes
    const examDurationInMinutes = examDuration * 60;

    // Calculate time per mark in minutes
    const timePerMarkInMinutes = examDurationInMinutes / totalMarks;

    // Calculate time allocated for different mark values
    const marksAllocation = {
        '1 mark': timePerMarkInMinutes,
        '10 marks': timePerMarkInMinutes * 10,
        '20 marks': timePerMarkInMinutes * 20
    };

    return marksAllocation;
}

// Example usage
const totalMarks = 100;
const examDuration = 3; // hours

const timeAllocation = calculateTimeAllocation(totalMarks, examDuration);

console.log('Time allocated for 1 mark question:', timeAllocation['1 mark'], 'minutes');
console.log('Time allocated for 10 marks question:', timeAllocation['10 marks'], 'minutes');
console.log('Time allocated for 20 marks question:', timeAllocation['20 marks'], 'minutes');
