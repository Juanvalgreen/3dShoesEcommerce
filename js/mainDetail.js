//arr of products
const productList=[];
productList.push({
    name: '1 Retro High OG',
    price: '229',
    model: 'retro1',
    description: "Familiar but always fresh, the iconic Air Jordan 1 is remastered for today's sneakerhead culture. This Retro High OG version goes all in with premium leather, comfortable cushioning and classic design details."
});
productList.push({
    name: 'Nike Up Tempo',
    price: '160',
    model: 'supreme_x_Nike_Air_More_Uptempo',
    description: "The Nike Air More Uptempo is a popular basketball sneaker that debuted in 1996. The “AIR” lettering draws inspiration from oversized objects from 90s graffiti and pop art. It was designed by Wilson Smith and made famous by Scottie Pippen in the late '90s. "
});
productList.push({
    name: 'Converse Chuck 70',
    price: '120',
    model: 'converse',
    description: "The Chuck 70 Counter Climate reflects the duality of the creative explorer. Dark outdoor colors and small doses of vibrant pop colors make this shoe versatile for outdoor and city life."
});

const currentUrl = window.location.search;
const urlParams=new URLSearchParams(currentUrl);

let productSelect=null;

productSelect=urlParams.get('product');









//Selectors to open menus
const userMenuDesktop=document.querySelector('.desktop-menu');
const userEmail=document.querySelector('.navbar-email');
const burguerMenuIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const cartMenuIcon=document.querySelector('.navbar-shopping-cart');
const cartMenu=document.querySelector('#cartContainer');
const cardContainer=document.querySelector('.cards-container');

//selector to render info
const title=document.querySelector('.title_product-info');
const description=document.querySelector('.description_product-info');
const price=document.querySelector('.price_product-info');

title.innerHTML=productList[productSelect].name;
price.innerHTML='$'+productList[productSelect].price;
description.innerHTML=productList[productSelect].description;
















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

