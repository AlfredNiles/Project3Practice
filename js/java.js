$(document).ready( function() {

  // This controls the button for the c note.

  // This variable calls the cNote audio element in the HTML.
  var ab1Note = document.getElementById('ab1Audio');
  var bb1Note = document.getElementById('bb1Audio');
  var c1Note = document.getElementById('c1Audio');
  var db1Note = document.getElementById('db1Audio');
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

  // This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
  $('#ab1').mousedown(function(){

    // This is a property that scrubs the audio file back to its start.
    ab1Note.currentTime = 0;

    // This plays the audio file.
    ab1Note.play();
  });
  $('#bb1').mousedown(function() {
    bb1Note.currentTime = 0;
    bb1Note.play();
  });
  $('#c1').mousedown(function() {
    c1Note.currentTime = 0;
    c1Note.play();
  });
  $('#db1').mousedown(function() {
    db1Note.currentTime = 0;
    db1Note.play();
  });
  $('#eb1').mousedown(function() {
    eb1Note.currentTime = 0;
    eb1Note.play();
  });
  $('#f1').mousedown(function() {
    f1Note.currentTime = 0;
    f1Note.play();
  });
  $('#g1').mousedown(function() {
    g1Note.currentTime = 0;
    g1Note.play();
  });
  $('#ab2').mousedown(function(){
    ab2Note.currentTime = 0;
    ab2Note.play();
  });
  $('#bb2').mousedown(function() {
    bb2Note.currentTime = 0;
    bb2Note.play();
  });
  $('#c2').mousedown(function() {
    c2Note.currentTime = 0;
    c2Note.play();
  });
  $('#db2').mousedown(function() {
    db2Note.currentTime = 0;
    db2Note.play();
  });
  $('#eb2').mousedown(function() {
    eb2Note.currentTime = 0;
    eb2Note.play();
  });
  $('#f2').mousedown(function() {
    f2Note.currentTime = 0;
    f2Note.play();
  });
  $('#g2').mousedown(function() {
    g2Note.currentTime = 0;
    g2Note.play();
  });
  $('#ab3').mousedown(function() {
    ab3Note.currentTime = 0;
    ab3Note.play();
  });



});
