var enterButton = document.getElementById('enterButton');
var enterText = document.getElementById('enterItem');
var errorArea = document.getElementById('errorMessage');

//add event listeners for buttons
enterButton.addEventListener('click', addItem);

//bind the return/enter key to the "Add The List Item Button'"
enterText.addEventListener('keypress', function(event) {
  var keyName = event.key;
  if (keyName === 'Enter'){
    addItem();
  }
});

//Add an item to the list
function addItem() {
  // Get value of new list item text box and shopping list, then create new li and assign it to variable.
  var newListItemText = enterText.value

  errorArea.textContent = '';
  //add new list item
  if(newListItemText) {
    var newListItem = document.createElement('li');
    var shoppingListUL = document.getElementById('shoppingList');
    var newDeleteButton = document.createElement('button')

    //configure new list item and button then add them to the DOM
    newDeleteButton.textContent = 'x';
    newDeleteButton.classList.add('deleteButton')
    newListItem.textContent = newListItemText;
    newListItem.appendChild(newDeleteButton);
    shoppingListUL.appendChild(newListItem);

    //clear text box after adding new item
    enterText.value = "";
  } else {
    listError('Please enter a valid list item.');
  }
};

//handle click events
var listItems = document.getElementById('shoppingList');

listItems.addEventListener('click', function(event) {
  if(event.target.tagName !== 'BUTTON') {
    //toggle the item as "done"
    event.target.classList.toggle('done');
  } else {
    //remove the item
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  }  
})

//display error message for list
function listError(errorMessage) {
  errorArea.classList.add('errorMessage');
  errorArea.textContent = errorMessage;
};




