import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { FontLoader } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/geometries/TextGeometry.js";

const container = document.getElementById("scene-container");
const scene = new THREE.Scene();
scene.background = new THREE.Color("#0b1020");

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight("#ffffff", 0.5);
scene.add(ambientLight);

const keyLight = new THREE.DirectionalLight("#ffffff", 1.2);
keyLight.position.set(6, 8, 10);
scene.add(keyLight);

const fillLight = new THREE.PointLight("#7dd3fc", 1, 50);
fillLight.position.set(-8, -2, 6);
scene.add(fillLight);

let textMesh;

const loader = new FontLoader();
loader.load(
  "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/fonts/helvetiker_regular.typeface.json",
  (font) => {
    const geometry = new TextGeometry("Hello B world", {
      font,
      size: 1.2,
      height: 0.35,
      curveSegments: 18,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.03,
      bevelSegments: 8,
    });

    geometry.center();

    const material = new THREE.MeshStandardMaterial({
      color: "#f8fafc",
      metalness: 0.45,
      roughness: 0.2,
    });

    textMesh = new THREE.Mesh(geometry, material);
    scene.add(textMesh);
  },
);

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const elapsed = clock.getElapsedTime();
  const radius = 8;

  camera.position.x = Math.cos(elapsed * 0.45) * radius;
  camera.position.z = Math.sin(elapsed * 0.45) * radius;
  camera.position.y = 2 + Math.sin(elapsed * 0.3) * 0.8;
  camera.lookAt(0, 0, 0);

  if (textMesh) {
    textMesh.rotation.y = Math.sin(elapsed * 0.25) * 0.2;
  }

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
