function toFahrenheit(celsius) {
 // Write your code here
	let res = celsius*(9/5)+32
	res = `${res}`
	if(res.includes(".")){ 
		let a = res.split(".")
		if(a[1].length>=2){
		  res = a[0]+"."+a[1][0]+a[1][1]
		}else{
			res = a[0]+"."+a[1]
		}
	}else{
		res = res+".00"
	} 
return res
}

// Do not change the code below
const celsius = prompt("Enter Celsius:"); 
alert(toFahrenheit(Number(celsius))); 
