'use strict'
var count = 0;
var name = prompt('What is your name?');

alert('Hello ' + name + ' Welcome to my page');


//Question 1
var question1 = prompt('Here is the first question: ' + "Do I like hockey?");
question1 = question1.toLowerCase();
if (question1 == 'y' || question1 == 'yes') {
  alert('You are correct');
  count++;
} else if (question1 == 'n' || question1 == 'no') {
  alert('Sorry, this is true');
} else {
  alert('Not a valid answer. Counts as a wrong answer');
}
console.log('The user answered question 1 with ' + question1);


//Question 2
var question2 = prompt('Next question: ' + 'Do I have a dog?');
var question2 = question2.toLowerCase();

if (question2 == 'y' || question2 == 'yes') {
  alert('Sorry, this is incorrect');

} else if (question2 == 'n' || question2 == 'no') {
  alert('You are right!!!');
  count++;
}
else {
  alert('Not a valid answer. Counts as a wrong answer');
}
console.log('The user answered question 2 with ' + question2);

//Question 3
var question3 = prompt('Next question: ' + 'Do I have a cat?');
var question3 = question3.toLowerCase();

if (question3 == 'y' || question3 == 'yes') {
  alert('Unfortunately, my cat of 15 years died last month');

} else if (question3 == 'n' || question3 == 'no') {
  alert('You are right. Unfortunately, he died last month');
  count++;
}
else {
  alert('Not a valid answer. Counts as a wrong answer');
}
console.log('The user answered question 3 with ' + question3);


//Question 4
var question4 = prompt('Next question: ' + 'Am I a good soccer player?');
var question4 = question4.toLowerCase();

if (question4 == 'y' || question4 == 'yes') {
  alert('Sorry to disappoint');

} else if (question4 == 'n' || question4 == 'no') {
  alert('You are right! I just do not have it in me');
  count++;
}
else {
  alert('Not a valid answer. Counts as a wrong answer');
}
console.log('The user answered question 4 with ' + question4);


//Question 5
var question5 = prompt('Next question: ' + 'Is chocolate my favorite ice-cream flavor?');
var question5 = question5.toLowerCase();

if (question5 == 'y' || question5 == 'yes') {
  alert('I surprise myself, but no');

} else if (question5 == 'n' || question5 == 'no') {
  alert('You are right!');
  count++;
}
else {
  alert('Not a valid answer. Counts as a wrong answer');

}
console.log('The user answered question 5 with ' + question5);



//Question 6
var question6 = 465;
var correctNumber = 6;


for (var i = 0; i < 4; i++) {
  while (question6 != correctNumber) {
    question6 = prompt('How many email accounts do I have? You have 4 guesses');
    question6 = parseInt(question6);
    console.log('The user answered question 6 with ' + question6);
    if (question6 > correctNumber) {
      alert("You are too high");
      break;
    } else if (question6 < correctNumber) {
      alert('You are too low');
      break;
    } else if (question6 === correctNumber) {
      alert('You are correct');
      count++;
      break;
    } else {
      alert('Not a valid input');
      break;
    }
  }
}

alert('The correct answer is ' + correctNumber);



//Question 7 

var countries = ['germany', 'canada', 'russia', 'poland', 'ukraine'];

var attemptsNumber = 6; 
var success = false;
for (var i = 0; i < attemptsNumber; i++) {
  var countriesGuess = prompt('Name one of the countries I visited');
  countriesGuess = countriesGuess.toLowerCase();
  console.log('The user answered question 7 with ' + countriesGuess);
  for (var x = 0; x < countries.length; x++) {

    if (countries[x] === countriesGuess) {
      alert('You got it');
      count++;
      success = true;
      break;
    }

  }
  if (i === attemptsNumber || success == true) {
    break;
  } else {
    alert('Keep trying');
  }

}



for (var y = 0; y < countries.length; y++) {
  alert('Here is list of the countries: ' + countries[y]);
}

//The count of current correct answers
alert('You answered ' + count + ' questions correctly')


