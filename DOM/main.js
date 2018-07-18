var myButton = document.getElementById('myButton');

myButton.onclick = myFunction;

function myFunction() {
  var myHeading = document.getElementById('myHeading');
  var newHeading = document.getElementById('myText').value;

  myHeading.innerHTML = newHeading;

  if(newHeading === 'You are awesome!') {
    alert('Ah, thanks! You are awesome too!');
  }
  
};
