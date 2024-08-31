import * as THREE from 'three';
import { Timer } from 'three/examples/jsm/misc/Timer.js';

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

camera.position.z = 3;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas#webgl'),
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

/**
 * Resize
 */
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
});

/**
 * Animate
 */
const timer = new Timer();

const tick = () => {
  const elapsedTime = timer.getElapsed();

  timer.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
