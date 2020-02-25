
/*********************** 
 * Fuction Constructor
************************/

 /*
 
 Person = function (name,dateOfBirth, job){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.job = job;
}


Person.prototype.calculateAge = function (){
    console.log (2020-this.dateOfBirth);
}

Person.prototype.lastName = 'taleb';

var jhon = new Person('john',1985,'teacher');
var mark = new Person('mark',2000, 'designer');
var jiji = new Person('jugurtha', 1999, 'developer');


jhon.calculateAge();
mark.calculateAge();
jiji.calculateAge();

console.log(jhon.lastName);
console.log(jiji.lastName);
console.log(mark.lastName);

*/

/***************** 
 * Object.create
******************/

/*
var personProto = {

    calculateAge : function (){
        console.log(2020 - this.dateOfBirth);
    },

    payementCalc : function (){
        console.log(30 * this.payementPerDay);
    },

    lastName : 'taleb'

};

var jiji = Object.create(personProto);
jiji.name = 'jugurtha';
jiji.dateOfBirth = 1985;
jiji.job = 'designer';
jiji.payementPerDay = 20;

//other way to creat object with Object.create
//Object.create Accept an Other argument

var mark = Object.create (personProto,
{
    name : {value : 'tina'},
    dateOfBirth : {value : 2000},
    job : {value : 'teacher'},
    payementPerDay : {value : 25}
});


jiji.calculateAge();
mark.calculateAge();
jiji.payementCalc();
mark.payementCalc();

console.log(jiji.lastName);
console.log(mark.lastName);
*/


/*********************** 
 * Primitives Vs Objects
************************/

/*
//Primitives
var a = 25;
var b = a;

a = 40;
console.log(a);
console.log(b);

//Objects
var object1 = {
    name : 'taleb',
    age : 30
};

var object2 = object1;
object1.name = 'goumeziane';
console.log(object1.name);
console.log(object2.name);

//function
var age = 27;

var obj = {
    name : 'jonas',
    city : 'alger'
};

var change = function (a, b){
    a = 30;
    b.city = 'tizi ouzou';
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/

/*******************
 * Passing Function As 
 * Arguments
 ********************/
/*
var year = [1965, 1800, 2010,1999, 1988];

var arrayCalc = function (arryear, fn){
    var arResult = [];
    for(var i = 0; i < arryear.length; i++){
        arResult.push(fn(arryear[i]));
    }
    return arResult;
}

var calcAge = function (el){
    return (2020 - el);
}

function isFullage (el){
    return el>=18;
}

var age = arrayCalc(year, calcAge);
console.log(age);

var fullAge = arrayCalc(age, isFullage);
console.log(fullAge);
*/

/************************************
 * Function return an other Function
 ************************************/
/*
function interviwQuestion (job){
    if (job === 'teacher'){
        return function(name){
            console.log(name + 
                ' what do you tech?');
        }
    }else if (job === 'Designer'){
        return function (name){
            console.log('what do have designed yet '+ name);
        }
    }else return function (name){
        console.log('hy what do you do Mr '+name);
    }
}

var teacherQuestion = interviwQuestion('Designer');
teacherQuestion('jugurtha');

interviwQuestion ('teacher')('mark');
*/

/***********************************
 * IIFE: Imidiatily Invoked Function 
 * Expression
 ***********************************/
// use if you do not want to reuse the function
//if we want to keep variable private

/*(
    function (){
        var score = Math.random() * 10 ;
        console.log(score);
    }
)();*/

/**************
 * THE CLOSURES
 * Means that the function can
 * use the variables of the parent function
 * even this (parent function) goes out
 * from the execution context stack
 */
