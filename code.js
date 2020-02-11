
let tabPrix=[120,80,200]


function setpriceelmt(){
document.getElementById("sneakersprice").innerHTML=(tabPrix[0]+'$')
document.getElementById("socksprice").innerHTML=(tabPrix[1]+'$')
document.getElementById("backpackprice").innerHTML=(tabPrix[2]+'$')
}
setpriceelmt()
// const qte=Array.from(document.querySelectorAll('.elmQte'))
const del =Array.from(document.querySelectorAll(".fas fa-times iconcolorred"))
del.map(el=>el.addEventListener('click',()=>{
    var t = el.parentNode.parentNode
    t.parentNode.removeChild(t)
    var tot=0
    var i=0
    const qte=Array.from(document.querySelectorAll('.elmQte'))
        qte.forEach(function(z){
            tot=tot + (z.innerHTML*tabPrix[i])
            i++
        })
        document.getElementById("Total").innerHTML=(tot+'$')
}))

function removeelm(a){
    document.getElementById(tabC[a]).remove()
    tabQte[a]=0
    
}

const heart= Array.from(document.querySelectorAll('.fa-heart'))

heart.map(el=>el.addEventListener('click',()=>{
    el.style.color==='red'?el.style.color='black':el.style.color='red'
}))
const addeven=Array.from(document.querySelectorAll('.fa-plus-circle'))
addeven.map(el=>el.addEventListener('click',()=>{
    var tot=0
    var i=0
    var x=parseInt(el.nextSibling.innerHTML) + 1
    el.nextSibling.innerHTML=x
    const qte=Array.from(document.querySelectorAll('.elmQte'))
    qte.forEach(function(z){
        tot=tot + (z.innerHTML*tabPrix[i])
        i++
    })
    document.getElementById("Total").innerHTML=(tot+'$')
}))
const remeven=Array.from(document.querySelectorAll('.fa-minus-circle'))
remeven.map(el=>el.addEventListener('click',()=>{
    var tot=0
    var i=0
    if(el.previousSibling.innerHTML>0){
        var x=parseInt(el.previousSibling.innerHTML) -1 
        el.previousSibling.innerHTML= x
        const qte=Array.from(document.querySelectorAll('.elmQte'))
        qte.forEach(function(z){
            tot=tot + (z.innerHTML*tabPrix[i])
            i++
        })
        document.getElementById("Total").innerHTML=(tot+'$')
    }  
}))