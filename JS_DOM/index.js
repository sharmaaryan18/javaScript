console.log(document.querySelector("p"));

 var a= document.querySelector("p");
 console.log(a);

 var b= document.querySelector("#wrapper");
 console.log(b);

 a.innerHTML="Lets study DOMS";

 a.style.backgroundColor="Red";

 var a= document.querySelector("p");
a.addEventListener("click",function() {
  a.innerHTML="TU NHI TOH KOI AUR SHI"
  a.style.color="yellow"
  a.style.backgroundColor="#000"
})


//BULB
// var bulb = document.querySelector("#bulb")
// var btn = document.querySelector("button")
// var flag =0;
// btn.addEventListener("click",function() {
//   if (flag==0) {
//     bulb.style.backgroundColor="yellow";
//     console.log("clicked")
//     flag=1
//   }else {
//     bulb.style.backgroundColor="white";
//     console.log("Again clicked")
//     flag=0
//   }
// })














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

 

 
