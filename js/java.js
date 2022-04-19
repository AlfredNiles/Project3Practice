$(document).ready( function() {

  // This should be the way the keyboard works with the buttons



  // This variable calls the note audio element in the HTML.
  var ab1Note = document.getElementById('ab1Audio');
  var bb1Note = document.getElementById('db1Audio');
  var c1Note = document.getElementById('db1Audio');
  var eb1Note = document.getElementById('eb1Audio');
  var f1Note = document.getElementById('f1Audio');
  var g1Note = document.getElementById('g1Audio');
  var ab2Note = document.getElementById('ab2Audio');
  var bb2Note = document.getElementById('bb2Audio');
  var c2Note = document.getElementById('c2Audio');
  var db2Note = document.getElementById('db2Audio');
  var eb2Note = document.getElementById('eb2Audio');
  var f2Note = document.getElementById('f2Audio');
  var g2Note = document.getElementById('g2Audio');
  var ab3Note = document.getElementById('ab3Audio');

  // https://stackoverflow.com/questions/37735208/create-audio-element-dynamically-in-javascript
  // Using appendChild section, but without some lines
  $('#ab1').mousedown(function(){
    var ab1Note      = document.createElement('audio');
    ab1Note.src      = 'audiomp3/ab1.mp3';
    ab1Note.type     = 'audio/mpeg';
    ab1Note.play();
  });
  // This makes ab1 play on A press
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "a") {
        var ab1Note      = document.createElement('audio');
        ab1Note.src      = 'audiomp3/ab1.mp3';
        ab1Note.type     = 'audio/mpeg';
        ab1Note.play();
      }
  });

  $('#bb1').mousedown(function() {
    var bb1Note      = document.createElement('audio');
    bb1Note.src      = 'audiomp3/bb1.mp3';
    bb1Note.type     = 'audio/mpeg';
    bb1Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "w") {
        var bb1Note      = document.createElement('audio');
        bb1Note.src      = 'audiomp3/bb1.mp3';
        bb1Note.type     = 'audio/mpeg';
        bb1Note.play();
      }
  });

  $('#c1').mousedown(function() {
    var c1Note      = document.createElement('audio');
    c1Note.src      = 'audiomp3/c1.mp3';
    c1Note.type     = 'audio/mpeg';
    c1Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "s") {
        var c1Note      = document.createElement('audio');
        c1Note.src      = 'audiomp3/c1.mp3';
        c1Note.type     = 'audio/mpeg';
        c1Note.play();
      }
  });

  $('#db1').mousedown(function() {
    var db1Note      = document.createElement('audio');
    db1Note.src      = 'audiomp3/db1.mp3';
    db1Note.type     = 'audio/mpeg';
    db1Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "e") {
        var db1Note      = document.createElement('audio');
        db1Note.src      = 'audiomp3/db1.mp3';
        db1Note.type     = 'audio/mpeg';
        db1Note.play();
      }
  });

  $('#eb1').mousedown(function() {
    var eb1Note      = document.createElement('audio');
    eb1Note.src      = 'audiomp3/eb1.mp3';
    eb1Note.type     = 'audio/mpeg';
    eb1Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "d") {
        var eb1Note      = document.createElement('audio');
        eb1Note.src      = 'audiomp3/eb1.mp3';
        eb1Note.type     = 'audio/mpeg';
        eb1Note.play();
      }
  });

  $('#f1').mousedown(function() {
    var f1Note      = document.createElement('audio');
    f1Note.src      = 'audiomp3/f1.mp3';
    f1Note.type     = 'audio/mpeg';
    f1Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "r") {
        var f1Note      = document.createElement('audio');
        f1Note.src      = 'audiomp3/f1.mp3';
        f1Note.type     = 'audio/mpeg';
        f1Note.play();
      }
  });

  $('#g1').mousedown(function() {
    var g1Note      = document.createElement('audio');
    g1Note.src      = 'audiomp3/g1.mp3';
    g1Note.type     = 'audio/mpeg';
    g1Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "f") {
        var g1Note      = document.createElement('audio');
        g1Note.src      = 'audiomp3/g1.mp3';
        g1Note.type     = 'audio/mpeg';
        g1Note.play();
      }
  });

  $('#ab2').mousedown(function(){
    var ab2Note      = document.createElement('audio');
    ab2Note.src      = 'audiomp3/ab2redo.mp3';
    ab2Note.type     = 'audio/mpeg';
    ab2Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "t") {
        var ab2Note      = document.createElement('audio');
        ab2Note.src      = 'audiomp3/ab2redo.mp3';
        ab2Note.type     = 'audio/mpeg';
        ab2Note.play();
      }
  });

  $('#bb2').mousedown(function() {
    var bb2Note      = document.createElement('audio');
    bb2Note.src      = 'audiomp3/bb2.mp3';
    bb2Note.type     = 'audio/mpeg';
    bb2Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "g") {
        var bb2Note      = document.createElement('audio');
        bb2Note.src      = 'audiomp3/bb2.mp3';
        bb2Note.type     = 'audio/mpeg';
        bb2Note.play();
      }
  });

  $('#c2').mousedown(function() {
    var c2Note      = document.createElement('audio');
    c2Note.src      = 'audiomp3/c2.mp3';
    c2Note.type     = 'audio/mpeg';
    c2Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "y") {
        var c2Note      = document.createElement('audio');
        c2Note.src      = 'audiomp3/c2.mp3';
        c2Note.type     = 'audio/mpeg';
        c2Note.play();
      }
  });

  $('#db2').mousedown(function() {
    var db2Note      = document.createElement('audio');
    db2Note.src      = 'audiomp3/db2.mp3';
    db2Note.type     = 'audio/mpeg';
    db2Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "h") {
        var db2Note      = document.createElement('audio');
        db2Note.src      = 'audiomp3/db2.mp3';
        db2Note.type     = 'audio/mpeg';
        db2Note.play();
      }
  });

  $('#eb2').mousedown(function() {
    var eb2Note      = document.createElement('audio');
    eb2Note.src      = 'audiomp3/eb2.mp3';
    eb2Note.type     = 'audio/mpeg';
    eb2Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "u") {
        var eb2Note      = document.createElement('audio');
        eb2Note.src      = 'audiomp3/eb2.mp3';
        eb2Note.type     = 'audio/mpeg';
        eb2Note.play();
      }
  });

  $('#f2').mousedown(function() {
    var f2Note      = document.createElement('audio');
    f2Note.src      = 'audiomp3/f2.mp3';
    f2Note.type     = 'audio/mpeg';
    f2Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "j") {
        var f2Note      = document.createElement('audio');
        f2Note.src      = 'audiomp3/f2.mp3';
        f2Note.type     = 'audio/mpeg';
        f2Note.play();
      }
  });

  $('#g2').mousedown(function() {
    var g2Note      = document.createElement('audio');
    g2Note.src      = 'audiomp3/g2.mp3';
    g2Note.type     = 'audio/mpeg';
    g2Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "i") {
        var g2Note      = document.createElement('audio');
        g2Note.src      = 'audiomp3/g2.mp3';
        g2Note.type     = 'audio/mpeg';
        g2Note.play();
      }
  });

  $('#ab3').mousedown(function() {
    var ab3Note      = document.createElement('audio');
    ab3Note.src      = 'audiomp3/ab3.mp3';
    ab3Note.type     = 'audio/mpeg';
    ab3Note.play();
  });
  document.addEventListener("keypress", function onPress(event) {
      if (event.key === "k") {
        var ab3Note      = document.createElement('audio');
        ab3Note.src      = 'audiomp3/ab3.mp3';
        ab3Note.type     = 'audio/mpeg';
        ab3Note.play();
      }
  });


});
