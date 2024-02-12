const isPowerOfTwo = (number) => {
  //your code here
	if(number<=0){
		return false;
	}
	
	while(number>1){
		if(number%2===0){
			number=number/2;
		}else{
			return false;
		}
	}
	return true;
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));   
 
