import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface SkyPanoramaProps {
  mitigationSettings: Record<string, boolean | number>;
}

const SkyPanorama: React.FC<SkyPanoramaProps> = ({ mitigationSettings }) => {
  // Calculate the current Bortle class for Paynes Prairie based on mitigation
  const currentBortleClass = useMemo(() => {
    const baseBortle = 4; // Paynes Prairie starts at Bortle 4
    
    // Calculate mitigation factor (same logic as in DarkSkyMap)
    let factor = 1.0;
    if (mitigationSettings.fullShielding) factor *= 0.75;
    if (mitigationSettings.cctLimits) factor *= 0.85;
    if (mitigationSettings.curfews) factor *= 0.70;
    if (mitigationSettings.streetlightDimming) factor *= 0.90;
    if (mitigationSettings.darkSkyOverlays) factor *= 0.80;
    if (mitigationSettings.intensityReduction) {
      factor *= (1 - (mitigationSettings.intensityReduction as number) * 0.01);
    }
    
    // Convert factor to Bortle improvement
    const improvement = 1 - Math.max(factor, 0.25);
    const bortleImprovement = Math.floor(improvement * 3); // Max 3 class improvement
    const newBortle = Math.max(1, baseBortle - bortleImprovement);
    
    return newBortle;
  }, [mitigationSettings]);

  const PanoramaSphere = () => {
    const texture = useMemo(() => {
      const loader = new THREE.TextureLoader();
      const tex = loader.load(`/bortle${currentBortleClass}.png`);
      tex.mapping = THREE.EquirectangularReflectionMapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    }, [currentBortleClass]);

    return (
      <Sphere args={[50, 64, 32]} scale={[-1, 1, 1]}>
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </Sphere>
    );
  };

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden border border-primary/20 shadow-glow bg-background">
      <Canvas
        camera={{
          position: [0, 0, 0.1],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <PanoramaSphere />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
      
      {/* Overlay info */}
      <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20 z-[1000]">
        <h4 className="font-semibold text-sm mb-1">Sky View Simulation</h4>
        <div className="text-xs space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span>Paynes Prairie Area</span>
          </div>
          <div className="font-medium">
            Bortle Class {currentBortleClass}
          </div>
          <div className="text-muted-foreground text-xs">
            {currentBortleClass <= 2 ? 'Excellent Dark Sky' :
             currentBortleClass <= 4 ? 'Rural Sky' :
             currentBortleClass <= 6 ? 'Suburban Sky' :
             'Urban Sky'}
          </div>
        </div>
      </div>

      {/* Controls hint */}
      <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-2 border border-primary/20 z-[1000]">
        <div className="text-xs text-muted-foreground">
          Drag to look around
        </div>
      </div>
    </div>
  );
};

export default SkyPanorama;