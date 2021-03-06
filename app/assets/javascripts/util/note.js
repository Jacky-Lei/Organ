(function(root) {
  'use strict';

  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var ctx = new AudioContext();

  var createOscillator = function (freq) {
    var osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.start(ctx.currentTime);
    return osc;
  };

  var createGainNode = function () {
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);
    return gainNode;
  };

  var Note = root.Note = function(freq) {
    this.oscillatorNode = createOscillator(freq);
    this.gainNode = createGainNode();

    this.oscillatorNode.connect(this.gainNode);
  }

  Note.prototype.start = function() {
    this.gainNode.gain.value = 0.3;
  };

  Note.prototype.stop = function() {
    this.gainNode.gain.value = 0;
  };

}(this));

// var n = new Note(3);
// n.start(); => n.gainNode = 0.3;
