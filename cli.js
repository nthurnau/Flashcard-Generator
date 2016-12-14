var inquirer = require("inquirer");
var createCard = function() {
	inquirer.prompt([{
		type: "list",
		name: "choose",
		message: "What would you like to do?",
		choices: ["Create Basic Flashcard", "Create Cloze Flashcard", "Return Cloze-Deleted Answers"]
	}]).then(function(answers) {
		if (answers.choose === "Create Basic Flashcard") {
			console.log("Create Basic Flashcard");
			var BasicFlashcard = require("./BasicFlashcard.js");
			var basicCard = new BasicFlashcard();
			basicCard.createBasicFlashcard();
		} else if (answers.choose === "Create Cloze Flashcard") {
			console.log("Create Cloze Flashcard");
			var ClozeFlashcard = require("./ClozeFlashcard.js");
			var clozeCard = new ClozeFlashcard();
			clozeCard.createClozelashcard();
		} else if (answers.choose === "Return Cloze-Deleted Answers") {
			console.log("Return Cloze-Deleted Answers");
			var ClozeFlashcard = require("./ClozeFlashcard.js");
			var clozeCard = new ClozeFlashcard();
			clozeCard.returnClozeAnswer();
		}
	});
};
createCard();