function exam(){
	const math=20;
	const english=10;
	const compSkills=50;
	let userInput=parseInt(document.querySelector("#q6").value);
	if (userInput>= math || userInput>=english || userInput>= compSkills)
		console.log("Passed");
	else{
		console.log("not")
	}
}