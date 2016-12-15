var inquirer = require("inquirer");
var createCard = function() {
	inquirer.prompt([{
		type: "list",
		name: "choose",
		message: "What would you like to do?",
		choices: ["Create Basic Flashcard", "Create Cloze Flashcard", "Display Cloze-Deleted Answers", "All done now"]
	}]).then(function(answers) {
		if (answers.choose === "Create Basic Flashcard") {
			// To create basic flashcard, run the createBasicFlashcard function in the BasicFlashcard.js file
			var BasicFlashcard = require("./BasicFlashcard.js");
			var basicCard = new BasicFlashcard();
			basicCard.createBasicFlashcard();
		} else if (answers.choose === "Create Cloze Flashcard") {
			// To create clozed flashcard, run the createClozelashcard function in the ClozeFlashcard.js file
			var ClozeFlashcard = require("./ClozeFlashcard.js");
			var clozeCard = new ClozeFlashcard();
			clozeCard.createClozelashcard();
		} else if (answers.choose === "Display Cloze-Deleted Answers") {
			// To display cloze-deleted answers, run the returnClozeAnswer function in the ClozeFlashcard.js file
			var ClozeFlashcard = require("./ClozeFlashcard.js");
			var clozeCard = new ClozeFlashcard();
			clozeCard.returnClozeAnswer();
		} else if (answers.choose === "All done now") {
			//exits the application
			return console.log("Thanks for playing.");
		}
	});
};
createCard();
module.exports = createCard;