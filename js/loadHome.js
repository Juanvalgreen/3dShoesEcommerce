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




    // //to load island
    // var generalPathI="../src/models/obj/isla/";
    // var fileObjI="island v.2.obj";
    // var fileMtlI="island v.2.mtl";


    // //load scenery
    
    // var mtlLoader = new THREE.MTLLoader();
    // mtlLoader.setTexturePath(generalPathI);
    // mtlLoader.setPath(generalPathI);
    // mtlLoader.load(fileMtlI, function(materials) {
    //     materials.preload();
        
    //     var objLoader = new THREE.OBJLoader();
    //     objLoader.setMaterials(materials);
    //     objLoader.setPath(generalPathI);
    //     objLoader.load(fileObjI,function(object){
    //         object.position.set(-5,-2,5);
    //         object.scale.set(1,1,1)
    //         scene.add(object);
    //         model=object;
    //     }); 
    // });

    // to load Cerdito
    //var generalPathC="../src/models/obj/cerdito/";
    //var fileObjC="personaje.vox.obj";
    //var fileMtlC="personaje.vox.mtl";

    // to load character and mtl of OBJ fiile extension
    
    
    // var mtlLoader = new THREE.MTLLoader();
    // mtlLoader.setTexturePath(generalPathC);
    // mtlLoader.setPath(generalPathC);
    // mtlLoader.load(fileMtlC, function(materials) {
    //     materials.preload();
        
    //     var objLoader = new THREE.OBJLoader();
    //     objLoader.setMaterials(materials);
    //     objLoader.setPath(generalPathC);
    //     objLoader.load(fileObjC,function(object){
    //         object.position.set(-2.5,1.9,3);
    //         object.scale.set(0.2,0.2,0.2)
    //         scene.add(object);
    //     }); 
    // });

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
                modPlayer = object; //
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
       
    modPlayer.rotation.x += ( mouseX - modPlayer.rotation.x ) * .03;
    modPlayer.rotation.y += ( - mouseY -modPlayer.rotation.y ) * .03;

    camera.lookAt( scene.position );
}