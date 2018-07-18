
var database = [
	{
		username: "jeff",
		password: "hello"
	},
	{
		username: "sally",
		password: "123",
	},
	{
		username:"michelle",
		password: "happy"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt('What is your username?');
var passwordPrompt = prompt('What is your password?');

//determine if submitted username and password are valid credentials
function isUserValid(username, password) {
	for(var i=0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

//sign in and display newsfeed if credentials checkout
function signIn(username, password) {
  if(isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert('Sorry, wrong username and/or password');
  }
}

signIn(userNamePrompt, passwordPrompt);