import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls

// Setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

// Geometry and Material for Cube
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position and Rotation for Cube
cube.position.z = -15;
cube.position.x = -15;
cube.rotation.x = 2;
cube.rotation.y = 0.5;

// Geometry and Material for Icosahedron
const ico = new THREE.IcosahedronGeometry(10);
const icoMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const icoMesh = new THREE.Mesh(ico, icoMaterial);
scene.add(icoMesh);

// Position for Icosahedron
icoMesh.position.z = -15;
icoMesh.position.x = 15;

// Lights
const pointLight = new THREE.PointLight(0x87CEFA); // Light blue color
pointLight.position.set(0, -10, 10);

const ambientLight = new THREE.AmbientLight(0x87CEFA); // Light blue color
ambientLight.position.set(25, -15, -400);

scene.add(pointLight);
scene.add(ambientLight);

// Add Helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

// Add a Grid Helper
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Slowly rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Rotate the icosahedron a bit faster in the opposite direction
    icoMesh.rotation.z += -0.03;
    icoMesh.rotation.y += -0.03;

    // Update OrbitControls
    controls.update(); // This is necessary for live updates

    // Render the scene and camera
    renderer.render(scene, camera);
}

// Start the animation loop
animate();

// Additional content
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from '../counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'));

