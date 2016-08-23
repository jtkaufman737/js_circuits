var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];

var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];

var findContact = function (index) {
    return contacts[index];
};

var updateLastContact = function (newName) {
    contacts[contacts.length - 1] = newName;
};

var addContact = function(name) {
  	contacts.push(name);
    return contacts;
};

console.log(findContact(2));
updateLastContact("Patty Davis");
addContact("Mark Jones");
console.log(contacts);
