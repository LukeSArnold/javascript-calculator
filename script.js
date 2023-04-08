function calculate(){

	let color = document.getElementById('colorSelector').value
	let newDiv = document.createElement('div');
	newDiv.setAttribute('class','stuff-box')
	newDiv.setAttribute('style','background-color: '+color);
	document.body.appendChild(newDiv);
	


	let oldDiv = document.getElementById('mainDiv')
	let inputOneText = document.getElementById('input1').value
	let inputTwoText = document.getElementById('input2').value
	let operator = document.getElementById('dropDown').value
	console.log("Input one has the text "+inputOneText);
	console.log("Input two has the text "+inputTwoText);
	console.log("operator has the text "+operator);
	
	
	input1 = parseFloat(inputOneText);
	input2 = parseFloat(inputTwoText);

	if (isNaN(input1) || isNaN(input2)){
		let h2 = document.createElement('h2')
		let dateTime = document.createElement('p');

		dateTime.textContent = new Date().toString();
                h2.textContent = "ERROR: ONE OR TWO INPUTS WERE INVALID"
                
		

		newDiv.setAttribute('style','background-color: red');
                newDiv.appendChild(h2);
		newDiv.appendChild(dateTime);
		newDiv.onclick = function(){
                	newDiv.remove();
                }

	} else {
		let h2 = document.createElement('h2');
		let dateTime = document.createElement('p');

		result = eval(""+inputOneText+""+operator+""+inputTwoText);

		dateTime.textContent = new Date().toString();
                h2.textContent = inputOneText + operator + inputTwoText + " = " +result;

                newDiv.appendChild(h2);
		newDiv.appendChild(dateTime);
		newDiv.onclick = function(){
			newDiv.remove();
		}
	}
}

var document = new Document();
document.title = "JavaScript Calculator";
let div = document.createElement('div');
div.setAttribute('class','stuff-box');
div.setAttribute('style','background-color: #000000');
div.setAttribute('id','mainDiv');
document.body.appendChild(div);

let h2 = document.createElement('h2');
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let dropDown = document.createElement('select');
let calcButton = document.createElement('button')
let colorSelector = document.createElement('input');
let lineBreakFormatter = document.createElement('br');
let createAnExpressionText = document.createElement('p');
let colorOfResultText = document.createElement('p');
calcButton.textContent = "calculate";
calcButton.setAttribute('onclick','calculate()')

input1.setAttribute('id','input1');
input2.setAttribute("id","input2");
dropDown.setAttribute("id","dropDown");
colorSelector.setAttribute('id','colorSelector');

h2.textContent = "JavaScript Calculator";
createAnExpressionText.textContent = "Create an Expression";
colorOfResultText.textContent = "color of result <div>";

let addOption = document.createElement('option');
addOption.textContent = "+";

let subOption = document.createElement('option');
subOption.textContent = "-";

let multOption = document.createElement('option');
multOption.textContent = "*";

let diviOption = document.createElement('option');
diviOption.textContent = "/";

let floatOption = document.createElement('option');
floatOption.textContent = "%";

let expOption = document.createElement('option');
expOption.textContent = "**";

colorSelector.setAttribute('type','color');
dropDown.appendChild(addOption);
dropDown.appendChild(subOption);
dropDown.appendChild(multOption);
dropDown.appendChild(diviOption);
dropDown.appendChild(floatOption);
dropDown.appendChild(expOption);

div.appendChild(h2);
div.appendChild(createAnExpressionText);
div.appendChild(input1);
div.appendChild(dropDown);
div.appendChild(input2);
div.appendChild(calcButton);
div.appendChild(lineBreakFormatter);
div.appendChild(colorSelector);
div.appendChild(colorOfResultText);
