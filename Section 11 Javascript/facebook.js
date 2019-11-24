var database = [
	{
		username: "tim",
		password: "secret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	}
];

var newsfeed = [
	{
		username: "Kaitlyn",
		timeline: "Hello!!"
	},
	{
		username: "Tim",
		timeline: "Hi, back to you!!"
	},
	{
		username: "Stinky and Buggy",
		timeline: "meow"
	}
];


function isUserValid(username, password) {
	for(var i=0; i < database.length; i++){
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}


function signIn(username, password) {
	if(isUserValid(username, password)){
		console.log(newsfeed)
	} else {
		alert("Sorry, wrong username or password!");
	}
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);




