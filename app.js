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
	console.log(car1);
	console.log(car2);

	//Create an array named "cars" and set it's values to the passed parameters
	var cars = [car1, car2];

	//Return the array values as a concatenated string
	return cars[0] + " " + cars[1];
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
	console.log(nestedArray);

	//Print the first nested array
	console.log(nestedArray[3]);

	//Print the second item in the nested array
	console.log(nestedArray[3][1]);

	//Can you print the third item in the *bonus* array?

	//Create a variable called "nestedArrayString" that stores the values in the nested array as a concatenated string and use this variable as the return value of this function
	var nestedArrayString = nestedArray[3][0] + " " + nestedArray[3][1] + " " + nestedArray[3][2];

	//Create a variable called "nestedArrayAddedUp" that adds up the values in the nested array and print the contents of this variable
	var nestedArrayAddedUp = nestedArray[3][0] + nestedArray[3][1] + nestedArray[3][2];

	console.log(nestedArrayAddedUp)

	return nestedArrayString;
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
	console.log(car);

	//Print the parameters length
	console.log(car.length);

	//Iterate through the keys in the array and change their value
	for (var key in car){
		keys += key + " ";
		properties += car[key] + " ";
		if (key === "type") {
			car[key] = "Jeep";
		}
	}
	console.log("Parameter keys " + keys);
	console.log("Parameter properties " + properties);

	//Return the paramter and it's key:value pairs as a string concatenation
	return "My car's type is " + myCar.type + " and it's model is " + myCar["model"] + " and it's color is " + myCar.color + ".";
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
	console.log(car);

	//Print the data type of the passed parameter
	console.log(typeof car);

	//Print the objects keys and set this value to a variable named "paramKeys";
	var paramKeys = Object.keys(car);
	console.log(paramKeys);

	//Print the data type of "paramKeys"
	console.log(typeof paramKeys);

	//Use the method "toType" to print the "correct" data type of "paramKeys"
	console.log(toType(paramKeys));

	/*
	* Print the objects values and set this value to a variable named "paramValues"
	* Note: This is an experimental technology and is not 
	* compatible in all browsers
	*/
	var paramValues = Object.values(car);
	console.log(paramValues);

	/*
	* Print the objects values and set this value to a variable named "paramValues"
	* Note: This is an experimental technology and is not 
	* compatible in all browsers
	*/
	var keyValuePairs = Object.entries(car);
	console.log(Object.entries(car));

	return "The object keys are: " + paramKeys + ".\n" + "With values: " + paramValues + ".\n" + "This can be displayed as: " + keyValuePairs;
}


console.log("Object Methods\n");

console.log(objectMethods(myCar));

console.log("\n***End***\n");



