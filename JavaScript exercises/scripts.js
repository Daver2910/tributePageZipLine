var string = "Varvara is the best woman ever.";

function findAStringLetter(x){
	var arr=[];
	var arr1 = [];
	arr = string.split(' ');
	for (var i = 0; i < arr.length; i++) {
		arr1.toUpperCase(arr[i][0]);
	}
	arr1;
	console.log(arr1);


}

findAStringLetter(string);




/*alert("this is a JS popup");

console.log("itWorked");
var x = "value for a"

var a = prompt("please enter a value for a");
var b = prompt("please enter a value for b");
a=number(a); 
b=number(b);
console.log("this is var a value");
console.log(a);
console.log("this is var b value");
console.log(b);
console.log(a + b );

console.log("this is A++ = " + a++ );
console.log("this is new value of A with ++ = " + a++ );
console.log("this is new value of A after ++ = " + a );



var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

*/