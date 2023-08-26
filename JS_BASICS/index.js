// console.log('chaliye shuru krte hai');
// //object create
// let rectangle = {
//     length:1,
//     breadth:2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// let rectangle1 = {
//     length:1,
//     breadth:2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// let rectangle2 = {
//     length:1,
//     breadth:2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

//FACTORY FUNCTION- creates object and then return the object 

// function createRectangle() {
//     return rectangle = {
//         length:1,
//         breadth:2,
    
//         // draw: function() {
//         //     console.log('drawing rectangle');
//         // }
//         //OR

//         draw() {//method
//             console.log('drawing rectangle'); 
//         }
//     };
// }



// let rectangleObj1= createRectangle();


// function createRectangle(len,bre) {
//     return rectangle = {
//         length:len,
//         breadth:bre,
    
//         draw: function() {
//             console.log('drawing rectangle');
//         }
//         //OR

//         draw() {//method
//             console.log('drawing rectangle'); 
//         }
//     };
// }
// let rectangleObj1= createRectangle(5,4);
// let rectangle2= createRectangle(10,20);
// let rectangle3= createRectangle(8,67);

// //CONSTRUCTOR FUNCTION
// //PASCAL NOTATION- FIRST LETTER OF EVERY WORD IS CAPITAL  NumberOfStudents

// function Rectangle(len,bre) {
//     this.length=len;
//     this.breadth=bre;

//     this.draw = function(){
//         console.log('drawing');
//     }
// }

// //object creation using  constructor function
// let rectangleObject = new Rectangle(99,100);

// //Dynamic nature of objects new objects can be inserted and old can be deleted

// rectangleObject.color='yellow';


// delete rectangleObject.color;

// console.log(rectangleObject);
  
//Primitive PRIMITIVE are copied by their value
// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);

//REFERENCE REFERECNCES ARE COPIED BY THEIR ADDRESS/reference
// let a = {value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

//Primitive
//   let a=10;
//   function  inc(a) {
//     a++;
// }
// inc(a);
// console.log(a);

//Reference
// let a={value:10};

// function inc(a) {
//     a.value++;
// }
// inc(a);
// console.log(a.value);

//For-in loop
// let rectangle = {
//     length:2,
//     breadth:4
// };
// for(let key in rectangle) {
//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//For-of loop- applied in iterables like maps,arrays
// for(let key of Object.keys(rectangle)) {
//     console.log(key);
// }

// for(let key of Object.entries(rectangle)) {
//      console.log(key);
//     }

//HOw to check property present or not
// if('length' in rectangle) {
//     console.log('present');
// } 
// else{
//     console.log('Absent');
// }

//object cloning-
//
//
//

// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let dest = {};

// for(let key in src) {
//     dest[key]=src[key];
// }


// src.a++;
// console.log(dest);

//Object #2Assign


// let src = {   
//     a:10,
//     b:20,
//     c:30
//  };

//  let src2 = {value: 25};

// let dest = Object.assign({},src,src2); we can also do coloning of  multiple  objects in one objects using assign function
// console.log(dest);
// src.a++;
// console.log(dest);

// //Oject colong#3


// let src= {    
//          a:10,
//          b:20,
//          c:30
//      };

//      let dest={...src};
//      console.log(dest);

//      src.a++;
//      console.log(dest);//There will be no change in dest beacuse of src.a++ 

//String-primitive

// console.log("hello jee");

// let lastName = '  Sharma';//string

// let firstName = new String('Aryan');//Object

//ON CONSOLE
// 
// lastName.length
// 6
// lastName[0];
// 'S'
// lastName.includes('Sh')
// true
// lastName.starts
// undefined
// lastName.startsWith('Sha')
// true
// lastName.endsWith('rma')
// true
// lastName.toUpperCase();
// 'SHARMA'
// lastName.toLocaleLowerCase();
// 'sharma'
// lastName.replace('Sh','K');
// '  Karma'


//TEMPLATE LITERAL
//to movr in next line we use \n
//to print single quote we use  \'

// let message ='This is \n my \' "first" \n message';

// console.log(message);

// //so to OVERCOME THIS TEMPALTE LITERAL IS USED I.E ``

// let lastName = 'Sharma';//string
// let message1 =`
// hii ${lastName}, 
// This is my
// first  message
// Regards,
// AryanSharma`;
// console.log(message1);




//CREATION OF DATE

// let date = new Date();
// console.log(date);

