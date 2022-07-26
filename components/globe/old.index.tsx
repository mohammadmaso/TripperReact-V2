import { useEffect } from 'react';
import {
  AmbientLight,
  Color,
  DirectionalLight,
  Fog,
  PerspectiveCamera,
  // AxesHelper,
  // DirectionalLightHelper,
  // CameraHelper,
  PointLight,
  Scene,
  WebGLRenderer,
} from 'three';

import ThreeGlobe from 'three-globe';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import siteConfig from '../../site.config';
import countries from './files/globe-data-min.json';

type Props = {};

const ReactGlobe = (props: Props) => {
  var renderer: WebGLRenderer,
    camera: PerspectiveCamera,
    scene: Scene,
    controls: OrbitControls;
  let mouseX = 0;
  let mouseY = 0;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;
  var Globe: ThreeGlobe;

  // SECTION Initializing core ThreeJS elements
  function init() {
    // Initialize renderer
    renderer = new WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.outputEncoding = THREE.sRGBEncoding;
    document.getElementById('globeViz')?.appendChild(renderer.domElement);

    // Initialize scene, light
    scene = new Scene();
    scene.add(new AmbientLight(0xbbbbbb, 0.3));
    scene.background = new Color('#ffffff00');

    // Initialize camera, light
    camera = new PerspectiveCamera();
    camera.aspect = 1;
    camera.updateProjectionMatrix();

    var dLight = new DirectionalLight(0xffffff, 0.8);
    dLight.position.set(-800, 2000, 400);
    camera.add(dLight);

    var dLight1 = new DirectionalLight(siteConfig.primaryColors[300], 1);
    dLight1.position.set(-200, 500, 200);
    camera.add(dLight1);

    var dLight2 = new PointLight(siteConfig.primaryColors[800], 0.5);
    dLight2.position.set(-200, 500, 200);
    camera.add(dLight2);

    camera.position.z = 400;
    camera.position.x = 0;
    camera.position.y = 0;

    scene.add(camera);

    // Additional effects
    scene.fog = new Fog(siteConfig.primaryColors[500], 400, 2000);

    // Helpers
    // const axesHelper = new AxesHelper(800);
    // scene.add(axesHelper);
    // var helper = new DirectionalLightHelper(dLight);
    // scene.add(helper);
    // var helperCamera = new CameraHelper(dLight.shadow.camera);
    // scene.add(helperCamera);

    // Initialize controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    //   controls.dynamicDampingFactor = 0.01;
    controls.enablePan = false;
    controls.minDistance = 200;
    controls.maxDistance = 500;
    controls.rotateSpeed = 0.8;
    controls.zoomSpeed = 1;
    controls.autoRotate = false;

    controls.minPolarAngle = Math.PI / 3.5;
    controls.maxPolarAngle = Math.PI - Math.PI / 3;

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onMouseMove);
  }

  // SECTION Globe
  function initGlobe() {
    // Initialize the Globe
    Globe = new ThreeGlobe({
      waitForGlobeReady: true,
      animateIn: true,
    })
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(true)
      .atmosphereColor(siteConfig.primaryColors[100])
      .atmosphereAltitude(0.25)
      .hexPolygonColor((e: any) => {
        if (
          ['KGZ', 'KOR', 'THA', 'RUS', 'UZB', 'IDN', 'KAZ', 'MYS'].includes(
            e.properties.ISO_A3
          )
        ) {
          return 'rgba(255,255,255, 1)';
        } else return 'rgba(255,255,255, 0.7)';
      });

    // // NOTE Arc animations are followed after the globe enters the scene
    // setTimeout(() => {
    //   Globe.arcsData(travelHistory.flights)
    //     .arcColor((e: any) => {
    //       return e.status ? '#9cff00' : '#FF4000';
    //     })
    //     .arcAltitude((e: any) => {
    //       return e.arcAlt;
    //     })
    //     .arcStroke((e: any) => {
    //       return e.status ? 0.5 : 0.3;
    //     })
    //     .arcDashLength(0.9)
    //     .arcDashGap(4)
    //     .arcDashAnimateTime(1000)
    //     .arcsTransitionDuration(1000)
    //     .arcDashInitialGap((e: any) => e.order * 1)
    //     .labelsData(airportHistory.airports)
    //     .labelColor(() => '#ffcb21')
    //     .labelDotOrientation((e: any) => {
    //       return e.text === 'ALA' ? 'top' : 'right';
    //     })
    //     .labelDotRadius(0.3)
    //     .labelSize((e: any) => e.size)
    //     .labelText('city')
    //     .labelResolution(6)
    //     .labelAltitude(0.01)
    //     .pointsData(airportHistory.airports)
    //     .pointColor(() => '#ffffff')
    //     .pointsMerge(true)
    //     .pointAltitude(0.07)
    //     .pointRadius(0.05);
    // }, 1000);

    Globe.rotateY(-Math.PI * (5 / 9));
    Globe.rotateZ(-Math.PI / 6);
    const globeMaterial: any = Globe.globeMaterial();
    globeMaterial.color = new Color(siteConfig.primaryColors[500]);
    globeMaterial.emissive = new Color(0x220038);
    globeMaterial.emissiveIntensity = 0.1;
    globeMaterial.shininess = 0.7;

    // NOTE Cool stuff
    // globeMaterial.wireframe = true;

    scene.add(Globe);
  }

  function onMouseMove(event: any) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
    // console.log("x: " + mouseX + " y: " + mouseY);
  }

  function onWindowResize() {
    camera.aspect = 1;
    camera.updateProjectionMatrix();
    windowHalfX = window.innerWidth / 1.5;
    windowHalfY = window.innerHeight / 1.5;
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    camera.position.x +=
      Math.abs(mouseX) <= windowHalfX / 2
        ? (mouseX / 2 - camera.position.x) * 0.005
        : 0;
    camera.position.y += (-mouseY / 2 - camera.position.y) * 0.005;
    camera.lookAt(scene.position);
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    init();
    initGlobe();
    onWindowResize();
    animate();

    return () => {};
  }, []);

  return (
    <>
      <div id="globeViz"></div>
    </>
  );
};

export default ReactGlobe;
