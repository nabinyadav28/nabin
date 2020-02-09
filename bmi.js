//var massMark = 50;
//var heightMark =1.5;

//var massJohn = 60;//kg
//var heightJohn=1.7;//m

//var BMIMark = massMark /(heightMark*massMark);
//var BMIJohn = massJohn /(heightJohn*massJohn);
//if(BMIMark > BMIJohn){














//== :check the values
// === : check the values and the datatypes
 var x = 20;
 var y = '20';
 if(x==y){
     console.log('both are same');
 }
 else{
     console.log('both are not same');
 }

 //Ternary operators
 var age = 20;
 age >= 20 ? console.log( ' drink water.') : console.log('drink juice.');
 var drink = age >= 20 ? 'water' : 'juice';
 console.log(drink);
 if(age >= 20){
     var drink = 'water';
 }
 else{
     var drink = 'juice';
 }



 //Switch statement
 var job = 'instructor';
 switch (job){

     case 'teacher':
     case 'instructor':
         console.log( 'teaches how to code');
         break;
     case 'driver':
         console.log('drives an uber in Nepal');
         break;
     case 'designer':
         console.log( 'design beautiful websites');
         break;
     default:
         console.log('does something else');

 }


 //falsy value:undefined,0,null,NaN
 //Truthy values: Not falsy values

 var height;
 height = 23;//put 0
 if(height){
     console.log("defined");
 }
 else{
     console.log("not defined");
 }


 if(height || height === 0){
     console.log('variable is defined')
 }
 else{
     console.log('variable has not been defined');
 }