// Three.js imports
import * as THREE from "three";

// chatGPTPrompt:
// Initial: write me a three.js script that shows the camera rotating around a white sphere when you scroll the mouse wheel. it should have a dark blue background and the sphere should have texture. add lighting from an angle.
// Create satellites: lets think of our sphere as a planet. Now lets add some code that adds some satellites around our planet. These satellites should be different pastel colours and different 3d polyhedron with different  number faces between 8 and 20. add between 12 and 30 and name each one baced on the color and number of faces.

export const HomeAnimation = () => {
  // Three.js scene setup
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000033);

  // Camera setup
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 1;

  // Render setup
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Sphere setup
  var sphereGeometry = new THREE.IcosahedronGeometry(1, 4);
  var sphereMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load("textures/sphere-texture.png"),
  });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(0, 0, 0);
  sphere.name = "sphere";
  scene.add(sphere);

  // Create satellites
  // container for all satellites to handle individual rotation
  const satelliteGroup = new THREE.Object3D();
  satelliteGroup.name = "satelliteGroup";
  // Number of satellites in this render
  var numSatellites = Math.floor(Math.random() * 19) + 12; // between 12 and 30
  var satelliteColors = ["#FDB813", "#6A5ACD", "#7FFFD4", "#F4A460", "#ADD8E6"];
  // create random number of shapes
  var satelliteGeometries = [];
  for (var i = 1; i <= numSatellites; i++) {
    satelliteGeometries.push(
      new THREE.IcosahedronGeometry(
        Math.random() * (0.1 - -0.05) + -0.05,
        Math.floor(Math.random() * 3)
      )
    );
  }
  for (var i = 0; i < numSatellites; i++) {
    // Pick random colour and geometry
    var satelliteColor =
      satelliteColors[Math.floor(Math.random() * satelliteColors.length)];
    var satelliteGeometry = new THREE.IcosahedronGeometry(
      Math.random() * (0.2 - 0.05) + 0.05, // size
      Math.floor(Math.random()) // detail between 0 and 1
    );
    var satelliteMaterial = new THREE.MeshStandardMaterial({
      color: satelliteColor,
    });
    // create satellite
    var satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);

    // var numFaces = satelliteGeometry.faces.length;
    // satellite.name = satelliteColor + " satellite with " + numFaces + " faces";
    satellite.position.set(
      Math.random() * (1.7 - -1.7) + -1.7,
      Math.random() * (1.2 - -1.2) + -1.2,
      Math.random() * (3 - -2) + -2
    );

    // speed of orbit
    const satelliteSpeeds = [0.025, -0.025, -0.05];

    const pivot = new THREE.Object3D();
    pivot.orbitSpeed =
      satelliteSpeeds[Math.floor(Math.random() * satelliteSpeeds.length)];
    pivot.add(satellite);
    satelliteGroup.add(pivot);
  }
  sphere.add(satelliteGroup);

  // Lighting setup
  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  // Mouse wheel scroll event handler

  function rotateScene(movement) {
    scene.rotation.y += movement;
    scene.rotation.x += movement;
  }

  function rotateSphere(movement) {
    satelliteGroup.rotation.y += movement;
  }
  const rotationFactor = 0.0001;
  document.addEventListener("wheel", function (event) {
    let movementY = event.deltaY * rotationFactor;

    rotateScene(movementY);
    rotateSphere(-movementY);
  });

  // Render loop
  var render = function () {
    requestAnimationFrame(render);

    satelliteGroup.children.forEach((child) => {
      child.rotation.y += child.orbitSpeed;
    });
    renderer.render(scene, camera);
  };
  render();
};