
let mybox = document.querySelector('#mygallery')

mybox.addEventListener("click", function () {
    let prev = document.querySelector('.sl-prev')
    let next = document.querySelector('.sl-next')
    prev.innerHTML = "" 
    next.innerHTML = ""
    
})
let li = document.querySelectorAll('ul.menu-items li')

li.forEach(element => {
    element.addEventListener('click', function() {
        console.log('jdj');
    })
});