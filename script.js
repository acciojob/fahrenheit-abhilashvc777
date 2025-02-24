function toFahrenheit(celsius) {
 // Write your code here
	let res = celsius*9/5+32
	res = `${res}`
	if(res.includes(".")){
		res = res
	}else{
		res = res+".00"
	}
	return res
}

// Do not change the code below
const celsius = prompt("Enter Celsius:"); 
alert(toFahrenheit(Number(celsius)));
