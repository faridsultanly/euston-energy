const compProfile = document.querySelector('#compProfile');
const products = document.querySelector('#products');
const globalPresence = document.querySelector('#globalPresence');
const contacts = document.querySelector('#contacts');
const navBtn = document.querySelector('#navBtn');
window.addEventListener('load',window.scrollTo(0,0))
let positions = [
    625,
    1030,
    1429,
    2500
];
if(screen.width <=900){
    positions = [
        713,
        1260,
        1798,
        2800
    ];
}

function addClass(i){
    for(let j = 0; j <navs.length; j++){
        navs[j].classList.remove('active_nav')

    }
    navs[i].classList.add('active_nav')
}
const navs = document.querySelectorAll('.nav_link');
for(let i = 0; i < navs.length; i++){
    navs[i].addEventListener('click', (e)=>{
        e.preventDefault();
        window.scrollTo(0, positions[i]);
        addClass(i);
        navBtn.checked=false
    })
}

if(screen.width >900){
    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 500 &&window.scrollY <= 1025){
            addClass(0)
        }else if(window.scrollY > 1025 && window.scrollY <= 1430){
            addClass(1)
        }else if(window.scrollY > 1430 && window.scrollY <= 1930){
            addClass(2)
        }else if(window.scrollY > 1930){
            addClass(3)
        }else{
            addClass(9)
        }
    })
}