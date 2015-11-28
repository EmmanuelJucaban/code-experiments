var saying_generator = function() {
    var phrase = "Heeey " + "it's the " + "Fonz.";
    return phrase;
}

var saying = saying_generator();



var broken_saying_generator = function() {
    var phrase = "Heeey " + "it's the " + "Fonz.";
    phrase;
}

var broken_saying = broken_saying_generator();




var get_sentence = function() {
    var result = Math.ceil(Math.random() * 2);
    if (result === 1) {
        return "Number 1";
    } else if (result === 2) {
        return "Number 2";
    }
}


var counter = 0;
while (counter < 10) {
    console.log(get_sentence());
    counter++;
}


var inspector = function() {
    console.log(arguments);
}




var log_and_return = function() {
    return arguments;
}


var returned_values = log_and_return(1, 2, 3, 4)



var tripler = function(num) {
    return num * 3;
}

var multiply = function(input1, input2) {
    return input1 * input2;
}

var divide = function(input1, input2) {
    return input1 / input2;
}

var remainder = function(input1, input2) {
    return input1 % input2;
}


var factoral_of_n = function(num) {
    var i = num - 1;
    while (i > 1) {
        num *= i;
        i--;
    }
    return num;
}

console.log(factoral_of_n(5))

var count_by_n = function(count_by, count_up_to) {
    var start = 0;
    while (start < count_up_to) {
        console.log(start += count_by);
    }
}




var fibonacci = function(num) {
    if (num === 1) {
        return 0;
    }
    if (num === 2) {
        return 1;
    } else {
        var start = 3;
        var previousNumber = 0;
        var currentNumber = 1;
        var temp;
        while (start <= num) {
            temp = currentNumber;
            currentNumber = previousNumber + currentNumber;
            previousNumber = temp;
            start++;
        }
        return currentNumber
    }
}
