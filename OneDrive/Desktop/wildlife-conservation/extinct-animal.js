// selecting the elements which contain the class panel
const panels=document.querySelectorAll('.panel')
// for reach class panel if there is a click we will add an active class to that element by panel.classList.add('active').
panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses() //removing the active class from existing one
        panel.classList.add('active')
    })
})
// if any other element is clicked then the class active from existing element would be removed
function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}