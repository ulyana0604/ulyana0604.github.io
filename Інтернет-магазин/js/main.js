var id = document.getElementById;
var teg = document.getElementsByTagName;

for(var i = 6; i <= 15; i++){
	 document.getElementsByTagName('li')[i].onmouseover=function(){
		 this.style.color = "red";
		 this.style.fontSize = "17px";
	 };
};

for(var i = 6; i <= 15; i++){
	 document.getElementsByTagName('li')[i].onmouseout = function(){
		 this.style.color = " #499bcc";
	 };
};

for(var i = 0; i <= 5; i++){
	 document.getElementsByTagName('li')[i].onmouseover=function(){
		 this.style.textDecoration = "underline";
	 };
};

for(var i = 0; i <= 5; i++){
	 document.getElementsByTagName('li')[i].onmouseout=function(){
		 this.style.textDecoration = "none";
	 };
};

document.getElementsByTagName('li')[6].onclick = function(){
	for(var q = 2;q<=11;q++){
		document.getElementsByTagName('ul')[q].style.display="none";
	}
	
	document.getElementById('a6').style.display ="block";
	
}

document.getElementsByTagName('li')[7].onclick = function(){
	for(var q = 2;q<=11;q++){
		document.getElementsByTagName('ul')[q].style.display="none";
	}
	document.getElementById('a7').style.display ="block";
	
}
document.getElementsByTagName('li')[8].onclick = function(){
	for(var q = 2;q<=11;q++){
		document.getElementsByTagName('ul')[q].style.display="none";
	}
	document.getElementById('a8').style.display ="block";
	
}

document.getElementsByTagName('li')[9].onclick = function(){
	for(var q = 2;q<=11;q++){
		document.getElementsByTagName('ul')[q].style.display="none";
	}
	document.getElementById('a9').style.display ="block";
	
}

document.getElementsByTagName('li')[10].onclick = function(){
	for(var q = 2;q<=11;q++){
		document.getElementsByTagName('ul')[q].style.display="none";
	}
	document.getElementById('a10').style.display ="block";
	
}

document.getElementsByTagName('li')[11].onclick = function(){
	for(var q = 2;q<=11;q++){
		document.getElementsByTagName('ul')[q].style.display="none";
	}
	document.getElementById('a11').style.display ="block";
	
}
document.getElementsByTagName('li')[12].onclick = function(){
	for(var q = 2;q<=11;q++){
		document.getElementsByTagName('ul')[q].style.display="none";
	}
	document.getElementById('a12').style.display ="block";
	
}

document.getElementsByTagName('li')[13].onclick = function(){
	for(var q = 2;q<=11;q++){
		document.getElementsByTagName('ul')[q].style.display="none";
	}
	document.getElementById('a13').style.display ="block";
	
}

document.getElementsByTagName('li')[14].onclick = function(){
	for(var q = 2;q<=11;q++){
		document.getElementsByTagName('ul')[q].style.display="none";
	}
	document.getElementById('a14').style.display ="block";
	
}

document.getElementsByTagName('li')[15].onclick = function(){
	for(var q = 2;q<=11;q++){
		document.getElementsByTagName('ul')[q].style.display="none";
	}
	document.getElementById('a15').style.display ="block";
	
}