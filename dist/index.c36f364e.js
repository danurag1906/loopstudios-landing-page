const navdivElement = document.querySelector(".navdiv");
const hamElement = document.querySelector(".ham");
const closeElemet = document.querySelector(".close");
hamElement.addEventListener("click", (e)=>{
    e.preventDefault();
    navdivElement.classList.add("active");
    hamElement.style.display = "none";
    closeElemet.style.display = "block";
});
closeElemet.addEventListener("click", (e)=>{
    e.preventDefault();
    navdivElement.classList.remove("active");
    hamElement.style.display = "block";
    closeElemet.style.display = "none";
});

//# sourceMappingURL=index.c36f364e.js.map
