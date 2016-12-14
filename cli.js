var inquirer = require("inquirer");
var createCard = function() {
	inquirer.prompt([{
		type: "list",
		name: "choose",
		message: "What type of flashcard would you like to create?",
		choices: ["Basic Flashcard", "Cloze Flashcard"]
	}]).then(function(answers) {
		if (answers.choose === "Basic Flashcard") {
			console.log("Basic Flashcard");
			var BasicFlashcard = require("./BasicFlashcard.js");
			var basicCard = new BasicFlashcard();
			basicCard.createBasicFlashcard();
		} else if (answers.choose === "Cloze Flashcard") {
			console.log("Cloze Flashcard");
			var ClozeFlashcard = require("./ClozeFlashcard.js");
			var clozeCard = new ClozeFlashcard();
			clozeCard.createClozelashcard();
		}
	});
};
createCard();