// let date2 = new Date('August 18 2003 7:00');
// console.log(date2);


// let date3 = new Date(2003, 7,18,5);
// console.log(date3);

// date3.setFullYear(2002);
// console.log(date3);




// //ARRAYS

// let numbers = [2,5,8,7,3];
// console.log(numbers);
// //Access the elements
// console.log(numbers[0]);

// //Insertion at end
// numbers.push(10);
// console.log(numbers);

// //Insertion at begin
// numbers.unshift(20);
// console.log(numbers);

// //middle-Splice
// //numbers.splice(starting position of number to be insered,numbers to be inserted);
// numbers.splice(2,0, 'a', 35,'k');
// console.log(numbers);


// //SEARCHING
// console.log(numbers);
// console.log(numbers.indexOf('a'));
// //when item is not there it returns -1


// //we want to vheck number exist in an Array
// if(numbers.indexOf(35)!= -1)//NOt the right way
//     console.log("present");

//     //RIGHT WAY TO SEARCH
//     console.log(numbers.includes(35));
    
//     //ADVANCE WAY TO SEARCH
//     console.log(numbers.indexOf(35,5));
//     //return index of n0. else -1(no. to be searched, starting index from where to be searched)
//Primitives->indecOf, includes



// //For Objects and References we use Callback functions
// let courses = [
//     {no:1, name:'Aryan'},
//     {no:2, name: 'Harsh'}
// ];
// console.log(courses); 

// // console.log(courses.indexOf({no:1,name:'Aryan'}) );
// // it will not work because both the objects are different 
// //CALLBACK FUNCTION->  This function is passed into another function as an arguement which is then evoked  inside the outer function to complete some kind of routine or action.
// //arrayNmae.find(PredicateFunction or CallBackFunction or ComparisonFunction )
// //It returns the object which we are finding else undefined
 
// let course = courses.find(
//     function (course) {
//     return course.name == 'Aryan';
// })
// console.log(course);
// //OR Arrow notation below->Arrow Function
// let course1 = courses.find(
//     (course1) => course1.name == 'Aryan')
//     console.log(course);



    //REMOVING ELEMENT
    //pop()
    //shift()
    //splice()

    // let numbers= [15,32,36,74,85,6,7];
    //  console.log(numbers);
    //  console.log(numbers.pop());
    //  console.log(numbers.shift());
    //  numbers.splice(2,4);

    //  console.log(numbers);



    // let numbers= [15,32,36,74,85,6,7];
    // let numbers2 = numbers;

    // //numbers = []; only numbers will become empty not numbers2. Now numbers will get the empty [](array) and numbers2 will remain same.

    // //TO make both empty
    // //numbers.length=0; MOST PREFERABLE
    // //numbers.splice(0,numbers.length);
    // // while(numbers.length>0){
    // //     numbers.pop();
    // // }

    // console.log(numbers);
    // console.log(numbers2);



//     //COMBINING AND SLICING ARRAYS ON PRIMITIVES

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// let slice = combined.slice(2,5);
// console.log(slice);

// let marks = [20,30,40,50,60,70,80,90];
// //let sliced = marks.slice(2); after index 2 all elements will bw=e sliced
// let sliced= marks.slice(2,5);
// console.log(sliced);



// //SPREAD OPERATOR-> ...
// let first = [1,2,3];
// let second =[4,5,6];

// let combined = [...first, 'a',...second];
// console.log(combined);

// //creting copy
// let another =[...combined];
// console.log(another);


// //ITERATING AN ARRAY
// let arr = [10,20,30,40,50,60];

// for(let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(number){
//     console.log(number);
// });
// arr.forEach(number=>console.log(number));


// //JOINING ARRAYS
// let numbers = [10,20,30,40,50]; 
// const joined = numbers.join(',');
// console.log(joined);

// //SPLLITING ARRAYS
// let message = 'This is my first Message';
// let parts = message.split(' ');
// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);



//  //SORTING ARRAYS

//  let numbers =[10,20,40,70,76,43,54,23];
//  numbers.sort();
//  console.log(numbers);

//  numbers.reverse();
//  console.log(numbers);


// //FILTERING ARRAYS

// let numbers = [4,6,-3,7,-2,6,-5];

//  let filtered =  numbers.filter(value =>value>=0//for +ve values);
// console.log(filtered);

// let filtered1=  numbers.filter(value=>value<=0);//for -ve value
// console.log(filtered1);

