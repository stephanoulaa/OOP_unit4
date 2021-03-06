/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

const button = document.getElementById('btn__reset');

button.addEventListener('click', (e) => {
    if(e.target.tagName == 'BUTTON') {
        // call startGame() method on new Game object called game
        game.startGame();
    }
})


const keys = document.getElementsByClassName('key');

for (let i=0; i<keys.length; i+=1) {
    keys[i].addEventListener('click', (e) => {
        game.handleInteraction(e.target); 
    });
}


// exceeds section to handle if user clicks on keyboard buttons (keydown)
for (let i = 0; i < keys.length; i++) {
  addEventListener('keydown', (e) => {
    // if the event targets a key that matches the inner html of a key letter...handleInteraction()
    if (e.key === keys[i].innerHTML)
      game.handleInteraction(keys[i]);
  });
}


