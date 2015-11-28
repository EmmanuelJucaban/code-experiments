var fn1 = function () {
  return "this should be the first value in results array"
}


var answer_collector = function(array){
	var results_array = [];
	for (var i = 0; i < array.length; i++){
		results_array.push(array[i]());
	}
	return results_array
}



var returns_a_func = function () {
  return function(){ console.log('BOOP!') }
}

// have we booped yet?
var booper = returns_a_func()





var returns_a_func = function () {
  var number = 5
  return function(){ console.log( "The number is: " + number) }
}

var number = 4
var fn = returns_a_func()
fn() 

var func_runner = function(func){
  var number = 3
  func()
}





var multiples_by = function(a){
	var a = a;
	return function(b){
		return a * b
	}
}

var multiples_by_4 = multiples_by(4);

var multiples_by_10 = multiples_by(10);

