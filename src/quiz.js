class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;

    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }
  // 4. shuffleQuestions()
  shuffleQuestions() {
    // this.questions.forEach((question) => {
    //   //! question is instance of Question (class) so i can use the method of this class. here i use the metho shuffleChoices inside this object.
    //   question.shuffleChoices();
    // });
    let shuffleQuestions = [];
    for (let i = 0; i < this.questions.length; i++) {
      let index = Math.round(Math.random() * (this.questions.length - 1));

      while (shuffleQuestions.includes(this.questions[index])) {
        index = Math.round(Math.random() * (this.questions.length - 1));
      }

      shuffleQuestions.push(this.questions[index]);
      //   console.log(this.choices, shuffleChoices);
    }
    this.questions = shuffleQuestions;
  }

  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    //!this.question = array of all questions
    //! this.currenQuestionIndex = the index of the current question
    //! this.questions[this.currentQuestionIndex] = the current Object question
    //! because this.questions[this.currentQuestionIndex] its a object i can select all this property with .property  : here .answer
    //! this.questions[this.currentQuestionIndex].answer = the current correct answer
    if (answer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswers++;
    }
  }

  // 6. hasEnded()
  hasEnded() {
    //! this return all the time false except when currentQuestionIndex is equal to the questions array length
    return this.currentQuestionIndex === this.questions.length;
  }
}
