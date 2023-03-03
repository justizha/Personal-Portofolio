import * as THREE from 'three';

//scene

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(3,64,64);

const material = new THREE.MeshStandardMaterial({
    color: '#00ff83',

})

const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh);

//camera

const camera = new THREE.PerspectiveCamera(45,800 / 600);
camera.position.z = 20
scene.add(camera);

//light 
const light= new THREE.PointLight(0xfffff,1,100)
light.position.set(0,10,10)
scene.add(light)
//render

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGL1Renderer({canvas});
renderer.setSize(800,600)
renderer.render(scene.camera)
