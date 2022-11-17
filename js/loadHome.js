var scene=null, camera=null, renderer=null, controls=null, pointLight=null,efect=null,model=null;


let mouseX = 0;
let mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

document.addEventListener( 'mousemove', onDocumentMouseMove );

function onWindowResize(){


    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    //camera.updateProjectionMatrix();

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
    camera= new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1,100);  
    //To render 
    const canvas= document.querySelector('.webgl'); //call canvas of html
    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    //add elements
    scene.add(camera);

    camera.position.set(1,2,2)

    //Controls
    // controls= new THREE.OrbitControls( camera, renderer.domElement );


    //controls.update();
    //grid  
    // const size = 10;
    // const divisions = 100;

    // const gridHelper = new THREE.GridHelper( size, divisions,0x000,0xffffff);
    // scene.add( gridHelper );

    window.addEventListener( 'resize', onWindowResize, false );

    //ligths
    const light = new THREE.AmbientLight( 0x404040, 30); // soft white light
    scene.add( light );

    pointLight = new THREE.PointLight( 0xedbe24, 5, 100 ); 
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

                model = object; //
                scene.add(object);
            });
        });
        

    }

}


function onDocumentMouseMove( event ) {

    mouseX = ( event.clientX - windowHalfX ) / 100;
    mouseY = ( event.clientY - windowHalfY ) / 100;

}


function animate(){
    requestAnimationFrame( animate );

    //model.rotation.y += 0.01;
    
    //controls.update();
    renderer.render(scene,camera);
       
    model.rotation.x += ( mouseX - model.rotation.x ) * .03;
    model.rotation.y += ( -mouseY - model.rotation.y ) * .03;
    
    console.log(mouseX+"maousey");
    console.log(mouseY+"maousey");
    console.log(model.rotation.x );
    console.log(model.rotation.y);
    camera.lookAt( scene.position );
}