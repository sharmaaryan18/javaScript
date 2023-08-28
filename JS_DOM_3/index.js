// //adding 1000para
// const t1 = performance.now();
// for(let i=0;i<100;i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para '+ i;

//     document.body.appendChild(newElement);
// }

// const t2 = performance.now();
// console.log("this took "+(t2-t1)+" ms");


// //OPTIMISING
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1;i<100;i++) {
//     let element = document.createElement('p');
//     element.textContent = 'This is Para '+ i;

//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("this took "+(t4-t3)+" ms");



// let fragment = document.createDocumentFragment();
// for(let i=0;i<100;i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para '+ i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);// 1 REFLOW 1 REPAINT





// function addPara() {
//     let para =document.createElement('p');
//     para.textContent='JS IS SINGLE THREADED LANGUAGE';
//     document.body.appendChild(para);
// }




// function aappendNewMessage() {
//     let para =document.createElement('p');
//     para.textContent='HOw are u?';
//     document.body.appendChild(para);
// }
// addPara();
// aappendNewMessage();