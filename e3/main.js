let fruits = [
	"apple", 
	"orange", 
	"pear", 
	"grape", 
	"strawberry", 
	"kiwi"
	];


let length = fruits.length;

function constructText(input) {
	console.log("This is now inside a function");
	let count = input.length;
	return "The word " + input + " has " + count + " characters.";

}

for (i = 0; i < length; i++) {
	let count = fruits[i].length;
	console.log(constructText(fruits[i]));

}