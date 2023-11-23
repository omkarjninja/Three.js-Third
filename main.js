import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color( "#73A9AD" );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 3.5, 1, 1 );
const geometry2 = new THREE.BoxGeometry( 3.5, 1, 1 );
const geometry3 = new THREE.BoxGeometry( 3.5, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: "white" } );
const material2 = new THREE.MeshBasicMaterial( { color: "#FF9A33" } );
const material3 = new THREE.MeshBasicMaterial( { color: "#128807" } );
const cube = new THREE.Mesh( geometry, material );
const cubiod = new THREE.Mesh( geometry2, material2 );
const cabar=new THREE.Mesh(geometry3,material3)
const geometry4 = new THREE.CircleGeometry( 0.25, 32 ); 
const material4 = new THREE.MeshBasicMaterial( { color: "#040079" } ); 
const circle = new THREE.Mesh( geometry4, material4 ); 
scene.add( circle );
scene.add( cube );
scene.add( cubiod );
scene.add(cabar)
cubiod.position.y=1
circle.position.z=1
cabar.position.y=-1
camera.position.z = 4;

function animate() {
	requestAnimationFrame( animate );

	// cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    // cubiod.rotation.x += 0.01;
	cubiod.rotation.y += 0.01;
    // cabar.rotation.x += 0.01;
	cabar.rotation.y += 0.01;
    circle.rotation.y+= 0.01
	renderer.render( scene, camera );
}
// renderer.render( scene, camera );
animate();