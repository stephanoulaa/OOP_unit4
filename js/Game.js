/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        // missed starts as 0 b/c no guesses have been made yet
        this.missed = 0;
        // phrases is list of phrases for the game, returns createPhrases() method
        this.phrases = this.createPhrases();
        // activePhrase represents Phrase obj currently in play
        this.activePhrase = null;
    }
    
    // createPhrases method that creates 5 new Phrase objects held in array
    createPhrases() {
      const phrases = [
        new Phrase('I Love You'),
        new Phrase('You Rock'),
        new Phrase('Be Yourself'),
        new Phrase('Everything in Moderation'),
        new Phrase('Normal is Boring'),
      ];
      return phrases;
    };
    
    // method to grab a random phrase from phrases array
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    };
    
    startGame() {
        // hide overlay div to start
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        
        // call resetGame() here so it resets each time
        this.resetGame();
        
        // call all functions to add random phrase, make it active, then add to display
        this.createPhrases();
        const newPhrase = this.getRandomPhrase();
        this.activePhrase = newPhrase;
        newPhrase.addPhraseToDisplay();
    };
    
    
    // to handle all user interactions (clicks, etc)
    handleInteraction(keys) {
        // locate the letter on each key
        let userGuess = keys.innerHTML;
        
        // if the user clicks the a letter that's in the active phrase...
        // disable the key, assign it to 'chosen' css, and put correct letter in phrase
        if (this.activePhrase.checkLetter(userGuess)) {
            keys.disabled = true;
            keys.classList.add('chosen');
            this.activePhrase.showMatchedLetter(userGuess);
            // if the user continues to guess correctly, eventually they will win & game is over
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        // if not, 'wrong' css class is assigned, if key is NOT disabled already, make it so, AND remove a heart life
        } else {
            keys.classList.add('wrong');
            if(keys.disabled !== true) {
                keys.disabled = true;
                this.removeLife();
            };
        };
        
    };
    
    
    // checkForWin(); method checks if all keys in phrase are guessed
    // if so, the status of the game is win. if not, status of game still false
    checkForWin() {
        // locate and hidden spaces
        const hiddenChars = document.getElementsByClassName('hide');
        
        // if there are NO hidden spaces left, then you have guessed the phrase and won the game
        if (hiddenChars.length === 0) {
            return true;
        } else {
            return false;
        }
        
        
    };
    
    
    // removeLife(); removes heart each time user misses, and ends game when user misses 5 times
    removeLife() {
        // get heart images, use missed property on it
        const heartTries = document.querySelectorAll('img');
        const gameOverMsg = document.getElementById('game-over-message');
        
        // assign hearts to different src path when user guesses incorrectly
        heartTries[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
        
        // if missed gets to 5, call gameOver() method
        if (this.missed >= 5) {
            this.gameOver(false);
        }
        
        
    }
    
    

    // gameOver(); method that displays message at end of game accordingly
    gameOver(gameWon) {
        // define overlay and hide it, define error message
        const overlay = document.querySelector('#overlay');
        overlay.style.display = '';
        const gameOverMsg = document.getElementById('game-over-message');
        
        if (gameWon) {
            gameOverMsg.textContent = 'You won! Congratulations!';
            overlay.classList.remove('start');
            overlay.classList.remove('lose');
            overlay.classList.add('win');
            //this.activePhrase = null;
        } else {
            gameOverMsg.textContent = 'Game Over. Better luck next time!';
            overlay.classList.remove('start');
            overlay.classList.remove('win');
            overlay.classList.add('lose');
            //this.activePhrase = null;
        }   
    }
    
    
    resetGame() {
        // empty phrase ul element of all li elements
        const htmlPhrase = document.getElementById('phrase').firstElementChild;
        htmlPhrase.innerHTML = '';
        
        
//        this.createPhrases()
//        this.missed = 5;
        
        
        // put keys in array to access all at the same time
        const allKeys = [...keys];
        allKeys.forEach(key => {
            // update their css classes back to just 'key', and remove 'disabled' attribute
            key.className = 'key';
            key.removeAttribute('disabled');
        })
        
        // reset all heart images back to liveHeart.png
        const heartTries = document.querySelectorAll('img');
        heartTries.forEach(heart => heart.src = 'images/liveHeart.png');
        
        
        this.missed = 0;
    }
    
    
    
    
    
    
    
    
    
    
}