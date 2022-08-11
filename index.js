var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("What's your name? ");
console.log("Hello " + userName + " & Welcome to MARVEL FANDOM QUIZ");
console.log("-========================");

function play(question, answer) {
  // var userAnswer = readlineSync.question(question);
  if (question === answer) {
    console.log("You are right!");
    score = score + 1;
  } else {
    console.log("You are wrong!");
  }
  console.log("Your score is ", score);
}
var questions = [
  {
    question: "What is Iron-Man's Character name? ",
    option: [
      "a. Ken Stark",
      "b. Timmy Stark",
      "c. Tony Stark",
      "d. Michelle Stark",
    ],
    answer: "c",
  },
  {
    question: "Who is the main villian of Avengers end game? ",
    option: ["a. Kratos", "b. Thanos", "c. Ghor", "d. Michelle Stark"],
    answer: "b",
  },
  {
    question: "What is spiderman's character name? ",
    option: [
      "a. Peter Parker",
      "b. John Parker",
      "c. Ben Oslo",
      "d. Allan Parker",
    ],
    answer: "a",
  },
  {
    question: "Which super-hero orginates from Wakanda? ",
    option: ["a. Thor", "b. Captain America", "c. Black Panther", "d. Hawkeye"],
    answer: "c",
  },
  {
    question: "Who is the director of Avengers: End Game? ",
    option: [
      "a. Zack Snyder",
      "b. James Wan",
      "c. Christopher Nolan",
      "d. Russo Brothers",
    ],
    answer: "d",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  console.log(i + 1, ".", currentQuestion.question);

  for (var j = 0; j < currentQuestion.option.length; j++) {
    console.log(currentQuestion.option[j]);
  }
  var userAnswer = readlineSync.question("Enter the correct Option No. ");
  var result = userAnswer.toLocaleLowerCase();
  play(currentQuestion.answer, result);
  console.log("------------------");
}
console.log("Your final score: ", score);
