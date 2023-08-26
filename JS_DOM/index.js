
// function eventFunction () {
//     console.log("i have clicked on document");
// }

// document.addEventListener('click',eventFunction);
//document.removeEventListener('click',eventFunction);

// const content = document.querySelector('#wrapper');

// content.addEventListener('click',function(event){
//     console.log(event);
// })

// let links = document.querySelectorAll('a');
// let thirdLink= links[2];

// thirdLink.addEventListener('click',function(event) {
//     event.preventDefault();
//     console.log("MAZA AYA ACHA LAGA");
// })

// let myDiv = document.createElement('div');
// function paraStatus(event) {
//     console.log(' para' + event.target.textContent);   
// }
// myDiv.addEventListener('click',paraStatus);//on whole div listener will execute 
// for(let i=1;i<=100;i++) {
//     let newElement= document.createElement('p');
//     newElement.textContent=' This is para '+ i;
  // newElement.addEventListener('click',paraStatus);//listener will execute only on new element
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


let element = document.querySelector('#wrapper');

element.addEventListener('click',function(event){
  if(event.target.nodeName==='SPAN') {
  console.log('span pr click kiya hai '+ event.target.textContent);
  }
});

 
