const sluitKnop = document.querySelector('#sluit-knop');
const openKnop = document.querySelector('#open-knop');
const navigatie = document.querySelector('.navigatie');

const toggleNavbar = () => {
    if(!navigatie.classList.contains('open')){
        navigatie.classList.add('open')
    }else{
        navigatie.classList.remove('open')
    }
}

sluitKnop.addEventListener("click", toggleNavbar)
openKnop.addEventListener("click", toggleNavbar)