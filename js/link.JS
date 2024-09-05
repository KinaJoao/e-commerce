//LINK
const uxElementLink = document.querySelectorAll('header img,' + '.shopCar');
uxElementLink[0].onclick = ()=>{
    window.location.href = 'https://e-commerce-tau-indol.vercel.app/';
}

uxElementLink[1].onclick = ()=>{
    window.location.href = 'carrinho.html';
}
mask = document.querySelector('.mask')
menu = document.querySelector('.menu');
btnMenu = document.querySelectorAll('header>:last-child,' + '.menu>:first-child');
btnMenu[0].onclick = ()=>{
    mask.style.display = 'flex'
    menu.classList.add('show')
}
btnMenu[1].onclick = ()=>{
    mask.style.display = 'none'
    menu.classList.remove('show')
}
