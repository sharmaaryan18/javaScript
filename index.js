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
    
//         // draw: function() {
//         //     console.log('drawing rectangle');
//         // }
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
// console.log(dest);

// src.a++;
// console.log(dest);

//Object #2Assign
let src = {   
    a:10,
    b:20,
    c:30
 };

let dest = Object.assign({},src);
console.log(dest);
src.a++;
console.log(dest);

// //Oject colong#3
// let src= {    
//          a:10,
//          b:20,
//          c:30
//      };

//      let dest={...src};
//      console.log(dest);

//      src.a++;
//      console.log(dest);

