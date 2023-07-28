 // Ask the user if they want to skip the welcoming message
 let skipWelcome = confirm('Do you want to skip the welcoming message?');

 if (!skipWelcome) {
   // Ask the user to enter their name using prompt
   let userName = prompt('Please enter your name:');

   // Check if the user entered a name or clicked "Cancel"
   if (userName !== null) {
     // Ask the user to enter their gender using prompt
     let gender = prompt('Please enter your gender (male or female):');

     // Convert the input to lowercase to handle case-insensitive comparison
     gender = gender.toLowerCase();

     // Display the welcoming message with the appropriate title
     if (gender === 'male') {
       alert('Hello, Mr. ' + userName + '! Welcome to our website!');
     } else if (gender === 'female') {
       alert('Hello, Ms. ' + userName + '! Welcome to our website!');
     } else {
       // Handle the case when the user entered an incorrect gender
       let titleConfirmation = confirm('Invalid gender input. Do you still want to be greeted with your name?');
       if (titleConfirmation) {
         alert('Hello, ' + userName + '! Welcome to our website!');
       } else {
         alert('Alright, skipping the welcoming message.');
       }
     }

     // Ask the user to enter their age using prompt
     let age = prompt('Please enter your age:');

     // Convert the input to a number
     age = parseInt(age);

     // Check if the age is less than or equal to zero
     if (age <= 0 || isNaN(age)) {
       alert('Invalid input! Please enter a valid age greater than zero.');
     } else {
       alert('Your age is: ' + age);
     }
   } else {
     // Handle the case when the user clicked "Cancel" for name input
     alert('You did not enter your name.');
   }
 } else {
   // Handle the case when the user chooses to skip the welcoming message
   alert('Alright, skipping the welcoming message.');
 }