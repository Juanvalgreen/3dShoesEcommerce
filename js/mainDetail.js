
//Selectors
const userMenuDesktop=document.querySelector('.desktop-menu');
const userEmail=document.querySelector('.navbar-email');
const burguerMenuIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const cartMenuIcon=document.querySelector('.navbar-shopping-cart');
//const closeIconProductDetail=document.querySelector('.product-detail-close')
const cartMenu=document.querySelector('#cartContainer');
const cardContainer=document.querySelector('.cards-container');
//const productDetailContainer=document.querySelector('#productDetail');
let productSelect=null;


//events to opens menus (userMenu, burguermenu in mobile, cartmenu)
userEmail.addEventListener("click",function(){toggleMenu(userMenuDesktop)});
burguerMenuIcon.addEventListener("click", function(){toggleMenu(mobileMenu)});
cartMenuIcon.addEventListener("click",function(){toggleMenu(cartMenu)});

//closeIconProductDetail.addEventListener("click",closeProductDetailAside);

//function to open menus
function toggleMenu(elemento){

    if(elemento==userMenuDesktop){
        mobileMenu.classList.add("inactive");
        cartMenu.classList.add("inactive");
        userMenuDesktop.classList.toggle("inactive");
    }
    else if(elemento==mobileMenu){
        userMenuDesktop.classList.add("inactive");
        cartMenu.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    }
    else if(elemento==cartMenu){
        userMenuDesktop.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        cartMenu.classList.toggle("inactive");
    }

}