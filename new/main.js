let apples = 2;
let oranges = 4;
let message = "";

if (apples > oranges) {
	message = "There are more apples than oranges."
}

else {
	message = "There are more oranges than apples."
}

//output ti html elem
document.getElementById('text').innerText = message;