// let filtered2=  numbers.filter(value=>value=0);//for 0
// console.log(filtered2);



// //MAPPING ARRAYS
//maps each element of array to something else
// let numbers = [7,8,9,10];
// console.log(numbers);
// let items = numbers.map(value=>'student_no'+value);
//  console.log(items);



// MAPPING WITH OBJECTS

// let numbers = [1,2,-6,-9];

// let filtered = numbers.filter(value=>value>=0);
// let items = filtered.map(function(num) {
//     // let obj = {value:num};
//     // return obj;
//      return  {value:num};
// });
// console.log(items);

//CHAINING
// let items = numbers.filter(value => value>=0).map(num =>({value:num})); 
// console.log(items);




//FUNCTIONS

//Function Declaration
// function run() {
//     console.log('running');
// }
// run();
//HOISTING->It is the process of moving function declaration to the top of file and this is done automatically by jsEngine.

//Function Assignment
  //Named Function Assignment
// let stand = function Walk() {
//     console.log('walking');
// };
// stand();

//   //Anonymous Function Assignment
//   let stand2 = function () {
//     console.log('walking');
// };
//  stand2();

// let jump = stand;
// jump();


//JS IS DYNAMIC

// let x=1;
// x='a';

// console.log(x);

// function sum(a,b) {
//     console.log(arguments);
//     return a+b;
// }

// //console.log(sum(1,2));

// // console.log(sum(1));//output will be not a number 
// // console.log(sum());//output will be not a number
//  console.log(sum(1,2,3,4,5));//first two no. passed will be taken


//For multiple no. of functions
 //function sum(a,b) { or
// function sum() { 
//     let total = 0;
//     for(let value of arguments) 
//         total = total + value;
//     return total;
// }
// let ans = sum(1,2,3,4,5,6);
// console.log(ans);


//REST Operator -> ...

//  function sum(...args) {
//     console.log(args);
//  }
//  sum(1,2,3,4,5,6);

//  function sum(num,value,...args) {
//      console.log(args);
//   }
//   sum(1,2,3,4,5,6);



//DEFAULT PARAMETERS

// function interest(p,r,y) {
//   return p*r*y/100;
// }

// console.log(interest(1000,10,5));

function interest(p,r=5,y=10) {
  return p*r*y/100;
}
console.log(interest(1000,10));//now y will be taken as 10 by default
//All the parameters to the right of first default parameter should be default


//bad practice but u can usee for fun
// function interest(p,r=5,y=10) {
//   return p*r*y/100;
// }
// console.log(interest(1000,undefined,10));



//GETTER SETTER
// getter -> access properties
// setter -> change or mutate properties
let person = {
  fName : 'Aryan',
  lName : 'Sharma', 
  get fullName() {
    return `${person.fName}     ${person.lName}`;
  },

  set fullName(value) {
    if(typeof value !== String) {
      throw new Error("You have not sent String");
    }
    let parts = value.split(' ');
    this.fName = parts[0];
    this.lName = parts[1];
  }
};
// console.log(person);

// function fullName() {
//   return `${person.fName}   ${person.lName}`;
// }   
// console.log(person.fullName);
// person.fullName= 'Harsh Sharma';
// console.log(person.fullName);


//Try and Catch -> Error Handling
// try {
//   person.fullName = 1;
// }
// catch(e) {
//   alert('You have sent a number in FullName');
// }
//try->throw->if error ->try->if error->catch->alert
// try {
//   person.fullName = true;
// }
// catch(e) {
//   alert(e);
// }


//SCOPE

// {
//   let a=5;
//   console.log(a);
// }
// //console.log(a); it will not work out work outside the brackets

// //we can use VAR to overcome it has scope outside the blocks too. if it is defined in function then its scope only in that function.

// {
//   var a=5;
// }
// console.log(a);

// function walk() {
//   var a=5;
// }
// console.log(a);

//if we will use let in place of Var it will give us error
// for(var i =0;i<10;i++) {

// }
//  console.log(i);


// if(true) {
//   var a =5;
// }
// console.log(a);

// function a() {
//   const ab =5;
// }
// const ab =5;

// function b() {
//   const ab =5;
// }     

let arr =[-1,-2,-3,-4];
  // let total =0;
  //  for(let value of arr)
  //   total =total+ value;
  // console.log(total);

  let totalSum = arr.reduce((accumulator,currentValue) => accumulator + currentValue,0);
  console.log("Printing Total Sum: ")
  console.log(totalSum);




