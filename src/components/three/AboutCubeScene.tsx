import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const FACETS = [
  { id: 'strategy', label: 'Strategy', code: '01', desc: 'Hoshin Kanri, balanced metrics & executive vision', color: 0x1e40af },
  { id: 'process', label: 'Process', code: '02', desc: 'Value Stream Mapping, continuous flow & takt alignment', color: 0x0284c7 },
  { id: 'people', label: 'People', code: '03', desc: 'Empowered problem-solvers & frontline psychological safety', color: 0x4f46e5 },
  { id: 'performance', label: 'Performance', code: '04', desc: 'Zero defect quality, OEE & durable cost elimination', color: 0x0891b2 },
];

export const AboutCubeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeFacet, setActiveFacet] = useState(0);
  const [webglAvailable, setWebglAvailable] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;
    let renderer: THREE.WebGLRenderer | null = null;
    let animId: number;

    let boxGeo: THREE.BoxGeometry;
    let boxWireGeo: THREE.WireframeGeometry;
    let boxWireMat: THREE.LineBasicMaterial;
    let innerBoxGeo: THREE.BoxGeometry;
    let innerBoxMat: THREE.MeshBasicMaterial;
    let centerNodeGeo: THREE.SphereGeometry;
    let centerNodeMat: THREE.MeshBasicMaterial;
    let orbitRingGeo: THREE.RingGeometry;
    let orbitRingMat: THREE.MeshBasicMaterial;
    let pointsGeo: THREE.BufferGeometry;
    let pointsMat: THREE.PointsMaterial;

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 5.8);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0xffffff, 0); // Transparent
      container.appendChild(renderer.domElement);

      const cubeGroup = new THREE.Group();
      scene.add(cubeGroup);

      // Outer Precision Wireframe Box
      boxGeo = new THREE.BoxGeometry(2.0, 2.0, 2.0);
      boxWireGeo = new THREE.WireframeGeometry(boxGeo);
      boxWireMat = new THREE.LineBasicMaterial({
        color: 0x1e40af,
        transparent: true,
        opacity: 0.85,
      });
      const boxWire = new THREE.LineSegments(boxWireGeo, boxWireMat);
      cubeGroup.add(boxWire);

      // Inner Layered Core Box
      innerBoxGeo = new THREE.BoxGeometry(1.3, 1.3, 1.3);
      innerBoxMat = new THREE.MeshBasicMaterial({
        color: 0x2563eb,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      const innerBox = new THREE.Mesh(innerBoxGeo, innerBoxMat);
      cubeGroup.add(innerBox);

      // Central Core Spherical Node
      centerNodeGeo = new THREE.SphereGeometry(0.35, 16, 16);
      centerNodeMat = new THREE.MeshBasicMaterial({
        color: 0x0284c7,
        transparent: true,
        opacity: 0.85
      });
      const centerNode = new THREE.Mesh(centerNodeGeo, centerNodeMat);
      cubeGroup.add(centerNode);

      // 4 Orbiting Planar Disc Rings
      orbitRingGeo = new THREE.RingGeometry(1.5, 1.54, 48);
      orbitRingMat = new THREE.MeshBasicMaterial({
        color: 0x4f46e5,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const orbitRing = new THREE.Mesh(orbitRingGeo, orbitRingMat);
      orbitRing.rotation.x = Math.PI / 4;
      cubeGroup.add(orbitRing);

      // Ambient points inside
      const pointCount = 35;
      const pointPos = new Float32Array(pointCount * 3);
      for (let i = 0; i < pointCount; i++) {
        pointPos[i * 3] = (Math.random() - 0.5) * 3;
        pointPos[i * 3 + 1] = (Math.random() - 0.5) * 3;
        pointPos[i * 3 + 2] = (Math.random() - 0.5) * 3;
      }
      pointsGeo = new THREE.BufferGeometry();
      pointsGeo.setAttribute('position', new THREE.BufferAttribute(pointPos, 3));
      pointsMat = new THREE.PointsMaterial({
        color: 0x0284c7,
        size: 0.05,
        transparent: true,
        opacity: 0.7
      });
      const points = new THREE.Points(pointsGeo, pointsMat);
      cubeGroup.add(points);

      // Mouse control
      let isDragging = false;
      let prevMouseX = 0;
      let prevMouseY = 0;

      const onMouseDown = (e: MouseEvent) => {
        isDragging = true;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        cubeGroup.rotation.y += deltaX * 0.01;
        cubeGroup.rotation.x += deltaY * 0.01;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      };

      const onMouseUp = () => {
        isDragging = false;
      };

      container.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);

      // Resize
      const handleResize = () => {
        if (!container || !renderer) return;
        width = container.clientWidth;
        height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      const ro = new ResizeObserver(handleResize);
      ro.observe(container);

      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        if (!isDragging) {
          cubeGroup.rotation.y += 0.007;
          cubeGroup.rotation.x = Math.sin(elapsed * 0.4) * 0.2 + 0.3;
        }

        innerBox.rotation.y -= 0.01;
        orbitRing.rotation.z += 0.005;

        const scale = 1 + Math.sin(elapsed * 2) * 0.05;
        centerNode.scale.set(scale, scale, scale);

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();

      return () => {
        container.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        ro.disconnect();
        cancelAnimationFrame(animId);
        if (renderer && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
        renderer?.dispose();
        boxGeo?.dispose();
        boxWireGeo?.dispose();
        boxWireMat?.dispose();
        innerBoxGeo?.dispose();
        innerBoxMat?.dispose();
        centerNodeGeo?.dispose();
        centerNodeMat?.dispose();
        orbitRingGeo?.dispose();
        orbitRingMat?.dispose();
        pointsGeo?.dispose();
        pointsMat?.dispose();
      };
    } catch (err) {
      console.warn('WebGL initialization failed for AboutCube, falling back', err);
      setWebglAvailable(false);
    }
  }, []);

  return (
    <div className="relative w-full h-[420px] rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 flex flex-col justify-between overflow-hidden shadow-sm">
      {/* Visual Header */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
            Systemic Rigor Matrix
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-500">Drag to Inspect 3D</span>
      </div>

      {/* Canvas or Fallback */}
      {webglAvailable ? (
        <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-36 h-36 rounded-2xl border-2 border-blue-600/40 bg-blue-50/50 flex items-center justify-center rotate-12 animate-pulse">
            <span className="font-heading font-extrabold text-blue-700 text-lg">OPEX MATRIX</span>
          </div>
        </div>
      )}

      {/* Interactive Facet Selectors at bottom */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">
        {FACETS.map((facet, idx) => (
          <button
            key={facet.id}
            type="button"
            onClick={() => setActiveFacet(idx)}
            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              activeFacet === idx
                ? 'bg-white border-blue-500 shadow-sm ring-1 ring-blue-500/20'
                : 'bg-white/80 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400 font-bold">{facet.code}</span>
              <span className={`w-1.5 h-1.5 rounded-full ${activeFacet === idx ? 'bg-blue-600' : 'bg-slate-300'}`} />
            </div>
            <div className="text-xs font-bold text-slate-900 mt-1">{facet.label}</div>
            <div className="text-[10px] text-slate-500 truncate mt-0.5">{facet.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
