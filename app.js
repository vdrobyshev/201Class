'use strict'
var count=0;
var name=prompt('What is your name?');

alert ('Hello ' + name + ' Welcome to my page');

var question1 =prompt('Here is the first question: ' + "Do I like hockey?" );
var result1=question1.toLowerCase();
if (result1 =='y' || result1=='yes'){
  alert ('You are correct');
  count++;
} else if (result1 =='n' || result1=='no'){
  alert ('Sorry, this is true');
} else {
  alert('Not a valid answer. Counts as a wrong answer');
}
console.log('The user answered question 1 with ' + question1);



var question2 =prompt('Next question: ' + 'Do I have a dog?');
var result2=question2.toLowerCase();

if (result2 =='y' || result2=='yes'){
  alert ('Sorry, this is incorrect');
  
} else if (result2 =='n' || result2=='no') {
  alert ('You are right!!!');
  count++;
}
  else {
   alert('Not a valid answer. Counts as a wrong answer'); 
  }
console.log('The user answered question 2 with ' + question2);


var question3 =prompt('Next question: ' + 'Do I have a cat?');
var result3=question3.toLowerCase();

if (result3 =='y' || result3=='yes'){
  alert ('Unfortunately, my cat of 15 years died last month');
  
} else if (result3 =='n' || result3=='no') {
  alert ('You are right. Unfortunately, he died last month');
  count++;
}
  else {
   alert('Not a valid answer. Counts as a wrong answer'); 
  }
console.log('The user answered question 3 with ' + question3);



var question4 =prompt('Next question: ' + 'Am I a good soccer player?');
var result4=question4.toLowerCase();

if (result4 =='y' || result4=='yes'){
  alert ('Sorry to disappoint');
  
} else if (result4 =='n' || result4=='no') {
  alert ('You are right! I just do not have it in me');
  count++;
}
  else {
   alert('Not a valid answer. Counts as a wrong answer');
  }
  console.log('The user answered question 4 with ' + question4);



var question5 =prompt('Next question: ' + 'Is chocolate my favorite ice-cream flavor?');
var result5=question5.toLowerCase();

if (result5 =='y' || result5=='yes'){
  alert ('I surprise myself, but no');
  
} else if (result5 =='n' || result5=='no') {
  alert ('You are right!' );
  count++;
}
  else {
   alert('Not a valid answer. Counts as a wrong answer');
   
  }
  console.log('The user answered question 5 with ' + question5);


  alert ('You answered ' + count + ' questions correctly')