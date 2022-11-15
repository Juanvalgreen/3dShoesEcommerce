var scene=null, camera=null, renderer=null, controls=null, pointLight=null,efect=null,model=null;

function onWindowResize(){


    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

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

    camera.position.set(6,2,5)

   
    controls= new THREE.OrbitControls( camera, renderer.domElement );


    controls.update();
    //grid  
    // const size = 10;
    // const divisions = 100;

    // const gridHelper = new THREE.GridHelper( size, divisions,0x000,0xffffff);
    // scene.add( gridHelper );

    //window.addEventListener( 'resize', onWindowResize, false );

    //ligths
    const light = new THREE.AmbientLight( 0x404040, 80 ); // soft white light
    scene.add( light );

    pointLight = new THREE.PointLight( 0xedbe24, 15, 100 ); 
    pointLight.position.set( 0, 5, 0 );
    scene.add( pointLight );




    loadModel_objAndMtl("./src/models/obj/shoes/retro1/","retro1",true);
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

                if (pahtFile == "Luigi"){
                    object.scale.set(0.01,0.01,0.01);

                }
                if (pahtFile == "Mario"){
                    object.scale.set(0.01,0.01,0.01);
                    

                }
                if (pahtFile == "Robot"){
                    object.scale.set(1,1,1);
                    

                }
                model = object; //
                scene.add(object);
            });
        });
        

    }

}



function animate(){
    requestAnimationFrame( animate );

    //model.rotation.x= -0.8;
    //model.rotation.y -= 0.01;
    
    controls.update();
    renderer.render(scene,camera);
    renderer.setSize( window.innerWidth, window.innerHeight,false);

    camera.lookAt( scene.position );
}