/*
function retirement (retirementAge){
    return function (yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log ((retirementAge - age)+' lefet to the retirement');
    }
}

var retirementUsa = retirement(66);
var retirementAlgeria = retirement(62);
var retirementFrance = retirement (67);

retirementUsa (1985);
retirementFrance (1985);
retirementAlgeria (1985);

function interviwQuestion (job){
    var tech = ' what do you tech? ';
    var design = 'what do have designed yet ';
    var anything = 'hy what do you do Mr ';

    return function (name){
        if (job === 'teacher'){
            console.log(name + tech);
        }else if (job === 'designer'){
            console.log(name + design);
        }else {
            console.log(anything + anything);
        }
    }
}

interviwQuestion ('teacher')('jugurtha');
interviwQuestion ('designer')('amirouche');
interviwQuestion ('rien')('farou');
*/

////////////////////////////////////////
//Lecture :Bind, Call and apply Method
/*
var jhon = {
    name : 'jhon',
    age : 25, 
    job : 'teacher',
    presentation : function (style, timeOfDay){
        if (style === 'formal'){
            console.log('good '+timeOfDay+' my name is '+this.name+  
            ' and my job is a '+this.job+' and my age is '+this.age+'years old');
        }else if (style === 'friendly'){
            console.log('hy my friend good '+timeOfDay+' i\'m '+this.name+  
            ' and my job is '+this.job);
        }
    }
};

jhon.presentation('formal', 'morning');

var emily = {
    name : 'emily',
    age : 20,
    job : 'designer'
};

//we can use the presentation method of jhon for an other object like emily
//for that we use Call method wich accept three arguments
//the first is to set the This variable to an other objet like emily in this case
// and set the two others.
jhon.presentation.call(emily, 'friendly', 'night');

// the apply method is similar than the Call method
//but in this case we put the second and the third argument in an array 
jhon.presentation.apply(emily, ['friendly', 'afternoon']);

//the Bind method generate a copy of a function with a preset attribute
//because of that we store it in a variable
//and call this variable for the second argument
var johnFriendly = jhon.presentation.bind(jhon, 'friendly');
johnFriendly('morning');

//bind method, (this) variable set to emily
var emilyFormel = jhon.presentation.bind(emily, 'formal');
emilyFormel('afternoon');

//precedent exemple to use bind method

var year = [1965, 2008, 2010,1999, 1988];

var arrayCalc = function (arryear, fn){
    var arResult = [];
    for(var i = 0; i < arryear.length; i++){
        arResult.push(fn(arryear[i]));
    }
    return arResult;
}

var calcAge = function (el){
    return (2020 - el);
}

function isFullage (limit, el){
    return el >= limit;
}

var age = arrayCalc(year, calcAge);

var fullUsa = arrayCalc(age, isFullage.bind(this,20));
console.log(age);
console.log(fullUsa);

var fullAlgeria = arrayCalc(age, isFullage.bind(this, 18));
console.log(fullAlgeria); */


/*****************************************************************
                Instruction for the Code Chalenge 
********************************************************************/
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*/*****************************************************************
                Instruction for the Code Chalenge 
********************************************************************/


Question = function (question, answerProp, corectAnswer){

    this.question = question;
    this.answerProp = answerProp;
    this.corectAnswer = corectAnswer;
};

//var propQuestion1 = ['True', 'False', ];
//var propQuestion2 = ['Var x =  ', 'var x = ', 'var x :'];
var question1 = new Question ("Javascript is he a best popular language ?",['True', 'False', ], 1);
var question2 = new Question ("Give me the correct syntax ?",['Var x =  ', 'var x = ', 'var x :'], 1);
var question1 = new Question ("give the name of the instructor of this course ?",['jugurtha', 'goumez', 'lina' ], 1);

//put the question in the table
var tableQuestion = [question1, question2];

//ruturn question randomly
var quewiz = randomQuestion(tableQuestion);

console.log(quewiz.question);
for (i = 0; i < quewiz.answerProp.length; i++){
    console.log(i+'-'+quewiz.answerProp[i]);
}

var essai = prompt("inter the correct answer", );
if (essai == quewiz.corectAnswer){
    console.log('yes it\'s the correct one');
}else {
    console.log('oups Wrong Answer!!');
}


//Function to return ramdomly item from an array 
function randomQuestion(arrayQuestion)
{
  
return arrayQuestion[Math.floor(Math.random()*arrayQuestion.length)];
     
}



































































































































































































































































