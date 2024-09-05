const main = document.querySelector('main');
const uxCart = main.querySelectorAll('.product');
//.shopCar ion-icon:after
uxElement = document.querySelectorAll('header img,' + '.shopCar');
const car = document.querySelector('.shopCar')
const numberCar = uxElement[1].querySelectorAll('.shopCar ion-icon:after,' + 'p');
const arrayProduct = [];

var totalPrice = 0;


//POST
uxCart.forEach((element)=>{
    const btnAdd = element.querySelector('button');
    btnAdd.onclick = ()=>{
        car.style.opacity = 1;
        productName = element.querySelector('#productName').innerText;
        productPrice = element.querySelector('#productPrice').innerText;

        totalPrice = totalPrice + parseInt(productPrice);
        const productData = {
            id: arrayProduct.length + 1,
            name: productName,
            price: productPrice,
            total: totalPrice
        }
        arrayProduct.push(productData);
        numberCar[1].innerText = totalPrice + '.000.00 kz'
        document.querySelector(".shopCar ion-icon").setAttribute('data-content', arrayProduct.length);
        localStorage.setItem('E-COMMERCE', JSON.stringify(arrayProduct));
    }
})


