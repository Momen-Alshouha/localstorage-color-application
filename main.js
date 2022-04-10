let lis = document.querySelectorAll("ul li");
let myExp = document.querySelector(".experiment")

if(localStorage.getItem("color")) {
  myExp.style.backgroundColor = localStorage.getItem("color");
  lis.forEach(li=>{
    li.classList.remove("active")
    });
    document.querySelector(`[data-color="${localStorage.getItem("color")}"]`).classList.add("active");
    
}

lis.forEach((li) => {
  li.addEventListener("click", (e)=> {
    let myColor = e.currentTarget.dataset.color;
   lis.forEach(li=>{
    li.classList.remove("active")

    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color",myColor);
    myExp.style.backgroundColor = myColor;
  });
});