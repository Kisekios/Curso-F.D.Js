/* Llamada a los items de HTML */

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.detail');
const closeProductDetail = document.querySelector('.product-detail-close');
const imgSelect = document.getElementsByClassName('product-card');
const imgdetail = document.getElementById('imgdetail');
const priceContainerAside = document.getElementById('price');
const namePictureContainerAside = document.getElementById('namePicture');
const detailProductContainerAside = document.getElementById('detailProduct');


/* Variables Globales */


const productList = [];


/* Lectura de eventos en HTML */


navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
closeProductDetail.addEventListener('click', closeDetails);

function renderAsideDetail() {
    for (elemento of imgSelect) {
        elemento.addEventListener('click', function () {
            let nameOfPictureClick
            nameOfPictureClick = this.getAttribute('id')
            const selectedProduct = productList.find(product => product.name === nameOfPictureClick);
            renderInfoDetailAside(selectedProduct);

        })
    }
}


/* Funciones para mostrar/ocultar los items del HTML */


function toggleDesktopMenu() {
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    aside.classList.toggle('inactive');
}

function openProductDetail() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
    renderAsideDetail();
}

function closeDetails() {
    productDetailContainer.classList.add('inactive');
}


/* Redenderizar a HTML */


function renderProducts(arreglo) {
    for (product of arreglo) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.id = product.name

        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }

}

function renderInfoDetailAside(producto) {
    imgdetail.src = producto.image;
    imgdetail.alt = producto.name;
    priceContainerAside.innerText = '$' + producto.price;
    namePictureContainerAside.innerText = producto.name;
    detailProductContainerAside.innerText = "Imagenes de series animadas";

    console.log(producto)
}


/* Listado de productos */


productList.push({
    name: 'Nico Robin',
    price: 120,
    image: "https://i.pinimg.com/736x/90/d9/ca/90d9cada720188c9125047d69e2d940a.jpg"
});

productList.push({
    name: 'D.va',
    price: 120,
    image: "https://i.pinimg.com/564x/32/15/00/321500c73ba47e767a6cb88f4bb5b707.jpg"
});

productList.push({
    name: 'Boa Hancock',
    price: 120,
    image: "https://i.pinimg.com/564x/a6/a7/e6/a6a7e636bb1e97fd4931504136bdf28c.jpg"
});

productList.push({
    name: 'Androide 21',
    price: 120,
    image: "https://i.pinimg.com/564x/15/d9/5d/15d95d61a1a6d702b7dfe6a09c4c5867.jpg"
});

productList.push({
    name: 'Bruñilde',
    price: 120,
    image: "https://i.pinimg.com/564x/26/36/91/26369161d51a7a2a095f23bdbae759f4.jpg"
});

productList.push({
    name: 'Yamato',
    price: 120,
    image: "https://i.pinimg.com/564x/7c/c8/52/7cc852fc55c4bde9a3b6643280390f6e.jpg"
});


/* Llamada a las funciones */


renderProducts(productList);








