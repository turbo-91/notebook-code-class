const log = document.querySelector('[data-js="console"]')
const dark = document.querySelector('[data-js="dark"]')
const light = document.querySelector('[data-js="light"]')
const toggle = document.querySelector('[data-js="toggle"]')
const pg = document.querySelector('p')

const exit = document.querySelector('[data-js="exit"]')

log.addEventListener("click",function(){
   console.log("Button clicked!!!") 
})

dark.addEventListener("click", function(){
     pg.classList.add("dark")
})

light.addEventListener("click", function(){
     pg.classList.remove("dark")
})

toggle.addEventListener("click", function(){
     pg.classList.toggle('dark')
})

exit.addEventListener("mouseover", toggleFontSize)

function toggleFontSize(){
    pg.classList.toggle("bigger")
}



