function printNumbers() {
	let startNumb = parseInt(document.querySelector("#start").value);
	let stopNumb = parseInt(document.querySelector("#stop").value);
	let jumpNumb = parseInt(document.querySelector("#jump").value);
	for (let i = startNumb ; i <= stopNumb ; i+=jumpNumb ) {
		console.log(i);
	}
}