String.prototype.replaceAt = function(index, character) { 
    return this.substr(0, index) + character + this.substr(index + character.length);
}

function commafy(inVal) { 
	let arrWhole = (inVal + "").split(".");
	let arrTheNumber = arrWhole[0].split("").reverse();
	let newNum = Array();
	for (let i = 0; i < arrTheNumber.length; i++ ) { 
		newNum[newNum.length] = ((i%3===2) && ( i < arrTheNumber.length-1) ) ? " " + arrTheNumber[i]: arrTheNumber[i];
	}
	let returnNum = newNum.reverse().join("");
	if (arrWhole[1]) { 
		returnNum += "." + arrWhole[1];
	}
	return returnNum;
}

function message(m) { 
	$("#board").append('<span class="message">' + m + '</span>');
}

function clearMessage() { 
	$("#board").find('span.message').remove();
}