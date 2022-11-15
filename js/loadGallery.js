//arr of products
// const productList=[];
// productList.push({
//     id:0,
//     name: 'Retro 1',
//     price: '120',
//     model: 'retro1',
//     description: "Comfortable e-Bike with the power of a confident ride. Como lets you go with the flow by giving you a full-power, confidence-inspiring, utterly delightful experience on a bike that feels effortless to ride."
// });
// productList.push({
//     id:1,
//     name: 'Nike Up Tempo',
//     price: '220',
//     model: 'nikeUptempo',
//     description: "Samsung Galaxy Tab A7 Lite, the tablet that's made to be shared. With its compact 8.7 screen, Galaxy Tab A7 Lite is perfectly sized for entertainment on the go. Its sturdy metal frame is built to be brought along from the living room to your beach vacation, or wherever you want to take it. Galaxy Tab A7 Lite also simplifies entertainment needs for everyone under your roof, with a powerful processor and plenty of storage."
// });
// productList.push({
//     id:2,
//     name: 'Vans Classic',
//     price: '520',
//     model: 'vans_obj',
//     description: "View your favorite content at four times the resolution of 1080p with the Samsung TU7000 65 Class HDR 4K UHD Smart LED TV."
// });

//var init to start scen
var scene0=null,scene1=null,scene2=null, camera=null, renderer0=null,renderer1=null,renderer2=null, controls0=null,controls1=null,controls2=null, pointLight=null,pointLight2=null;

var shoes=[];

function start(){
    
    initScene();
    animate();


}
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight, false);

}

function initScene(){
    // scene, camera, render
    //create scene

    scene0=new THREE.Scene();
    scene1=new THREE.Scene();
    scene2=new THREE.Scene();
    
       
    //To render 
    const canvas0= document.querySelector('#webgl0');
    const canvas1= document.querySelector('#webgl1');
    const canvas2= document.querySelector('#webgl2'); //call canvas of html
    renderer0 = new THREE.WebGLRenderer({canvas: canvas0});
    
    renderer1 = new THREE.WebGLRenderer({canvas: canvas1});
    renderer2 = new THREE.WebGLRenderer({canvas: canvas2});


    addBasicsInit(scene0);
    addBasicsInit(scene1);
    addBasicsInit(scene2);

    window.addEventListener( 'resize', onWindowResize, false );
    
    loadModel_objAndMtl("./src/models/obj/shoes/"+productList[0].model+"/",productList[0].model,true,scene0);
    loadModel_objAndMtl("./src/models/obj/shoes/"+productList[1].model+"/",productList[1].model,true,scene1);
    loadModel_objAndMtl("./src/models/obj/shoes/"+productList[2].model+"/",productList[2].model,true,scene2);
    
}

function loadModel_objAndMtl(PathGeneralFolder, pahtFile, show,scene) {


    if (show == true) {
        var mtlLoader2 = new THREE.MTLLoader();
        mtlLoader2.setTexturePath(PathGeneralFolder);
        mtlLoader2.setPath(PathGeneralFolder);
        mtlLoader2.load(pahtFile+".mtl", function (materials) {
            materials.preload();

            var objLoader2 = new THREE.OBJLoader();
            objLoader2.setMaterials(materials);
            objLoader2.setPath(PathGeneralFolder);
            objLoader2.load(pahtFile+".obj", function (object) {
                //
                object.position.set(0,0,0);
                object.scale.set(0.2,0.2,0.2);
                //


                
                scene.add(object);
                shoes.push(object);
                console.log(shoes);
                
            });
        });
        

    }

}
function addBasicsInit(scene){

    scene.background=new THREE.Color(0x050101);

    camera= new THREE.PerspectiveCamera(100,window.innerWidth / window.innerHeight, 1, 80);

    scene.add(camera);

    // const size = 10;
    // const divisions = 100;

    // const gridHelper = new THREE.GridHelper( size, divisions,0x000,0xffffff);
    
    // scene.add(gridHelper);

    const light = new THREE.AmbientLight( 0xFCFFF0, 100 ); // soft white light
    scene.add( light );

    pointLight = new THREE.PointLight( 0xFCFFF0, 100, 0 ); 
    pointLight.position.set( 5, 5, 0);
    scene.add( pointLight );


    pointLight2 = new THREE.PointLight( 0xFCFFF0, 100, 0 ); 
    pointLight2.position.set( -5, 5, 0 );
    scene.add( pointLight2 );


    controls0= new THREE.OrbitControls( camera, renderer0.domElement );
    controls1= new THREE.OrbitControls( camera, renderer1.domElement );
    controls2= new THREE.OrbitControls( camera, renderer2.domElement );
    
    camera.position.set(8,2,5);
    
    controls0.update();
    controls1.update();
    controls2.update();


    


            
}





function animate(){

    requestAnimationFrame( animate );
    shoes[0].rotation.y -= 0.01;
    shoes[1].rotation.y -= 0.01;
    shoes[2].rotation.y -= 0.01;



    
    controls0.update();
    controls1.update();
    controls2.update();
    
    renderer0.render(scene0,camera);
    renderer0.setSize(window.innerWidth,window.innerHeight,false);
    renderer1.render(scene1,camera);
    renderer1.setSize(window.innerWidth,window.innerHeight,false);
    renderer2.render(scene2,camera);
    renderer2.setSize(window.innerWidth,window.innerHeight,false);
}

console.log();
