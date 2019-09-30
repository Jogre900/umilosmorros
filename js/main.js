'use strict'
// --MENU--
function alerta(){
    let navbar = document.getElementById('nav-bar');
    navbar.classList.toggle('nav-bar-open');
}
//STICKY
const menu = document.getElementById('nav-bar');
const altura = menu.offsetTop;
    
    function fixedNav(){
        if(window.scrollY >= altura){
            document.body.style.paddingTop = menu.offsetHeight +'px'; 
            document.body.classList.add('fixed-nav');
        }else{
            document.body.style.paddingTop = 0;
            document.body.classList.remove('fixed-nav')
        }
    }
    window.addEventListener('scroll', fixedNav);

//--SLIDER--
var item = 0;
const rigth = document.getElementById('adelante'); 
const left = document.getElementById('atras');

rigth.addEventListener('click', () => {changeBox(1)});
left.addEventListener('click', () => {changeBox(2)});

const sliderBox = document.querySelectorAll('.slider-box');

function changeBox(n, silderBox){
    if(n == 1){
        if(item == 2){
            item = 0;
        }else{
            item++;
        }
    }else{
        if(item == 0){
            item = 2;
        }else{
            item--;
        }
    }
    for(let i = 0; i < sliderBox.length; i++){
        sliderBox[i].style.display = 'none';
    }
    sliderBox[item].style.display = 'block';
}

//BUSCAR
let search = document.getElementById('search');
search.addEventListener('click', () => {
    
        alert("Esto aun no funciona");
                  
});