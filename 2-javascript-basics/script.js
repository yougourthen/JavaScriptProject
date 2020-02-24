/*var firstName = 'jugurtha';
console.log(firstName);

var lastName = 'taleb';

console.log(firstName+' '+lastName);

var job;
console.log(job);

job = 'teacher';
console.log(job);*/


/*var lastName, job, isMaried, age;

lastName = 'jugurtha';
job = 'informatics';
isMaried = false;
age = 35;

console.log(lastName+' has a '+age+ ' of '+job+ ' is he married? '+isMaried);
alert(lastName+' has a '+age+ ' of '+job+ ' is he married? '+isMaried);

lastName = prompt('give the lastname:');

console.log(lastName+' has a '+age+ ' of '+job+ ' is he married? '+isMaried);*/


//Chalange programming

/*var markMass, MarkHeight;
markMass = 77;
MarkHeight = 1.6;

var MarkBmi = markMass / (MarkHeight*MarkHeight);


//calculate BMI for John

var johnMass, johnHeight;
johnMass = 65;
johnHeight = 1.5;

var johnBmi = johnMass /(johnHeight*johnHeight);

if (MarkBmi >johnBmi){
    console.log('mark\'s BMI is heighter than john\'s BMI ');
}else {
        console.log('john\'s BMI is heighter than mark\'s BMI ');

}*/

/*Ternary operator
var lastName = 'jugurtha';
var age = prompt('give your age : ');
var isDrinkingBeer = age >= 18 ? ' he drinks beer !': 'not drink beer!';
console.log(lastName+' '+isDrinkingBeer);*/

/*********************************************
 * Equality operator (==) and stryct equality(===)
 * *******************************************
 */
//1-with tho equal operator ==, mean we can compare string and integer and give true

/*var height = 23;

if (height=='23'){
    console.log(height+' ='+' 23'); //int the console it vdisplay the first message 
}else {
    console.log('not equal'); //but in strict equality (===) it gives us not equal(false)
}*/

/*solution of the exercises 

var johnAverageScore = (100 + 134 + 105)/3;
var mikeAverageScore = (103 + 134 + 105)/3;
var marAverageScore = (125 + 134 + 105) / 3;

/*if(johnAverageScore>mikeAverageScore){
    console.log('the john\'s team was the winner and his  average score is: '+johnAverageScore);
}else{
    console.log('the mike\'s team was the winner and his  average score is: '+mikeAverageScore);
}

console.log(johnAverageScore, mikeAverageScore, marAverageScore);

if (johnAverageScore > mikeAverageScore && johnAverageScore > marAverageScore){
    console.log('jhon is the winner with '+johnAverageScore+' points');
}else if (mikeAverageScore > johnAverageScore && mikeAverageScore > marAverageScore){
    console.log('mike is the winner with '+mikeAverageScore+' points');
}else if (marAverageScore>mikeAverageScore && marAverageScore > johnAverageScore){
    console.log('mary is the winner with '+marAverageScore+' points');
}else  {
    console.log('thay are all draw!!');
}*/



/*********************************
 * Functions: function statement
 * *******************************
 */

/*function ageCalculate (birthYear){
    return 2020-birthYear;
}

var yourAge = ageCalculate(1990);
console.log('your age is : '+yourAge);

function yearsUntilRetirement (year, firstname){
     var age = ageCalculate(year);
     retirement = 65 - age;
     console.log(firstname+' you have '+retirement+' years until retirement');
}

yearsUntilRetirement(1985, 'jugurtha');*/


/*********************************************
 * Function expression 
 * *******************************************
 * there is deifferent bettween expression and statement,
 * expression return directly a values in the console, but 
 * statement does not return a values
 */


/*var whatDoYouDou = function (job, fistName){ //function expression
    switch (job){

        case  'teacher' :
        return fistName+' teches kids';

        case 'designer':
        return fistName+ ' design the best websites'

        case 'driver':
        return fistName+' drive car in algers'
        
        default:
        return    fistName+ ' have no job yet'
    }
}

console.log(whatDoYouDou('designer', 'jugurtha'));
console.log(whatDoYouDou('teacher', 'jugurtha'));
console.log(whatDoYouDou('other', 'jugurtha'));*/



/******************************
 * Arrays 
 * ****************************
 */

 /*var names = ['taleb', 'nassim', 'saidj'];
 var ages = new Array(1990, 1985, 1986);

 console.log(names);
 console.log(ages);

 console.log(names.length);
 console.log(ages.length);

 names[2] = 'idir';
 names[names.length]= 'kadi';
 console.log(names);

 names.push(true); // push: add an element in the end of arrays
 console.log(names);

 names.unshift('Mr.'); // unshift: add an element in the start of arrays
 console.log(names);

 names.pop(); // pop: delete an element in the end of arrays
 console.log(names);

 names.shift(); //shift : delete add an element in the beggening of arrays
 console.log(names);

 console.log(names.indexOf('idir')); /*****indexOf(?): return the index of an ellement in the arrays
                                      if therse not it return -1
                                     
console.log(names);

var isThere = names.indexOf('nassim') === -1 ? 'nassim est absent' : 'Nassim est la';
console.log(isThere);*/

