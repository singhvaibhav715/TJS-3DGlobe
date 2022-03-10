import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TextureLoader } from "three";



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.antialias=true
renderer.setPixelRatio=window.devicePixelRatio
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

new OrbitControls( camera, renderer.domElement );

camera.position.z = 10;

const textureLoader =new TextureLoader()
const matcap= textureLoader.load('images/globe_texture.jpg')

const sphereGeometry=new THREE.SphereGeometry(5,50,50)
console.log(sphereGeometry);
const sphereMaterial = new THREE.MeshBasicMaterial()
sphereMaterial.map=matcap
const sphere =new THREE.Mesh(sphereGeometry,sphereMaterial)
sphereGeometry.center()
scene.add(sphere)


function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  
    renderer.setSize( window.innerWidth, window.innerHeight );
  
  }

  
  //For Animation Objects
function animate() {
    requestAnimationFrame(animate);
    onWindowResize()
    sphere.rotation.x+=0.001
    sphere.rotation.y+=0.001
    renderer.render(scene, camera);
  }
  
  animate()