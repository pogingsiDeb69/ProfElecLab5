let pass;
do {
    pass = prompt("Enter password: ");
    
    if (pass.length < 8) {
        console.log("Password must be 8 characters long. Please try again.");
    }
} while (pass.length < 8);

if (pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
    console.log("Strong Password");
} else if (pass.match(/^(?=.*[a-z])|(?=.*[A-Z])/)) {
    console.log("Weak Password");
} else {
    console.log("Very Weak Password");
}
