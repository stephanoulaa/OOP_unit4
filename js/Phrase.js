/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        // phrase set to parameter phrase
        this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay() {
        // grabs the <ul> (first element in phrase div)
        const htmlPhrase = document.getElementById('phrase').firstElementChild;
        const letterRegex = /[A-Za-z]/;
        const spaceRegex = /\s/;
        
        for (let i=0; i<this.phrase.length; i++) {
            if (this.phrase[i].match(letterRegex)) {
                htmlPhrase.innerHTML += "<li class='hide letter " + this.phrase[i] + "'>" + this.phrase[i] + "</li>";
            } else if (this.phrase[i].match(spaceRegex)) {
                htmlPhrase.innerHTML += "<li class='space'> </li>";
            }     
        }
                  
    };
    
    
    // checkLetter();
    checkLetter(letter) {
        // if the letter user entered is included in phrase, return it
        return this.phrase.includes(letter);
    }
    
    
    // showMatchedLetter();
    showMatchedLetter(letter) {
        // if user enters a letter that matches phrase, show it on the screen
        const keys = document.getElementsByClassName(letter);
        for (let i=0; i<keys.length; i+=1) {
            let keyMatch = keys[i];
            keyMatch.classList.remove('hide');
            keyMatch.classList.add('show');
        }
    }
    
    
    
    
    
}