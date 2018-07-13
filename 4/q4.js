let costOfApple=10;
let costOfBanana=15;
let costOfMango=08;

	function sumOfFruits(){

		let noOfApples=parseInt(document.querySelector("#inp1").value);
		let noOfBanana=parseInt(document.querySelector("#inp2").value);
		let noOfMango=parseInt(document.querySelector("#inp3").value);
		
		let sum=noOfApples*costOfApple+noOfMango*costOfMango+noOfBanana*costOfBanana;
		console.log(sum);
	}