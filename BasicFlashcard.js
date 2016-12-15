var inquirer = require("inquirer");
var fs = require("fs");
var BasicFlashcard = function(front, back) {
	this.front = front;
	this.back = back;
	this.createBasicFlashcard = function() {
		inquirer.prompt([{
			name: "front",
			message: "What is the flashcard question?"
		}, {
			name: "back",
			message: "What is the answer?"
		}]).then(function(answers) {
			//Creating a new BasicFlashcard contructor with the user input and storing it in flashCard as an option to access on frontend
			var flashCard = new BasicFlashcard(answers.front, answers.back);
			//Appending user input in basicCards.txt as an option to access on frontend
			fs.appendFile("basicCards.txt", "Flashcard question is: " + answers.front + "\nFlashcard answer is: " + answers.back + "\n#*#*#*#*#*\n", "utf8", function(err) {
				if (err) {
					return console.log(err);
				}
			});
			//To display the initial cli prompt, run the createCard function in the cli.js file
			var cli = require("./cli.js");
			var nextTurn = new cli();
			nextTurn.createCard;
		});
	};
};
module.exports = BasicFlashcard;