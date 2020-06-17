/*****************************
* Variables and data types
*/
var firstName = 'John';
document.write(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
document.write(fullAge);

var job;
document.write(job);

job = 'Teacher';
document.write(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';



/*****************************
* Variable mutation and type coercion
*/
var firstName = 'John';
var age = 28;

// Type coercion
document.write(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

document.write(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
document.write(firstName + ' ' + lastName);



/*****************************
* Basic operators
*/

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

document.write(yearJohn);

document.write(now + 2);
document.write(now * 2);
document.write(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
document.write(johnOlder);


// typeof operator
document.write(typeof johnOlder);
document.write(typeof ageJohn);
document.write(typeof 'Mark is older tha John');
var x;
document.write(typeof x);



/*****************************
* Operator precedence
*/
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
document.write(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
document.write(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
document.write(x, y);


// More operators
x *= 2;
document.write(x);
x += 10;
document.write(x);
x--;
document.write(x);


/*****************************
* If / else statements
*/


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    document.write(firstName + ' is married!');
} else {
    document.write(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
    document.write(firstName + ' is married!');
} else {
    document.write(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    document.write('Mark\'s BMI is higher than John\'s.');
} else {
    document.write('John\'s BMI is higher than Marks\'s.');
}



/*****************************
* Boolean logic
*/

var firstName = 'John';
var age = 20;

if (age < 13) {
    document.write(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    document.write(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    document.write(firstName + ' is a young man.');
} else {
    document.write(firstName + ' is a man.');
}



/*****************************
* The Ternary Operator and Switch Statements
*/

var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? document.write(firstName + ' drinks beer.') : document.write(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
document.write(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        document.write(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        document.write(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        document.write(firstName + ' designs beautiful websites.');
        break;
    default:
        document.write(firstName + ' does something else.');
}

age = 56;
switch (true) {
    case age < 13:
        document.write(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        document.write(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        document.write(firstName + ' is a young man.');
        break;
    default:
        document.write(firstName + ' is a man.');
}



/*****************************
* Truthy and Falsy values and equality operators
*/
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    document.write('Variable is defined');
} else {
    document.write('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    document.write('The == operator does type coercion!');
}



/*****************************
* Functions
*/
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
document.write(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        document.write(firstName + ' retires in ' + retirement + ' years.');
    } else {
        document.write(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');



/*****************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

document.write(whatDoYouDo('teacher', 'John'));
document.write(whatDoYouDo('designer', 'Jane'));
document.write(whatDoYouDo('retired', 'Mark'));



/*****************************
* Arrays
*/

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

document.write(names[2]);
document.write(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
document.write(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
document.write(john);

john.pop();
john.pop();
john.shift();
document.write(john);

document.write(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
document.write(isDesigner);



/*****************************
* Objects and properties
*/

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

document.write(john.firstName);
document.write(john['lastName']);
var x = 'birthYear';
document.write(john[x]);

john.job = 'designer';
john['isMarried'] = true;
document.write(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
document.write(jane);



/*****************************
* Objects and methods
*/
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
document.write(john);




/*****************************
* Loops and iteration
*/

// for loop
for (var i = 1; i <= 20; i += 2) {
    document.write(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    document.write(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    document.write(john[i]);
    i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    document.write(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    document.write(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    document.write(john[i]);
}

