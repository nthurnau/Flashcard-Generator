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
			var flashcard = new BasicFlashcard(answers.front, answers.back);
			fs.appendFile("basicCards.txt", "Flashcard question is: " + answers.front + "\nFlashcard answer is: " + answers.back + "\n#*#*#*#*#*\n", "utf8", function(err) {
				if (err) {
					return console.log(err);
				}
			});
		});
	};
};
module.exports = BasicFlashcard;