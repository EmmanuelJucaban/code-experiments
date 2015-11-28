

var my_cat = {};

my_cat["name"] = "Kitty";
my_cat["age"] = 2;
my_cat["alive"] = true;
my_cat["favorite_toy"] = "string";
my_cat["napping_spot"] = "Your mom";
my_cat["dislikes"] = "dogs";
my_cat["favorite_food"] = "mice";





var my_dream_life = {};

var property_key = "job";

my_dream_life[property_key] = "Full stack Software Engineer";

var another_property_key = "salary";

my_dream_life[another_property_key] = "World domination";

console.log(my_dream_life[property_key]);
console.log(my_dream_life["job"]);

var next_property = "car";


my_dream_life[next_property] = "2018 GTR";
console.log(my_dream_life[next_property]);
console.log(my_dream_life["car"]);







var numbers = [2, 4, 5, 37, 0];
var doubled_numbers = {};

for (var i = 0; i < numbers.length; i++) {
    doubled_numbers[numbers[i]] = numbers[i] * 2;
}




var favorites = [];

var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt',
    'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis'
];


for (var i = 0; i < famous.length; i++) {
    if (famous[i][0] === "a") {
        favorites.push(famous[i]);
    }
}


var obama_jobs = [];

var politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
};


for (var name in politicos) {
    famous.push(politicos[name]);
}


for (var obama in politicos) {
    if (politicos[obama].match("obama")) {
        obama_jobs.push(politicos[obama]);
    }
}




var politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
};


var b_named_politicos = {};

for(var title in politicos){
	var names = politicos[title].split(" ");
	if(names[0][0] === "b" || names[1][0] === "b"){
		b_named_politicos[title] = politicos[title];
	}
}


var reverse_politico_lookup = {};

for(var title in politicos){
	var name = politicos[title];
	reverse_politico_lookup[name] = title;
}





var type_tester = function(input) {
  if(Array.isArray(input)) {
    return "Array";
  } else {
    return typeof input;
  }
};

