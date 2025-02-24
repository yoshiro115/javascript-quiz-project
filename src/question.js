class Question {
  // YOUR CODE HERE:
  //
  // 1. constructor (text, choices, answer, difficulty)
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }
  // 2. shuffleChoices()
  // ['1', '2' ,'4']

  //['3',]
  shuffleChoices() {
    let shuffleChoices = [];
    let choicesLength = this.choices.length;
    for (let i = 0; i < choicesLength; i++) {
      let index = Math.round(Math.random() * (choicesLength - 1));
      while (shuffleChoices.includes(this.choices[index])) {
        index = Math.round(Math.random() * (choicesLength - 1));
      }
      shuffleChoices.push(this.choices[index]);
      //   this.choices.slice(index);
      console.log(this.choices, shuffleChoices);
    }
    this.choices = shuffleChoices;
  }
}
const testChoices = [
  "choice1",
  "choice2",
  "choice3",
  "choice4",
  "choice5",
  "choice6",
  "choice7",
];

// Instantiate a new Question object with the test choices array
const question = new Question("test", testChoices, "test");
// Call the shuffleChoices() method on the Question object
question.shuffleChoices();
