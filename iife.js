// IIFE -  immediately invoked function expression

// var a = 10
// console.log(a)
// (function (){
// 	console.log('hello')
// })()

//iife help in amking local scopes ithout polluting the global scope

// (function s(l,p,r){
// 	l('power of 3 to the 4 ' + p(3,4))
// 	l('sin of pi is ' + r(3.14159))
// })(console.log , Math.pow , Math.sin)

for(let i=0;i<10;i++){
	setTimeout(function(){
		console.log(i);
	},100)
}