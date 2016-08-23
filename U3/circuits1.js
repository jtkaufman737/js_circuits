var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];

var findContact = function () {
  console.log(contacts[2]);
};

var updateLastContact = function () {
  contacts[contacts.length - 1] = "Patty Davis";
};

var addContact = function() {
  contacts.push("Bill Jones");
};


findContact();
updateLastContact();
addContact();

console.log(contacts);ß
