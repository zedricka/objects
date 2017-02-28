/*
* Function which correctly prints the parameter data type
*/
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/*
* Demonstrates knowledge of creating an array by storing the function
* parameters as an array value
*
* Parameters 	car1 (string), car2 (string)
* Return 		string value "Toyota" from array cars
*/
function pastLessons(car1, car2){
	//Print the parameters being passed through

	//Create an array named "cars" and set it's values to the passed parameters

	//Return the array values as a concatenated string
	return 
}
console.log("\n***Past Lessons***\n");
console.log(pastLessons("Toyota", "Jeep Wrangler"));
console.log("\n***End of Past Lessons***\n");


/*
* Demonstrates knowledge of 2-D arrays by accessing the values inside a
* nested array
* 
* Return 	The values in the nested array as a concatenated string
*/

function twoDArrays(nestedArray){
	//Print the parameter

	//Print the first nested array

	//Print the second item in the nested array

	//Can you print the third item in the *bonus* array?

	//Create a variable called "nestedArrayString" that stores the values in the nested array as a concatenated string and use this variable as the return value of this function

	//Create a variable called "nestedArrayAddedUp" that adds up the values in the nested array and print the contents of this variable

	return;
}

console.log("2-D Arrays\n");
console.log(twoDArrays([0, 1, 2, [3, 4, 5]]));

/*Bonus Array
console.log(twoDArrays([0, 1, 2, [3, 4, 5, [6, 7, 8]]]));
*/

console.log("\n***End***\n");

/* 
* Create an object named "myCar"
* and set it's key:value pairs given the keys: type, model, and color
*/
var myCar = {
	type: "Toyota", 
	model: "Corolla", 
	color: "silver"
};

/*
* Uses a for loop to iterate through the key:value pairs in an object
* passed as a parameter and changes the a value upon found key
* Parameters 	A list of a cars properties as one object (object)
* Return 		The objects values in a concatenated string
*/
function objectsAndProperties(car){
	var keys = "";
	var properties = "";

	//Print the parameter being passed through

	//Print the parameters length

	//Iterate through the keys in the array and change their value

	//Return the paramter and it's key:value pairs as a string concatenation
	return;
}

console.log("Objects and their Properties\n");

console.log(objectsAndProperties(myCar));

console.log("\n***End***\n");

/*
* Demonstrates the object methods: keys(), values(), entries()
* 
* Parameters 	car (object)
* Return 		The objects values as a concatenated string
*/
function objectMethods(car){
	//Print the parameter being passed through

	//Print the data type of the passed parameter

	//Print the objects keys and set this value to a variable named "paramKeys";

	//Print the data type of "paramKeys"

	//Use the method "toType" to print the "correct" data type of "paramKeys"

	/*
	* Print the objects values and set this value to a variable named "paramValues"
	* Note: This is an experimental technology and is not 
	* compatible in all browsers
	*/

	/*
	* Print the objects values and set this value to a variable named "paramValues"
	* Note: This is an experimental technology and is not 
	* compatible in all browsers
	*/

	return;
}


console.log("Object Methods\n");

console.log(objectMethods(myCar));

console.log("\n***End***\n");



