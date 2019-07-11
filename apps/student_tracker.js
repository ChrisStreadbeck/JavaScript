let costOfAtend = 8000
let currentNumberOfStudents = 16

const appLanding = () => {
  console.log("Welcome to the school managment app")
  console.log("Here is the Menu Options, Please select what you would like to do")
  setTimeout(function() {console.log("Option 1: Cost per Student")}, 3000);
  setTimeout(function() {console.log("Option 2: Instructors Per student")}, 4000);
  setTimeout(function() {console.log("Option 3: Expense Break Down")}, 5000);
  setTimeout(function() {console.log("Option 4: Current Student Count")}, 6000);
  setTimeout(function() {const answer = prompt("What Option would you like?" )
    if (answer == '1' || answer.toLowerCase() == 'option 1') {
      costPerStudent();
    } else if (answer == '2' || answer.toLowerCase() == 'option 2') {
      instructorsPerStudent();
    } else if (answer == '3' || answer.toLowerCase() == 'option 3') {
      expenseBreakDown();
    } else if (answer == '4' || answer.toLowerCase() == 'option 4') {
      currentStudentCount();
    } else {
      console.log("answer was wrong");
    }
  }, 8000);
}

const costPerStudent = () => {
  console.log(`This is what a student currently pays $${costOfAtend}`);
  console.log('Would you like to update the cureent cost?');
  setTimeout(function() { const costChangeAnswer = prompt("Yes or No?")
    if (costChangeAnswer.toLowerCase() == "yes") {
      const changedCost = parseInt(prompt("What would you like to change the Cost to? Exmple: 9000"))
      costOfAtend = changedCost
      costPerStudent()
    } else if (costChangeAnswer.toLowerCase() == "no") {
      console.log("Ok I am returning you to the main menu");
      appLanding()
    } else {
      console.log("Please enter Yes or No");
      costPerStudent()
    }
  }, 3000);
}

const instructorsPerStudent = () => {
  console.log("Instructors");
}

const expenseBreakDown = () => {
  console.log("Expense Break Down");
}

const currentStudentCount = () => {
  console.log("currentStudentCount");
}

appLanding()