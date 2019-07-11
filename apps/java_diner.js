// Greet Customer
alert("Hi there, and welcome to the JavaScript Diner")
alert("My name is Wendy and I will be your server today.")

let name = prompt("What is your name?");
alert("Hi " + name + ". I hope you're ready for.. an experience.");

// Make menu 

const breakfast = new Map();
breakfast.set('entree1', 'Omelette')
breakfast.set('entree2', 'French Toast')

const lunch = new Map();
lunch.set('entree1', 'Ham Sandwich')
lunch.set('entree2', 'Turkey Wrap')

const dinner = new Map();
dinner.set('entree1', 'Ham Sandwich')
dinner.set('entree2', 'Turkey Wrap')

const menuChoice = prompt("Which menu would you like to see? Breakfast, Lunch, or Dinner? ").trim().toLowerCase();

if (menuChoice === 'breakfast') {

  alert("Our Menu is either an " + breakfast.get('entree1') + " or " + breakfast.get('entree2'));
  alert("Our Chef would recommend the " + breakfast.get('entree1'))

  // user selects entree
  const entreeChoice = prompt("What would you like to eat? ").trim().toLowerCase();

  if (entreeChoice === 'omelette') {
    alert("Good Choice!");
  } else {
    alert("Err.. if you're sure...?");
  }

  if (entreeChoice === 'omelette') {
    price = 8;
  } else {
    price = 9
  }

  alert("The " + entreeChoice + " will cost you $" + price)

  // repeat for sides
  const breakfastSides = new Map();
  breakfastSides.set('side1', 'Toast')
  breakfastSides.set('side2', 'Bagel')
  breakfastSides.set('side3', 'Hash Browns')

  alert("Our sides are either " + breakfastSides.get('side1') + ", " + breakfastSides.get('side2') + " and lastly but not leastly, " + breakfastSides.get('side3'));

  const sideChoice1 = prompt("Which would you like for your first side? ").trim().toLowerCase();
  alert(sideChoice1 + ".. got it.")

  alert("Again, our sides are " + breakfastSides.get('side1') + ", " + breakfastSides.get('side2') + ", and " + breakfastSides.get('side3'))

  const sideChoice2 = prompt("and for your second side? ").trim().toLowerCase();

  if (sideChoice1 === 'toast') {
    sidePrice1 = 3;
  } else if (sideChoice1 === 'bagel') {
    sidePrice1 = 4
  } else {
    sidePrice1 = 4
  }

  if (sideChoice2 === 'toast') {
    sidePrice2 = 3;
  } else if (sideChoice2 === 'bagel') {
    sidePrice2 = 4
  } else {
    sidePrice2 = 4
  }

  const totalPrice = price + sidePrice1 + sidePrice2
  alert("So, we have the " + entreeChoice + " with a side of " + sideChoice1 + " and " + sideChoice2)
  alert("Your total will be $" + totalPrice)
  alert("I'll have that out to you in a jiff!")

} else if (menuChoice === 'lunch') {
  alert("Our Menu is either an " + lunch.get('entree1') + " or " + lunch.get('entree2'));
  alert("Our Chef would recommend the " + lunch.get('entree1'))

  // user selects entree
  const entreeChoice = prompt("What would you like to eat? ").trim().toLowerCase();

  if (entreeChoice === 'ham sandwich') {
    alert("Good Choice!");
  } else {
    alert("Err.. if you're sure...?");
  }

  if (entreeChoice === 'ham sandwich') {
    price = 10;
  } else {
    price = 11
  }

  alert("The " + entreeChoice + " will cost you $" + price)

  // repeat for sides
  const lunchSides = new Map();
  lunchSides.set('side1', 'Fries')
  lunchSides.set('side2', 'Chips')
  lunchSides.set('side3', 'Potato Salad')

  alert("Our sides are either " + lunchSides.get('side1') + ", " + lunchSides.get('side2') + " and lastly but not leastly, " + lunchSides.get('side3'));

  const sideChoice1 = prompt("Which would you like for your first side? ").trim().toLowerCase();
  alert(sideChoice1 + ".. got it.")

  alert("Again, our sides are " + lunchSides.get('side1') + ", " + lunchSides.get('side2') + ", and " + lunchSides.get('side3'))

  const sideChoice2 = prompt("and for your second side? ").trim().toLowerCase();

  if (sideChoice1 === 'fries') {
    sidePrice1 = 3;
  } else if (sideChoice1 === 'chips') {
    sidePrice1 = 4
  } else {
    sidePrice1 = 4
  }

  if (sideChoice2 === 'fries') {
    sidePrice2 = 3;
  } else if (sideChoice2 === 'chips') {
    sidePrice2 = 4
  } else {
    sidePrice2 = 4
  }

  const totalPrice = price + sidePrice1 + sidePrice2
  alert("So, we have the " + entreeChoice + " with a side of " + sideChoice1 + " and " + sideChoice2)
  alert("Your total will be $" + totalPrice)
  alert("I'll have that out to you in a jiff!")

} else if (menuChoice === 'dinner') {
  alert("Our Menu is either an " + dinner.get('entree1') + " or " + dinner.get('entree2'));
  alert("Our Chef would recommend the " + dinner.get('entree1'))

  // user selects entree
  const entreeChoice = prompt("What would you like to eat? ").trim().toLowerCase();

  if (entreeChoice === 'ham sandwich') {
    alert("Good Choice!");
  } else {
    alert("Err.. if you're sure...?");
  }

  if (entreeChoice === 'ham sandwich') {
    price = 14;
  } else {
    price = 15
  }

  alert("The " + entreeChoice + " will cost you $" + price)

  // repeat for sides
  const dinnerSides = new Map();
  dinnerSides.set('side1', 'Fries')
  dinnerSides.set('side2', 'Chips')
  dinnerSides.set('side3', 'Potato Salad')

  alert("Our sides are either " + dinnerSides.get('side1') + ", " + dinnerSides.get('side2') + " and lastly but not leastly, " + dinnerSides.get('side3'));

  const sideChoice1 = prompt("Which would you like for your first side? ").trim().toLowerCase();
  alert(sideChoice1 + ".. got it.")

  alert("Again, our sides are " + dinnerSides.get('side1') + ", " + dinnerSides.get('side2') + ", and " + dinnerSides.get('side3'))

  const sideChoice2 = prompt("and for your second side? ").trim().toLowerCase();

  if (sideChoice1 === 'fries') {
    sidePrice1 = 6;
  } else if (sideChoice1 === 'chips') {
    sidePrice1 = 7
  } else {
    sidePrice1 = 7
  }

  if (sideChoice2 === 'fries') {
    sidePrice2 = 6;
  } else if (sideChoice2 === 'chips') {
    sidePrice2 = 7
  } else {
    sidePrice2 = 7
  }

  const totalPrice = price + sidePrice1 + sidePrice2
  alert("So, we have the " + entreeChoice + " with a side of " + sideChoice1 + " and " + sideChoice2)
  alert("Your total will be $" + totalPrice)
  alert("I'll have that out to you in a jiff!")

} else {
  alert("Sorry hun, that wasn't one of the options.")
}