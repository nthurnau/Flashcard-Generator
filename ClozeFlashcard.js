var inquirer = require("inquirer");
var fs = require("fs");

function ClozeFlashcard(front, back) {
    this.front = front;
    this.back = back;
};

var createClozelashcard = function() {
    inquirer.prompt([
        {
            name: "front",
            message: "What is the flashcard question?"
        }, {
            name: "back",
            message: "What is the answer?"
        }
    ]).then(function(answers) {
        var flashcard = new ClozeFlashcard(answers.front, answers.back);
        fs.appendFile("flashcards.txt", "Flashcard question is: "+answers.front+"\nFlashcard answer is: "+answers.back+"\n#*#*#*#*#*", "utf8");
    });

};

createBasicFlashcard();