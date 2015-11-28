//	Exercise: Favorite Recipe

//	1.	Instantiate a new array and save it to a variable recipe
//	2.	Use bracket notation to add the steps to create your favorite meal.
//	3.	Access the first step of your recipe using bracket notation.
//	4. 	Create variable called last_step and assign to it a number which represents the index of the last item of your array
//	5.	Access the last step of your recipe using the last_step variable

var recipe = [];

recipe[0] = "Chicken";
recipe[1] = "Rosemary";
recipe[2] = "Garlic";
recipe[3] = "White wine";
recipe[4] = "Butter";
recipe[5] = "Onion";


var last_step = recipe[recipe.length - 1];


//	Exercise: Bucket List

//	1.	Instantiate a new array and save it to a variable bucket_list
//	2.	Use bracket notation with the assignment operator to add two life goals to your array.
//	3. 	.push() two goals onto the end of your list.
//	4.	.unshift() two goals onto the beginning.
//	5.	What is the array's length at this point?
//	6.	.pop() off one goal and save it to a variable dying_wish
//	7.	.shift() off one goal and save it to a variable do_it_now
//	8. 	What is the array's length at this point?

var bucket_list = [];

bucket_list[0] = "Pass Hackreactor technical interview";
bucket_list[1] = "Become a Software engineer";

bucket_list.push("Stunt on Fook");
bucket_list.push("Stunt on the Gout");

bucket_list.unshift("World domination");
bucket_list.unshift("Become batman");



var dying_wish = bucket_list.pop();
var do_it_now = bucket_list.shift();



// 	Exercise:

// 	1.	use .split(' ') on scrambled_poem and save the result as an array scrambled_array
// 	2.	Create a new array unscrambled_array
// 	3.	While the length of scrambled_array is greater than 0, remove the FIRST and LAST value and store add them to unscrambled_array.
// 	4.	Turn the values in unscrambled_poem into a string by using the array's native .join(' ') method.



var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are";

var scrambled_array = scrambled_poem.split(' ');

var unscrambled_array = [];


while (scrambled_array.length > 0) {
    unscrambled_array.push(scrambled_array.shift(), scrambled_array.pop());
};


// 	Exercise:

//	1.	Write a function reverser which will take an array of values as an input and return a new array of the same values in reverse order.
//	2.	Inside reverser instantiate a new array reversed_array, use a for loop to populate it, then return it from the function.

var toBeReversed = ["backwards", "be", "should", "this"];


var reverser = function(array) {
    var reversed_array = [];
    var length = array.length;
    for (var i = 0; i < length; i++) {
        reversed_array.unshift(array[i]);
    }
    return reversed_array;
};




// 	Exercise: Write a function biggest_smallest that takes an array of numbers as an input, 
//	uses .forEach(), and returns an array containing the smallest number in the zeroth position 
//	and the largest number in the first position.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var biggest_smallest = function(array) {
    var biggieSmalls = [array[0], array[0]];
    array.forEach(function(item) {
        if (array[item] < biggieSmalls[0]) {
            biggieSmalls[0] = array[item];
        } else if (array[item] > biggieSmalls[1]) {
            biggieSmalls[1] = array[item];
        }
    });
    return biggieSmalls;
};


var array_duplicator = function(inputArray) {
    var outputArray;

    // code here
    outputArray = inputArray.slice();
    return outputArray
};

var original = [1, 2, 3, 4]
var duplicated = array_duplicator(original)

duplicated.pop()
duplicated.pop()
duplicated.pop()

console.log(original, duplicated) // should not be the same!





var array_combiner = function(array1, array2) {
    var newArray = array1.concat(array2);
    return newArray;
};



var combined_array = array_combiner([1, 2, 3], [4, 5, 6]);



var array_plucker = function(array, index) {
    var removed_value = array.slice(index);
    return removed_value;
};





var shuffler = function(array) {
    var original = array.slice(); // so as not to modify the original
    var shuffled = [];
    while (original.length > 0) {
        var randomIndex = Math.floor(Math.random() * original.length);
        shuffled.push(original[randomIndex]);
        // original = original.splice(randomIndex, 1);  // this was an error. it's setting original equal to the spliced number
        original.splice(randomIndex, 1); // it actually should just splice the number and work with what remains
    }
    return shuffled;
};


//	Write a function that takes an array of values and returns an boolean representing if the word "hello" exists in the array.

var helloChecker = function(array) {
    var helloExists = false;
    array.forEach(function(val) {
        if (val === "hello") {
            helloExists = true;
        }
    });
    return helloExists;
};

//	Write a function that takes an array of values and a target value and returns how many times that target value exists in the array.

var targetCounter = function(array, target) {
    var counter = 0;
    array.forEach(function(val) {
        if (val === target) {
            counter++;
        }
    });
    return counter;
};

//	Write a function that takes an array and returns a new array containing only the values at odd indexes in that array.
var oddMaker = function(array) {
    var oddArray = [];
    array.forEach(function(val, index) {
        if (index % 2 !== 0) {
            oddArray.push(val);
        }
    });
    return oddArray;
};

//	Write a function called sum_array that takes an array of numbers and returns the sum of all of those numbers added together.


var sum_array = function(array) {
    var total = 0;
    array.forEach(function(val) {
        total += val;
    });
    return total;
};

//	Write a function called array_math that takes an array of numbers and a string with a mathmatical operator and applies that operator to all the numbers together. array_math([4,2,3], "*") should return 24
var array_math = function(string) {
    return eval(string);
};
//	Write a zipper function that combines two arrays in alternating order, zipper([1,2,3],['a','b','c']) should return [1, 'a', 2, 'b', 3, 'c']. Make sure to handle cases where one array is longer than the other.

var zipper = function(first, second) {
    var zippedArray = [];
    var length = 0;
    if (first.length > length) { // this will include "undefined" placeholders when one array is longer
        length = first.length; // you can also iterate to the shorter length, then concat the remainder of the longer array
    } else {
        length = second.length;
    }
    for (var i = 0; i < length; i++) {
        zippedArray.push(first[i], second[i]);
    }
    return zippedArray;
};


//	Write a function that merges two sorted lists into a new list. merge_sorted([1, 2, 5, 9], [3, 7, 19]) should return [1, 2, 3, 5, 7, 9, 19]

var merge_sorted = function(first, second) {
    var mergedArr = [];
    while (first.length > 0 || second.length > 0) {
        if (first[0] < second[0] || second[0] === undefined) {
            mergedArr.push(first.shift());
        } else if (first[0] > second[0] || first[0] === undefined) {
            mergedArr.push(second.shift());
        }
    }
    return mergedArr;
};

//	Write a function that creates an array of the first 100 Fibonacci numbers.

var fibonacci100 = function() {
    var fibArr = [0, 1];
    var count = 3;
    var previousNumber = 0;
    var currentNumber = 1;
    var temp;
    while (count <= 100) {
        temp = currentNumber;
        currentNumber = currentNumber + previousNumber; // The definition of the fibonacci sequence
        previousNumber = temp;
        fibArr.push(currentNumber);
        count++;
    }
    return fibArr;
};
