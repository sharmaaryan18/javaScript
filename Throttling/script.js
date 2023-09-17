//     // Throttling Function
//     const throttleFunction=(func, delay)=>{
     
//         // Previously called time of the function
//         let prev = 0;
//         return (...args) => {
//           // Current called time of the function
//           let now = new Date().getTime();
       
//           // Logging the difference between previously
//           // called and current called timings
//           console.log(now-prev, delay);
           
//           // If difference is greater than delay call
//           // the function again.
//           if(now - prev> delay){
//             prev = now;
       
//             // "..." is the spread operator here
//             // returning the function with the
//             // array of arguments
//             return func(...args); 
//           }
//         }
//       }

//       document.querySelector("#center")
//       .addEventListener("mousemove", throttleFunction(()=> {
//         //your less repeatetion code
//         document.createElement("newdiv");
//         newdiv.classList.add('imageDiv');
//          document.body.appendChild(newdiv);
//       },400)
     
// );


// Throttling Function
const throttleFunction = (func, delay) => {
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
      // Current called time of the function
      let now = new Date().getTime();

      // Logging the difference between previously
      // called and current called timings
      console.log(now - prev, delay);

      // If the difference is greater than the delay, call
      // the function again.
      if (now - prev > delay) {
          prev = now;

          // "..." is the spread operator here
          // returning the function with the
          // array of arguments
          return func(...args);
      }
  };
};

document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets) => {
  // Create a new div element
  var div = document.createElement("div");
  
  // Add a class to the div
  div.classList.add('imageDiv');
  div.style.left= dets.clientX +  'px';
  div.style.top= dets.clientY + 'px';

  var img = document.createElement("img");
  img.setAttribute("src","https://images.unsplash.com/photo-1694843697790-d384af776f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80");
  div.appendChild(img);

  
  // Append the div to the body
  document.body.appendChild(div);

gsap.to(img,{
  y:"0",
  ease: Power1,
  duration: .6
});

gsap.to(img,{
  y:"100%",
  delay:.6,
  ease: Power2,
});

  setTimeout(function() {
    div.remove();
  },2000)
}, 400));
