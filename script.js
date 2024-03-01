let color = [
     "red",
     "green",
     "pink",
     "lightgreen",
     "purple",
     "cyan",
     "black",
     "voilet",
     "blue",
     "yellow",
     "purple",
     "orange",
     "grey",
     "lemon",
   ];
   
   let circle = document.querySelector(".circle");
   let shape = document.querySelector("#shape");
   
   let changeColorBtn = document.querySelector(".changeColor");
   let changeShapeBtn = document.querySelector(".changeShape");
   
   const selectRandomIndex = () => {
     return Math.floor(Math.random()*color.length)
   }
   
   changeColorBtn.addEventListener("click",()=>{
     circle.style.backgroundColor = color[selectRandomIndex()]
   })
   
   let isTriangle = false;
   
   changeShapeBtn.addEventListener("click",()=>{
     if(isTriangle){
       //square
      shape.classList.remove("triangle"); 
      shape.classList.add("square"); 
       isTriangle = false;
     }else{
       //triangle
        shape.classList.remove("square"); 
        shape.classList.add("triangle"); 
       isTriangle = true;
     }
   })
   