 // Predefined password
const correctPassword = "12";

// Ask the user for the password
const enteredPassword = prompt("Enter your password:");

// Validate the entered password
if (enteredPassword === correctPassword) {
  alert("Login Successful!");
} else {
  alert("Wrong password. Please try again.");
}
