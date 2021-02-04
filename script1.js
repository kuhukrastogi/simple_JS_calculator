function calc() {
	let n1inp = document.getElementById('number1').value;
	let n2inp = document.getElementById('number2').value;
	let n1val = parseInt(n1inp);
	let n2val = parseInt(n2inp);
	let operator = document.getElementById('operator').value;

	if (n1inp == '' || n2inp == '' || operator == 'undefined') {
		console.log('invalid');
	}
	else {
		let calculate;
		if (operator == 'add') {
			calculate = n1val + n2val;
		} 
		else if(operator == 'min') {
			calculate = n1val - n2val;
		}
		else if(operator == 'mul') {
			calculate = n1val * n2val;
		}
		else if(operator == 'div') {
			calculate = n1val / n2val;
		}
		document.getElementById('final-result').innerHTML = calculate;
	}
}

function resetbtn() {
	var r = document.getElementById('final-result').innerHTML = '';
	document.getElementById('number1').value = '';
	document.getElementById('number2').value = '';
	document.getElementById('operator').value = 'undefined';
}