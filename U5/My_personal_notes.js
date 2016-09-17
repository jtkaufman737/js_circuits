// First up, let's create a new list
// item and store it in a variable.
var newListItem = document.createElement('li');

// Alright, now let's update the
//text content of that list item.
newListItem.textContent = 'Feed the cat';

// And finally, let's add that list
//item as a child of the ul.
document.getElementsByTagName('ul')[0].appendChild(newListItem);
document.getElementsByTagName('ul')[0].appendChild(newListItem);
document.getElementById('important').className = 'highlight';
document.getElementsByTagName('li')[2].removeAttribute('id');
