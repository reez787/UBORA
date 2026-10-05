import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroOpExSceneProps {
  activePillar?: string;
  onSelectPillar?: (pillar: string) => void;
}

export const HeroOpExScene: React.FC<HeroOpExSceneProps> = ({ activePillar, onSelectPillar }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [webglAvailable, setWebglAvailable] = useState<boolean>(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let rootGroup: THREE.Group;
    let coreGeo: THREE.OctahedronGeometry;
    let coreWireGeo: THREE.WireframeGeometry;
    let coreWireMat: THREE.LineBasicMaterial;
    let coreWire: THREE.LineSegments;
    let coreInnerGeo: THREE.IcosahedronGeometry;
    let coreInnerMat: THREE.MeshBasicMaterial;
    let coreInner: THREE.Mesh;
    let ring1Geo: THREE.TorusGeometry;
    let ring1Mat: THREE.MeshBasicMaterial;
    let ring1: THREE.Mesh;
    let ring2Geo: THREE.TorusGeometry;
    let ring2Mat: THREE.MeshBasicMaterial;
    let ring2: THREE.Mesh;
    let ring3Geo: THREE.TorusGeometry;
    let ring3Mat: THREE.MeshBasicMaterial;
    let ring3: THREE.Mesh;
    let particleGeo: THREE.BufferGeometry;
    let particleMat: THREE.PointsMaterial;
    let tubeGeo: THREE.TubeGeometry;
    let tubeMat: THREE.MeshBasicMaterial;
    let animationFrameId: number;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 8.5);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0xffffff, 0); // Transparent
      container.appendChild(renderer.domElement);

      rootGroup = new THREE.Group();
      scene.add(rootGroup);

      // Core Geometric Octahedron
      coreGeo = new THREE.OctahedronGeometry(1.2, 0);
      coreWireGeo = new THREE.WireframeGeometry(coreGeo);
      coreWireMat = new THREE.LineBasicMaterial({
        color: 0x1e40af,
        transparent: true,
        opacity: 0.85,
      });
      coreWire = new THREE.LineSegments(coreWireGeo, coreWireMat);
      rootGroup.add(coreWire);

      // Inner Solid Facet Core
      coreInnerGeo = new THREE.IcosahedronGeometry(0.85, 0);
      coreInnerMat = new THREE.MeshBasicMaterial({
        color: 0x2563eb,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });
      coreInner = new THREE.Mesh(coreInnerGeo, coreInnerMat);
      rootGroup.add(coreInner);

      // Concentric Precision Rings
      ring1Geo = new THREE.TorusGeometry(2.2, 0.016, 16, 100);
      ring1Mat = new THREE.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.7 });
      ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
      ring1.rotation.x = Math.PI / 3;
      ring1.rotation.y = Math.PI / 6;
      rootGroup.add(ring1);

      const r2Geo = new THREE.TorusGeometry(2.7, 0.014, 16, 100);
      ring2Geo = r2Geo;
      ring2Mat = new THREE.MeshBasicMaterial({ color: 0x0284c7, transparent: true, opacity: 0.6 });
      ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.x = -Math.PI / 4;
      ring2.rotation.z = Math.PI / 5;
      rootGroup.add(ring2);

      const r3Geo = new THREE.TorusGeometry(3.2, 0.012, 16, 120);
      ring3Geo = r3Geo;
      ring3Mat = new THREE.MeshBasicMaterial({ color: 0x4f46e5, transparent: true, opacity: 0.5 });
      ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
      ring3.rotation.y = Math.PI / 2.5;
      rootGroup.add(ring3);

      // 4 Key Nodes in 3D space
      const nodeCoords = [
        new THREE.Vector3(-2.1, 1.2, 0.8),   // PROCESS
        new THREE.Vector3(2.1, 1.4, -0.5),   // ANALYSIS
        new THREE.Vector3(1.7, -1.7, 0.9),   // IMPROVEMENT
        new THREE.Vector3(-1.9, -1.5, -0.7)  // PERFORMANCE
      ];

      const nodeMeshes: THREE.Mesh[] = [];
      nodeCoords.forEach((coord, i) => {
        const nodeGeo = new THREE.SphereGeometry(0.2, 16, 16);
        const nodeMat = new THREE.MeshBasicMaterial({
          color: i === 0 ? 0x0284c7 : i === 1 ? 0x2563eb : i === 2 ? 0x4f46e5 : 0x0891b2,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.copy(coord);
        rootGroup.add(nodeMesh);
        nodeMeshes.push(nodeMesh);

        // Outer target halo
        const haloGeo = new THREE.RingGeometry(0.26, 0.31, 32);
        const haloMat = new THREE.MeshBasicMaterial({
          color: 0x1e3a8a,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.6,
        });
        const halo = new THREE.Mesh(haloGeo, haloMat);
        halo.position.copy(coord);
        halo.lookAt(camera.position);
        rootGroup.add(halo);
      });

      // Connecting Pathway Line
      const curvePoints = [
        nodeCoords[0],
        new THREE.Vector3(0, 2.0, 0.2),
        nodeCoords[1],
        new THREE.Vector3(2.3, 0.0, 0.5),
        nodeCoords[2],
        new THREE.Vector3(0, -2.1, 0.3),
        nodeCoords[3],
        new THREE.Vector3(-2.3, -0.2, 0.1),
        nodeCoords[0]
      ];
      const pathwayCurve = new THREE.CatmullRomCurve3(curvePoints, true);
      tubeGeo = new THREE.TubeGeometry(pathwayCurve, 100, 0.022, 8, true);
      tubeMat = new THREE.MeshBasicMaterial({
        color: 0x0369a1,
        transparent: true,
        opacity: 0.5,
        wireframe: true
      });
      const tube = new THREE.Mesh(tubeGeo, tubeMat);
      rootGroup.add(tube);

      // Subtle Ambient Floating Data Particles
      const particleCount = 70;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 8;
        particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 5;
      }
      particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      particleMat = new THREE.PointsMaterial({
        color: 0x0284c7,
        size: 0.05,
        transparent: true,
        opacity: 0.7,
      });
      const particlePoints = new THREE.Points(particleGeo, particleMat);
      rootGroup.add(particlePoints);

      // Mouse Interaction
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetX = x * 0.7;
        targetY = y * 0.7;
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Resize Handler
      const handleResize = () => {
        if (!container || !renderer) return;
        width = container.clientWidth;
        height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      const resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(container);

      // Animation Loop
      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        rootGroup.rotation.y = elapsed * 0.12 + mouseX;
        rootGroup.rotation.x = Math.sin(elapsed * 0.1) * 0.15 + mouseY;

        coreWire.rotation.x += 0.008;
        coreWire.rotation.y += 0.012;
        coreInner.rotation.y -= 0.005;

        ring1.rotation.z += 0.006;
        ring2.rotation.z -= 0.004;
        ring3.rotation.x += 0.005;

        nodeMeshes.forEach((mesh, index) => {
          const scale = 1 + Math.sin(elapsed * 2.5 + index * 1.5) * 0.12;
          mesh.scale.set(scale, scale, scale);
        });

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        resizeObserver.disconnect();
        cancelAnimationFrame(animationFrameId);
        if (renderer && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
        renderer?.dispose();
        coreGeo?.dispose();
        coreWireGeo?.dispose();
        coreWireMat?.dispose();
        coreInnerGeo?.dispose();
        coreInnerMat?.dispose();
        ring1Geo?.dispose();
        ring1Mat?.dispose();
        ring2Geo?.dispose();
        ring2Mat?.dispose();
        ring3Geo?.dispose();
        ring3Mat?.dispose();
        particleGeo?.dispose();
        particleMat?.dispose();
        tubeGeo?.dispose();
        tubeMat?.dispose();
      };
    } catch (err) {
      console.warn('WebGL initialization failed, falling back to CSS visualizer', err);
      setWebglAvailable(false);
    }
  }, []);

  const nodes = [
    { id: 'process', label: 'Process', desc: 'Flow mapping & takt time synchronization', border: 'border-blue-500', text: 'text-blue-700' },
    { id: 'analysis', label: 'Analysis', desc: 'DMAIC diagnostics & root-cause decomposition', border: 'border-sky-500', text: 'text-sky-700' },
    { id: 'improvement', label: 'Improvement', desc: 'Rapid Kaizen sprints & zero-defect systems', border: 'border-indigo-500', text: 'text-indigo-700' },
    { id: 'performance', label: 'Performance', desc: 'OEE acceleration & durable enterprise EBITDA', border: 'border-cyan-500', text: 'text-cyan-700' }
  ];

  return (
    <div className="relative w-full h-[480px] lg:h-[580px] flex items-center justify-center select-none overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white rounded-2xl">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />

      {/* WebGL Canvas or SVG Fallback */}
      {webglAvailable ? (
        <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-72 h-72 animate-spin-slow opacity-80" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#0284c7" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4 8" />
            <circle cx="100" cy="100" r="8" fill="#1e40af" />
          </svg>
        </div>
      )}

      {/* Floating Interactive 4-Pillar Status Cards */}
      <div className="absolute inset-x-4 bottom-3 z-10 flex flex-wrap items-center justify-center gap-2 pointer-events-auto">
        {nodes.map((node, idx) => (
          <button
            key={node.id}
            type="button"
            onClick={() => onSelectPillar?.(node.id)}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            className={`group text-left px-3.5 py-2 rounded-xl backdrop-blur-md border transition-all duration-200 cursor-pointer shadow-sm ${
              activePillar === node.id || hoveredNode === node.id
                ? `bg-white ${node.border} ring-2 ring-blue-500/20 scale-[1.03] shadow-md`
                : 'bg-white/90 border-slate-200 hover:border-slate-300 hover:bg-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-slate-400">0{idx + 1}</span>
              <span className={`text-xs font-bold uppercase tracking-wider ${node.text}`}>
                {node.label}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block max-w-[130px] truncate mt-0.5 font-normal">
              {node.desc}
            </p>
          </button>
        ))}
      </div>

      {/* Central Axis Watermark/Label */}
      <div className="absolute top-4 right-4 z-10 pointer-events-none">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg border border-slate-200 bg-white/90 backdrop-blur-sm text-[11px] font-mono text-slate-600 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Interactive Operational Engine</span>
        </div>
      </div>
    </div>
  );
};
