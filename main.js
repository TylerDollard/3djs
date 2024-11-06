import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls

// Setup the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Renderer setup
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'), // Uses the canvas element in HTML
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

// Lights setup
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

// Orbit Controls setup
const controls = new OrbitControls(camera, renderer.domElement);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube slowly
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Rotate the icosahedron in the opposite direction
    icoMesh.rotation.z += -0.03;
    icoMesh.rotation.y += -0.03;

    // Update OrbitControls (to enable live updates)
    controls.update();

    // Render the scene and camera
    renderer.render(scene, camera);
}

// Start the animation loop
animate();


