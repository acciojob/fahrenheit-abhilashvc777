function toFahrenheit(celsius) {
 // Write your code here
	let f = celsius*9/5+32
	return f
}

// Do not change the code below
const celsius = prompt("Enter Celsius:"); 
alert(toFahrenheit(Number(celsius)));
