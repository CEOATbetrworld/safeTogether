
var papa = prompt("please enter your father's number");

var momy  = prompt("please enter your mother's number");

var ayush = prompt("please enter your friend's number");

var urr = [papa,momy,ayush];
var carr = document.getElementsByTagName('a');

for(var a = 0 ; a<carr.length;a++){
	carr[a].href = "tel:" + urr[a]; 
}


