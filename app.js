const icon= document.querySelector(".icon");
const menu= document.querySelector(".navMenu");

function toggle() {
  menu.classList.toggle("active");
}

icon.addEventListener("click", toggle);

for(i=0; i<10; i++){
  console.log(i)
}