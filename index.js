
const navbarElement=document.querySelector('.navbar')
const hamElement=document.querySelector('.ham')
const closeElement=document.querySelector('.close')
const ulelement=document.querySelector('.ul')

hamElement.addEventListener("click",(e)=>{
    e.preventDefault();
    ulelement.classList.toggle('active');
    closeElement.classList.toggle('closeactive')
})
closeElement.addEventListener("click",(e)=>{
    e.preventDefault()
    ulelement.classList.toggle('active')
    closeElement.classList.toggle('closeactive')
})
