var win = 0;
var winCountElement = document.getElementById("win-cou");

// List of space words
this.spaceWords = ['space', 'comet', 'stars', 'asteroid', 'mars',
    'jupiter', 'earth', 'neptune', 'mercury', 'moon',
    'uranus', 'eclipse', 'universe', 'rocket', 'dust'];
var game = {
    guessed: [],
    left: 10,

    begin: function () {

        this.complete = false;
        this.word = spaceWords[Math.floor(Math.random() * spaceWords.length)];
        this.$right = document.getElementById('right');
        this.$wrong = document.getElementById('wrong');
        this.$remain = document.getElementById('remain');

        this.$right.innerHTML = '_'.repeat(this.word.length);

    },
    guess: function (correctLetter) {
        if (this.left > 0 && this.complete != true) {
            if (this.word.indexOf(correctLetter) > -1 || this.guessed.indexOf(correctLetter) > -1) {
                this.right(correctLetter);
            } else {
                this.wrong(correctLetter);
            }
        }
    },
    right: function (correctLetter) {
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i] == correctLetter) {
                var word = this.$right.innerHTML.split('');
                word[i] = correctLetter;
                this.$right.innerHTML = word.join('');
            }
        }

        // When user inputs correct letters; alert win!
        if (this.$right.innerHTML.indexOf('_') < 0) {
            alert('You win! ' + this.word);
            this.complete = true;
        }
    },
    wrong: function (correctLetter) {
        this.guessed.push(correctLetter);
        this.$wrong.innerHTML += ' ' + correctLetter;
        this.left--;
        this.$remain.innerHTML = this.left;

        // When user runs out of guesses; alert lost!
        if (this.left <= 1) {
            alert('You lose! ' + this.word);
            this.complete = true;
        }
    }


};

// Allow user to input letters for guesses
game.begin();
document.onkeyup = function (event) {
    var correctLetter = String.fromCharCode(event.keyCode).toLowerCase();
    game.guess(correctLetter);
};

function Spaceman() {
    tempString = wins + "";
    for (var i = tempString.length; i < 45; i++) {
        tempString += " ";
    }
    winCountElement.textContent = tempString;

}




