<template>
  <div id="container" style="background-color: inherit"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { housemodels } from "../models/houses.js";

export default {
  name: "CanvasComponent",
  props: ["modules"],
  data() {
    return {};
  },
  async mounted() {
    const container = document.getElementById("container");
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const orbit = new OrbitControls(camera, renderer.domElement);
    const axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);

    camera.position.set(1.5 * Math.PI, 0.5 * Math.PI, 1.2 * Math.PI);

    renderer.render(scene, camera);

    const planeGeometry = new THREE.PlaneGeometry(90, 90);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x77dd77 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    scene.add(plane);

    camera.position.z = 5;

    const lightA = new THREE.AmbientLight(0xffffff, 1); // soft white light
    scene.add(lightA);

    const loader = new GLTFLoader();

    const modLen = this.$props.modules.length;
    console.log(modLen);

    for (let i = 0; i < modLen; i++) {
      const model = await loader.loadAsync(housemodels[i].url);
      const house = model.scene;
      house.rotation.y = housemodels[i].rotation;
      house.position.set(
        housemodels[i].position.x,
        housemodels[i].position.y,
        housemodels[i].position.z
      );
      house.scale.set(0.5, 0.5, 0.5);
      scene.add(house);
    }

    /*
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);*/
    const model = await loader.loadAsync("/assets/human.glb");
    const human = model.scene;
    human.scale.set(0.5, 0.5, 0.5);
    human.position.set(1, 0.5, 5);
    scene.add(human);

    const animate = () => {
      requestAnimationFrame(animate);
      orbit.update();

      renderer.render(scene, camera);
    };
    animate();

    const onKeyMove = (e) => {
      const keyCode = e.which;
      switch (keyCode) {
        case 68:
          human.position.x += 0.1;
          break;
        case 83:
          human.position.z += 0.1;
          break;
        case 65:
          human.position.x -= 0.1;
          break;
        case 87:
          human.position.z -= 0.1;
          break;
        case 13:
          //console.log(cube.position.x + ", " + cube.position.y + ", " + cube.position.z);
          for (let i = 0; i < modLen; i++) {
            if (
              human.position.x >= housemodels[i].collisionPosition.x1 &&
              human.position.x <= housemodels[i].collisionPosition.x2 &&
              human.position.z >= housemodels[i].collisionPosition.z1 &&
              human.position.z <= housemodels[i].collisionPosition.z2
            ) {
              //console.log(`around module ${this.$props.modules[i].name}`);
              if (
                confirm(
                  `This will take you to ${this.$props.modules[i].name}. Do you want to proceed?`
                )
              ) {
                this.$router.push(`/${this.$props.modules[i].id}/lessons`);
              }
            }
          }
      }
    };

    window.addEventListener("keydown", onKeyMove);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
