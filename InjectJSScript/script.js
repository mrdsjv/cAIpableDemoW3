function(e) { 
var errorStr = ''; 
var elems = document.getElementsByTagName('UL'); 
	for (i in elems) { 
		if((' ' + elems[i].className + ' ').indexOf('error') > -1) { 
			errorStr += elems[i].innerText + '\n'; } 
	} 
	return errorStr; 
}