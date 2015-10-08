(function(root) {
  'use strict';

  //var key = "";
  var keyTone = {
    65: 'C4',
    83: 'D4',
    68: 'E4',
    70: 'F4',
    71: 'G4',
    72: 'A4',
    74: 'B4',
    75: 'C5',
    87: 'Cs',
    69: 'Ds',
    82: 'Fs',
    84: 'Gs',
    89: 'As'
  };

  root.addEventListener("keydown", function(e){
    // console.log(e.keyCode);
    KeyActions.keyPressed(keyTone[e.keyCode]);
  });

  root.addEventListener("keyup", function(e){
    KeyActions.keyReleased(keyTone[e.keyCode]);
  })

}(this));
