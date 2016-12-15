var inquirer = require("inquirer");
var fs = require("fs");
var ClozeFlashcard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.createClozelashcard = function() {
		inquirer.prompt([{
			name: "text",
			message: "What is the flashcard text? (type '...' for the cloze-deleted text)"
		}, {
			name: "cloze",
			message: "What is the cloze-deleted text?"
		}]).then(function(answers) {
			//Creating a new ClozeFlashcard contructor with the user input and storing it in flashCard as an option to access on frontend
			var flashCard = new ClozeFlashcard(answers.text, answers.cloze);
			// Appending full flashcard text in clozeCardsFullText.txt
			fs.appendFile("clozeCardsFullText.txt", "Cloze-Deleted flashcard full text is: " + answers.text + "\n#*#*#*#*#*\n", "utf8", function(err) {
				if (err) {
					return console.log(err);
				}
			});
			//Appending cloze-deleted text in clozeCardsDeletedText.txt
			fs.appendFile("clozeCardsDeletedText.txt", "Cloze-Deleted text is: " + answers.cloze + "\n#*#*#*#*#*\n", "utf8", function(err) {
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
	this.returnClozeAnswer = function() {
		//To return the cloze-deleted text, read the content of clozeCardsDeletedText.txt and console log the result
		fs.readFile('clozeCardsDeletedText.txt', "utf8", function read(err, data) {
			if (err) {
				console.log(err);
			}
			console.log(data);
		});
		//To display the initial cli prompt, wait 3 seconds to allow for the cloze-deleted text to display and then run the createCard function in the cli.js file
		setTimeout(function() {
			var cli = require("./cli.js");
			var nextTurn = new cli();
			nextTurn.createCard;
		}, 3000);
	};
};
module.exports = ClozeFlashcard;