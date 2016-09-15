var Song = function(title, artist, lyrics) {
  this.title = title;
  this.artist = artist;
  this.lyrics = lyrics;
  this.playSong = function() {
    console.log("Now playing: " + this.title + " by " + this.artist);
    console.log(this.lyrics);
  };
};

var goodVibrations = new Song("Good Vibrations", "The Beach Boys", "I'm pickin' up good vibrations");
var hereComesTheSun = new Song("Here Comes The Sun", "The Beatles", "Here comes the sun and I say it's all right");
var daydreamBeliever = new Song("Daydream Believer", "The Monkees", "Cheer up, Sleepy Jean. Oh, what can it mean.");
var houndDog = new Song("Hound Dog", "Elvis Presley", "You ain't nothin' but a hound dog cryin' all the time");
var dontBeCruel = new Song("Don't Be Cruel", "Elvis Presley", "I don't want no other love, Baby it's just you I'm thinking of.");

var songs = [goodVibrations, hereComesTheSun, daydreamBeliever, houndDog, dontBeCruel];

var userName = "";

var startJukebox = function() {
  userName = prompt("Welcome to the Tune Machine. Looks like you're ready to play some tunes! What's your name?");
  makeSelection();
};

var makeSelection = function() {
  var userChoice = prompt("Hi " + userName + "! Would you like to (A)dd a new song, (S)earch for an existing song, (P)lay all songs in the queue, or (Q)uit?");

  userChoice = userChoice.toLowerCase();

  if (userChoice === "a") {
    addSong();
  } else if (userChoice === "s") {
    searchForSong();
  } else if (userChoice === "p") {
    playSongs();
  } else if (userChoice === "q") {
    console.log("Quitting! Goodbye!");
  } else {
    console.log("Invalid selection! Goodbye!");
  }
};

var playQueue = [];

var addSong = function() {
  var title = prompt("What is the title of the song you'd like to add?");
  var artist = prompt("Great choice, " + userName + "! Please enter the artist.");
  var lyrics = prompt("Please enter a few lyrics.");
  var song = new Song(title, artist, lyrics);

  songs.push(song);
  playQueue.push(song);

  console.log("Great choice, " + userName + "! " + song.title + " has been added.");
};

var searchForSong = function() {
};

var playSongs = function() {
};

startJukebox();
