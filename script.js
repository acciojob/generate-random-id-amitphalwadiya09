function makeid(l) {
  // write your code here
	let result=""
	for(let i=0;i<l;i++)
		{
	let ans="ABCDEFGHIJKLMNOPQRSTUVWXZY0123456789qwertyuiopasdfghjklzxcvbnm"
	let randomindex=Math.floor(Math.random()*l)
	result=result+ans.charAt(randomindex)
}
	return result;
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
