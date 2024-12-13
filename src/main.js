import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

createApp(App).mount('#app')

import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const filePath = `images/panorama`

const images = [
  'panorama_1',
  'panorama_3',
  'panorama_4',
  'panorama_5',
  'panorama_0',
  'panorama_2'
].map((fileName) => `${filePath}/${fileName}.png`)

const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(0.2, 0.2, -1)
const scene = new THREE.Scene()
scene.add(camera)

const textureCube = await new THREE.CubeTextureLoader().loadAsync(images)
scene.background = textureCube

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

const container = document.querySelector('.panorama')
container.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.enableDamping = true
controls.autoRotateSpeed = 0.2

function render() {
  requestAnimationFrame(render)
  controls.update()
  renderer.render(scene, camera)
}

render()