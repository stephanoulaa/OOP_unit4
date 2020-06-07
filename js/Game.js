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
        
        // call all functions to add random phrase, make it active, then add to display
        this.createPhrases();
        const newPhrase = this.getRandomPhrase();
        this.activePhrase = newPhrase;
        newPhrase.addPhraseToDisplay();
    };
    
    
    handleInteraction() {
        //sup
    };
    
    
    // checkForWin(); method checks if all keys in phrase are guessed
    // if so, the status of the game is win. if not, status of game still false
    checkForWin() {
        // reference keyboard keys and where letters are being revealed
        const lettersInPhrase = document.querySelectorAll('.key');
        const lettersRevealed = document.getElementsByClassName('show');
        
        // if these lengths are equal, game has been won.
        if (lettersInPhrase.length === lettersRevealed.length) {
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
        heartTries[this.missed].setAttribute('src', 'images/lostHeart.png');
        this.missed += 1;
        
        // if missed gets to 5, call gameOver() method
        if (this.missed === 5) {
            this.gameOver();
        }
        
    }
    
    

    // gameOver(); method that displays message at end of game accordingly
    gameOver(gameWon) {
        overlay.style.display = '';
        if (gameWon) {
            gameOverMsg.textContent = 'Yay you won!! Congrats!';
            // replace overlay class with 'win', and restart active phrase
            this.overlay.classList.replace('start', 'win');
            this.activePhrase = null;
        } else {
            gameOverMsg.textContent = 'Aww you lost. Better luck next time!';
            // replace overlay class with 'lose', and restart active phrase
            this.overlay.classList.replace('start', 'lose');
            this.activePhrase = null;
        }
        
    }
    
    
    
    
    
    
    
    
    
    
    
}