
//array with pruducts
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
    name: 'Converse Chuck 70 Counter Climate',
    price: '120',
    model: 'converse',
    description: "The Chuck 70 Counter Climate reflects the duality of the creative explorer. Dark outdoor colors and small doses of vibrant pop colors make this shoe versatile for outdoor and city life."
});



//Selectors
const userMenuDesktop=document.querySelector('.desktop-menu');
const userEmail=document.querySelector('.navbar-email');
const burguerMenuIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const cartMenuIcon=document.querySelector('.navbar-shopping-cart');
const closeIconProductDetail=document.querySelector('.product-detail-close')
const cartMenu=document.querySelector('#cartContainer');
const cardContainer=document.querySelector('.cards-container');
const productDetailContainer=document.querySelector('#productDetail');

let productSelect=null;


//events to opens menus (userMenu, burguermenu in mobile, cartmenu)
userEmail.addEventListener("click",function(){toggleMenu(userMenuDesktop)});
burguerMenuIcon.addEventListener("click", function(){toggleMenu(mobileMenu)});
cartMenuIcon.addEventListener("click",function(){toggleMenu(cartMenu)});

closeIconProductDetail.addEventListener("click",closeProductDetailAside);

//function to open menus
function toggleMenu(elemento){

    if(elemento==userMenuDesktop){
        mobileMenu.classList.add("inactive");
        cartMenu.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
        userMenuDesktop.classList.toggle("inactive");
    }
    else if(elemento==mobileMenu){
        userMenuDesktop.classList.add("inactive");
        cartMenu.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    }
    else if(elemento==cartMenu){
        userMenuDesktop.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
        cartMenu.classList.toggle("inactive");
    }

}


function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}



//Function to render products with iteration of array
function renderProducts(arr){
    for (product of arr){

        const productCard=document.createElement('div');
        productCard.classList.add('product-card');

        const divCanvas=document.createElement('div');
        divCanvas.classList.add('canvas-container');

        const productCanvas=document.createElement('canvas');
        productCanvas.id='webgl'+arr.indexOf(product);

        divCanvas.append(productCanvas);
        // productImg.addEventListener('click',openProductDetailAside); ESTE FUNCIONA
        
        const productDescription=document.createElement('p');
        productDescription.innerText=product.description;

        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv=document.createElement('div');



        const productPrice=document.createElement('a');
        productPrice.innerText='$'+product.price;
        productPrice.setAttribute('href','./productDetail.html?product='+arr.indexOf(product))
        const productName=document.createElement('a');
        productName.innerText=product.name;
        productName.setAttribute('href','./productDetail.html?product='+arr.indexOf(product))


        //productInfoDiv.setAttribute('href','./productDetail.html')
        productInfoDiv.append(productPrice,productName);

        const productInfoFigure=document.createElement('figure');

        const icon=document.createElement('img');
        icon.setAttribute('src','./src/icons/bt_add_to_cart.png');

        productInfoFigure.appendChild(icon);


        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(divCanvas,productInfo);

        //add ID to each product to show their detail product
        productCard.setAttribute('id','product');

        cardContainer.appendChild(productCard);

        
    }
}

renderProducts(productList);