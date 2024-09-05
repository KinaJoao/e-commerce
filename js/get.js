const painelCart = document.querySelector('.maincar');
uxElement = document.querySelectorAll('header img,' + '.shopCar');
const numberCar = uxElement[1].querySelectorAll('.shopCar ion-icon:after,' + 'p');
const topLabel = document.querySelector('.total')
//GET
const getData = JSON.parse(localStorage.getItem('E-COMMERCE'));
getData.forEach((element) => {
    //CREATE ELEMENT
    const article = document.createElement('article');
    article.classList.add('productcar');
    article.id = element.id
    const pId = document.createElement('p')
    const pName = document.createElement('p')
    const pPrice = document.createElement('p')
    const div = document.createElement('div')
    div.classList.add('div')
    const btnRemove = document.createElement('button')
    btnRemove.innerText = '-'
    const pNumber = document.createElement('p')
    btnRemove.classList.add('btnRemove');
    sub(pNumber, btnRemove, element.total, element.price)
    pNumber.innerText = '1'
    const btnAdd = document.createElement('button')
    sum(pNumber, btnAdd, btnRemove, element.total)
    btnAdd.innerText = '+'
    btnAdd.classList.add('btnAdd');
    const form = document.createElement('form')
    const btnRemoveProduct = document.createElement('button');
    btnRemoveProduct.id = element.id
    btnRemoveProduct.innerText = 'Excluir'
    btnRemoveProduct.classList.add('remove')
    btnRemoveProduct.type = 'submit'
    delectProduct(btnRemoveProduct, element)
    

    pId.innerText = element.id
    pName.innerText = element.name
    pPrice.innerText = element.price

    div.appendChild(btnRemove)
    div.appendChild(pNumber)
    div.appendChild(btnAdd)
    form.appendChild(btnRemoveProduct)
    article.appendChild(pId);
    article.appendChild(pName)
    article.appendChild(pPrice)
    article.appendChild(div)
    article.appendChild(form)

    painelCart.append(article)
    numberCar[1].innerText = element.total + '.000.00 kz'
    topLabel.innerText = 'Total do seu carrinho ' + element.total + '.000.00 kz'
    document.querySelector(".shopCar ion-icon").setAttribute('data-content', element.id);

})

mask = document.querySelector('.mask')
btnEndShop = document.querySelector('.bodyCar .divTop .button');
formPay = document.querySelector('.form ')
const btnCloseForm = document.querySelector('.form>:first-child');
btnEndShop.onclick = ()=>{
    mask.style.display = 'flex'
    mask.append(formPay)
    formPay.style.display = 'flex'
}
btnCloseForm.onclick = ()=>{
    mask.style.display = 'none'
    formPay.style.display = 'none'
}


function sum(element, btn, btn2, preco) {
    btn.onclick = () => {
        n = element.innerText;
        const soma = parseInt(n) + 1;
        element.innerText = soma
        btn2.disabled = false;
        const newTotal = soma*preco

        topLabel.innerText = 'Total do seu carrinho ' + newTotal + '.000.00 kz'
    }
}

function sub(element, btn, preco, p) {
    btn.onclick = () => {
        n = element.innerText;
        const soma = parseInt(n) - 1;
        if(soma == 0){
            btn.disabled = true;
        }else{
            btn.disabled = false;
            element.innerText = soma
        }
    }
}



function delectProduct(btn, elem) {
    btn.onclick = () => {
        console.log('delete');
        if(btn.id == elem.id){
            getData.pop(elem);
            console.log(getData);
            alert('Procuto Deletado!')
            localStorage.setItem('E-COMMERCE', JSON.stringify(getData));
            document.querySelector(".shopCar ion-icon").setAttribute('data-content', element.id)
        }
        else{
           return false
        }
    }
}