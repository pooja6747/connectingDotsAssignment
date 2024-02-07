const img1 = document.querySelector('.ai1')
const img2 = document.querySelector('.ai2')
const img3 = document.querySelector('.ai3')


img1.addEventListener('mouseover',()=>{
    document.querySelector('.rr1').style.backgroundColor = "#131313"
    document.querySelector('.rr1').style.color = "#fff"

})

img1.addEventListener('mouseout',()=>{
    document.querySelector('.rr1').style.backgroundColor = "#3498db"
    document.querySelector('.rr1').style.color = "#000"

})

img2.addEventListener('mouseover',()=>{
    document.querySelector('rr2').style.backgroundColor = "#131313"
    document.querySelector('rr2').style.color = "#fff"

})

img2.addEventListener('mouseout',()=>{
    document.querySelector('rr2').style.backgroundColor = "#3498db"
    document.querySelector('rr2').style.color = "#000"

})

img3.addEventListener('mouseover',()=>{
    document.querySelector('rr3').style.backgroundColor = "#131313"
    document.querySelector('rr3').style.color = "#fff"

})

img3.addEventListener('mouseout',()=>{
    document.querySelector('rr3').style.backgroundColor = "#3498db"
    document.querySelector('rr3').style.color = "#000"

})



