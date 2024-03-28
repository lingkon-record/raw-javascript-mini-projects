 function extractFirstName(fullName) {
    // Split the full name into an array of strings
    let nameParts = fullName.split(" ");
    
    // Extract the first name
    let firstName = nameParts[0];
    
    return firstName;
}

// Example usage:
let fullName = "John Doe";
let firstName = extractFirstName(fullName);
console.log(firstName); // Output: John
