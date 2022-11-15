console.log(THREE);

var scene0=null,scene1=null,scene2=null, camera=null, renderer0=null,renderer1=null,renderer2=null, controls0=null,controls1=null,controls2=null, pointLight=null,pointLight2=null;

var shoes=[];

function start(){
    
    initScene();
    animate();


}
// function onWindowResize(){

//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize( window.innerWidth, window.innerHeight );

// }

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

    //window.addEventListener( 'resize', onWindowResize, false );
    
    loadModel_objAndMtl("./src/models/obj/shoes/cerdito/","cerdito",true,scene0);
    loadModel_objAndMtl("./src/models/obj/shoes/cerdito/","cerdito",true,scene1);
    loadModel_objAndMtl("./src/models/obj/shoes/cerdito/","cerdito",true,scene2);
    
    console.log("hey bitch")
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
                //object.scale.set(0.2,0.2,0.2);
                //

                if (pahtFile == "Luigi"){
                    object.scale.set(0.01,0.01,0.01);

                }
                if (pahtFile == "mario"){
                    object.scale.set(0.2,0.2,0.2);
                    
                    

                }
                if (pahtFile == "Robot"){
                    object.scale.set(1.5,1.5,1.5);
                    

                }
                modPlayer = object;
                
                scene.add(object);
                shoes.push(object);
                
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

    const light = new THREE.AmbientLight( 0x404040, 3 ); // soft white light
    scene.add( light );

    pointLight = new THREE.PointLight( 0xedbe24, 3, 100 ); 
    pointLight.position.set( 0, 5, 0 );
    scene.add( pointLight );


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
