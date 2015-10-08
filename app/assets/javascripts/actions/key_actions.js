var KeyActions = {
  keyPressed: function(note){
    // console.log(note);
    var actionObj = {actionType: 'start', noteName: note};
    
    AppDispatcher.dispatch( actionObj );
  },

  keyReleased: function(note) {
    //console.log(note);
    AppDispatcher.dispatch({
      actionType: 'stop',
      noteName: note
    });
  }
}
