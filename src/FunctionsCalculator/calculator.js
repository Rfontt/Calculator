function setValue(value){
	document.getElementById('viewFinder').value += value;
}

function Calculates(){
	var value = document.getElementById('viewFinder').value;
	var result = eval(value);
	document.getElementById('viewFinder').value = result;
}

function Delete() {
	document.getElementById('viewFinder').value = " ";
}
