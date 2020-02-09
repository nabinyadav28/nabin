//declaration of variable
//var is a keyword which helps us to define a variable
// "a" is a variable name
var a;

//primitive data types
a=10;
//"name" is "string" datatype
var name = "nodeJS"

//"bool" is a variable name of "boolean" datatype
var bool = true;


var a;
console.log(a);
var b=null;
console.log(b);


//js is strictless language
//what it means?
//it means that we donot have to define the data type of the variable
var num=10;
//console.log(num);
num = "node";
//console.log(num);
/**************naming a variable******************/
//var 3years = 3;// var can't start with a number
//var mark/bob = "hello";//variablr can't have any special symbol while naming them

//we can use "-" as symbol while naming variables
var _year = 3;
//console.log(_year);

//camel casing:whole variable will be in lower case but the 1st character of 2nd word will be in upper case
var markBob="hello";
//var mark_bob;
//we are changimg the datyatype of a variable  - type correstion
var number = 10;
number = true;

var firstName = 'John';
var age = 28;

//type coercion
console.log(firstName + ' ' + age);


//variable mutation
var age = 20;
console.log(age);
age = 'twenty';
console.log(age);

//Basics operators
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
 
//Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;


//Logical Operators
var johnOlder = ageJohn < ageMark;

//types of operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than john');
//var x;
//console.log(typeof x);


//multipla operator
var isFullAge = now - yearJohn >= isFullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignment
var x,y;
x=y= (3 + 5) * 4 - 6;
console.log(x,y);

//more operators
x *= 2;//x=x*2
console.log(x);
x += 10;//x=x+10
console.log(x);
x--;//x=x-1
console.log(x);
x++;//x=x+1






