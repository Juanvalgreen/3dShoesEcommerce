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


var scene=null, camera=null, renderer=null, controls=null, pointLight=null, pointLigth2=null,model=null;

function onWindowResize(){


    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight,false );

}

function start(){
    
    initScene();
    animate();


}
 
function initScene(){
    // scene, camera, render
    //create scene
    scene=new THREE.Scene();
    scene.background=new THREE.Color(0x050101);
    //create camera
    camera= new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1,80);  
    //To render 
    const canvas= document.querySelector('.webgl'); //call canvas of html
    renderer = new THREE.WebGLRenderer({canvas: canvas});


    //add elements
    scene.add(camera);

    camera.position.set(4,5,5)

   
    controls= new THREE.OrbitControls( camera, renderer.domElement );


    controls.update();


    window.addEventListener( 'resize', onWindowResize, false );

    //ligths
    const light = new THREE.AmbientLight( 0xFCFFF0, 100 ); // soft white light
    scene.add( light );

    pointLight = new THREE.PointLight( 0xFCFFF0, 100, 0 ); 
    pointLight.position.set( 5, 5, 0);
    scene.add( pointLight );


    pointLight2 = new THREE.PointLight( 0xFCFFF0, 100, 0 ); 
    pointLight2.position.set( -5, 5, 0 );
    scene.add( pointLight2 );




    loadModel_objAndMtl("./src/models/obj/shoes/"+productList[productSelect].model+"/",productList[productSelect].model,true,scene);
    
}

function loadModel_objAndMtl(PathGeneralFolder, pahtFile, show) {


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

                model = object; //
                scene.add(object);
            });
        });
        

    }

}



function animate(){
    requestAnimationFrame( animate );

    //model.rotation.x= -0.8;
    model.rotation.y -= 0.01;
    
    controls.update();
    renderer.render(scene,camera);
    renderer.setSize( window.innerWidth, window.innerHeight,false);

    camera.lookAt( scene.position );
}
