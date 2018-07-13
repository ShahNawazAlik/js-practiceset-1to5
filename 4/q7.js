function speed(){
	const speed=60;
	let userSpeed=parseInt(document.querySelector("#q7").value);

	if (userSpeed>speed){
		console.log("overspeeding")
	}else{
		console.log("NOT")
	}
}