// solution of the exercises

/*var tipWaiter = function (bill){

        var percentage;
        if (bill < 50){
            percentage = .2;
        }  

        else if (bill >= 50 && bill < 200){
            percentage = .15;
        }     

         else {
             percentage = .1;
         }    
        return bill * percentage;
    }


var trips = new Array(tipWaiter(124), tipWaiter(48), tipWaiter(268));
console.log('******the trips for respectevly 124, 48, and 286 bills are:********');
console.log(trips);


var finalPaidAmounts = [124+trips[0], 48+trips[1], 286+trips[2]];
console.log(finalPaidAmounts); */



/************************
 * objects and properties
 ***********************/

// object literal
/*var john = {
    fistName : 'taleb',
    lastName : 'jugurtha',
    job : 'informatics',
    isMaried : false,
}

console.log(john);
console.log(john.fistName);
console.log(john['isMaried']);

john.isMaried = true;
console.log(john['isMaried']);

// object with new object syntax
var Jane = new Object ();
    Jane.fistName = 'styve';
    Jane.lastName = 'jane';
    Jane.job = 'teacher';
    Jane.isMaried = true;

    console.log(Jane);*/
    




/*****************************
 * Objects and method
 *****************************/


/*var john = {
    fistName : 'taleb',
    lastName : 'jugurtha',
    birthday : 1985,
    job : 'informatics',
    isMaried : false,

    calulateAge : function() {
        return this.age = 2020 - this.birthday;
    }
}

john.calulateAge();
console.log(john); */

//solution of the exercises

/*var Mark = {

    fullName : ' Mark Millner',
    mass : 85,
    height : 1.25,

    calculateBmi : function () {
    return this.bmi = this.mass / (this.height * this.height); 
    }
};

var Jhon = {

    fullName : ' John killer',
    mass : 85,
    height : 1.25,

    calculateBmi : function () {
    return this.bmi = this.mass / (this.height * this.height); 
    }
};

Jhon.calculateBmi();
console.log(Jhon.bmi);
Mark.calculateBmi();
console.log(Mark.bmi);

if (Jhon.bmi > Mark.bmi){
    console.log('the heithest Bmi is '+Jhon.fullName+' with '+Jhon.bmi);

}else if (Jhon.bmi < Mark.bmi){
    console.log('the heithest Bmi is '+Mark.fullName+' with '+Mark.bmi);

}else {
    console.log(Jhon.fullName+' and '+Jhon.bmi+' have equal Bmi');
}*/


/**************************
 * Loops and iteration
 *************************/

 var jhon = {
     
     fullName : 'jhon stiwart',
     billValues : [124, 48, 268, 180, 42],
     tipps :  [ ],
     finalPaid : [ ],

      tipCalculator : function (){

        var parcentage;
        
        for (i = 0; i < 5; i++){

            if ( this.billValues [i] < 50){

                parcentage = .2;   // calculate the tips for each bill
            }
            else if ( this.billValues[i] <= 200 && this.billValues[i] >= 50 ){
                
                parcentage = .15;   // calculate the tips for each bill
            } 
            else {

                parcentage = .15;   // calculate the tips for each bill
                
            } 

                this.tipps[i] = this.billValues[i] * parcentage;
                this.finalPaid[i] = this.tipps[i] + this.billValues[i];
        }

     }

 };


 var mark = {
     
    fullName : 'mark rubert',
    billValues : [124, 128, 268, 180, 200],
    tipps :  [ ],
    finalPaid : [ ],

     tipCalculator : function (){

       var parcentage;
       
       for (i = 0; i < 5; i++){

           if ( this.billValues [i] < 50){

               parcentage = .2;   // calculate the tips for each bill
           }
           else if ( this.billValues[i] <= 200 && this.billValues[i] >= 50 ){
               
               parcentage = .15;   // calculate the tips for each bill
           } 
           else {

               parcentage = .15;   // calculate the tips for each bill
               
           } 

               this.tipps[i] = this.billValues[i] * parcentage;
               this.finalPaid[i] = this.tipps[i] + this.billValues[i];
       }

    }

};

 function averageCalculator (tipps){
     var sum = 0;
     for (i = 0; i < tipps.length ; i++){
         sum = sum + tipps[i];
     }

     return sum / tipps.length;
 }

 jhon.tipCalculator();
 mark.tipCalculator();
 console.log(jhon, mark);
 
 // calculate average for each tipps 

 jhon.average = averageCalculator(jhon.tipps);
 mark.average = averageCalculator(mark.tipps);
 console.log(jhon, mark);

 if (jhon.average > mark.average){
     console.log('jhon payed a heihest tips');
 }else {
    console.log('mark payed a heihest tips');
 }
































































































































































