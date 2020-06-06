/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        // missed starts as 0 b/c no guesses have been made yet
        this.missed = 0;
        // phrases is list of phrases for the game
        this.phrases = ['I Love You', 'You Rock', 'Be Yourself', 'Everything in Moderation', 'Normal is Boring'];
        // activePhrase represents Phrase obj currently in play
        this.activePhrase = null;
    }
}