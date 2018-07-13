function printNumbers() {
	let startNumb = parseInt(document.querySelector("#start").value);
	let stopNumb = parseInt(document.querySelector("#stop").value);
	for (let i = startNumb ; i <= stopNumb ; i++ ) {
		console.log(i);
	}
}