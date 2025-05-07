// app.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);  // Make the canvas full-screen
document.getElementById('3d-content').appendChild(renderer.domElement);

// Create a rotating 3D cube (representing a product)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x1e90ff }); // Blue color for the product
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set camera position
camera.position.z = 5;

// Add a simple animation to rotate the cube
function animate() {
    requestAnimationFrame(animate);

    // Rotation animation for the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

animate();

// Adjust camera on window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
