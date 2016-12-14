var inquirer = require("inquirer");
var fs = require("fs");
var ClozeFlashcard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.createClozelashcard = function() {
		inquirer.prompt([{
			name: "text",
			message: "What is the partial flashcard text?"
		}, {
			name: "cloze",
			message: "What is the cloze text?"
		}]).then(function(answers) {
			var flashcard = new ClozeFlashcard(answers.text, answers.cloze);
			fs.appendFile("clozeCards.txt", "Partial flashcard text is: " + answers.text + "\nCloze text is: " + answers.cloze + "\n#*#*#*#*#*\n", "utf8", function(err) {
				if (err) {
					return console.log(err);
				}
			});
		});
	};
    this.returnClozeAnswer = function () {
        fs.readFile('clozeCards.txt', "utf8", function read(err, data) {
            if (err) {
                console.log(err);
            }
            console.log(data); 
});
    };
};
module.exports = ClozeFlashcard;