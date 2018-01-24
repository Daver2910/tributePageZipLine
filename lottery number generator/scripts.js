
/* ----------  changes to be made -------------

the function should be made into 1 fuction to stop duplicated numbers

add an api to collect results from other sites.


 */


function generate(argument) {
	for (var i = 0; i < 7; i++) {
				var x = (Math.floor(Math.random()*100));
						if (x<48 && x>0) {
										document.getElementById('output1').innerHTML = x ;}
						else {continue};}
}
generate;

function generate1(argument) {
	for (var i = 0; i < 7; i++) {
				var x = (Math.floor(Math.random()*100));
						if (x<48 && x>0) {
										document.getElementById('output2').innerHTML = x ;}
						else {continue};}
}
generate1;

function generate2(argument) {
	for (var i = 0; i < 7; i++) {
				var x = (Math.floor(Math.random()*100));
						if (x<48 && x>0) {
										document.getElementById('output3').innerHTML = x ;}
						else {continue};}
}
generate2;

function generate3(argument) {
	for (var i = 0; i < 7; i++) {
				var x = (Math.floor(Math.random()*100));
						if (x<48 && x>0) {
										document.getElementById('output4').innerHTML = x ;}
						else {continue};}
}
generate3;

function generate4(argument) {
	for (var i = 0; i < 7; i++) {
				var x = (Math.floor(Math.random()*100));
						if (x<48 && x>0) {
										document.getElementById('output5').innerHTML = x ;}
						else {continue};}
}
generate4;

function generate5(argument) {
	for (var i = 0; i < 7; i++) {
				var x = (Math.floor(Math.random()*100));
						if (x<48 && x>0) {
										document.getElementById('output6').innerHTML = x ;}
						else {continue};}
}
generate5;





/*
var r = 7; //numbers_required_to_play
var t = 47; //total_lottery_numbers

function generate2(t, r) {
	var a = []; 
	for (var i = 0; i<r; i++) {
				var x = (Math.floor(Math.random()*t));
						if (x<48 && x>0) {
										x= Math.abs(x);}
						else {continue};
						a.push(x);
		document.getElementById('hello').innerHTML = a ;
}
}
generate2;

//stackover flow code below...

var c = 47;
var d = 7
function generateRandomNumbers(c, d){
            var resultArray = [];
            var output = "";

            if(isNaN(c) || isNaN(d)){
                return "You have entered an invalid value";
            }else{
            for(x=0; x<d; x++){
                var result = Math.ceil(Math.random()*c);
                resultArray.push(result);

                output += resultArray[x]+ "\n";
                }
            }   
            return document.getElementById('stack').innerHTML =output;
        }
generateRandomNumbers;


*/









