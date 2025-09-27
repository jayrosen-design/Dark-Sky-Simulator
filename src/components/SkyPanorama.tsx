import React, { Suspense, useMemo, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SkyPanoramaProps {
  mitigationSettings: Record<string, boolean | number>;
}

interface AreaData {
  name: string;
  baseBortle: number;
}

const SkyPanorama: React.FC<SkyPanoramaProps> = ({ mitigationSettings }) => {
  const [selectedArea, setSelectedArea] = useState<string>('paynes-prairie');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const controlsRef = useRef<any>(null);

  const areas: Record<string, AreaData> = {
    'paynes-prairie': { name: 'Paynes Prairie', baseBortle: 4 },
    'suburban': { name: 'Suburban Gainesville', baseBortle: 6 },
    'downtown': { name: 'Gainesville Downtown', baseBortle: 9 },
  };

  // Calculate all area Bortle classes based on mitigation (matching progress dashboard)
  const allAreaBortleClasses = useMemo(() => {
    const calculateBortleForArea = (baseBortle: number) => {
      let factor = 1.0;
      if (mitigationSettings.fullShielding) factor *= 0.75;
      if (mitigationSettings.cctLimits) factor *= 0.85;
      if (mitigationSettings.curfews) factor *= 0.70;
      if (mitigationSettings.streetlightDimming) factor *= 0.90;
      if (mitigationSettings.darkSkyOverlays) factor *= 0.80;
      if (mitigationSettings.intensityReduction) {
        factor *= (1 - (mitigationSettings.intensityReduction as number) * 0.01);
      }
      
      // More aggressive improvement calculation to match visibility calculations
      const improvement = 1 - Math.max(factor, 0.15); // Lower minimum for better improvements
      const bortleReduction = improvement * (baseBortle - 1); // Can improve all the way to Bortle 1
      const newBortle = Math.max(1, Math.round(baseBortle - bortleReduction));
      
      return newBortle;
    };

    return {
      'paynes-prairie': calculateBortleForArea(areas['paynes-prairie'].baseBortle),
      'suburban': calculateBortleForArea(areas['suburban'].baseBortle),
      'downtown': calculateBortleForArea(areas['downtown'].baseBortle),
    };
  }, [mitigationSettings, areas]);

  // Get current Bortle class for selected area
  const currentBortleClass = allAreaBortleClasses[selectedArea];

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
        <meshBasicMaterial 
          map={texture} 
          side={THREE.BackSide}
          color={new THREE.Color(1.3, 1.3, 1.3)} // 30% brighter
        />
      </Sphere>
    );
  };

  const handleZoomIn = () => {
    if (controlsRef.current) {
      const camera = controlsRef.current.object;
      const currentFov = camera.fov;
      const newFov = Math.max(15, currentFov - 10); // Min zoom (FOV)
      camera.fov = newFov;
      camera.updateProjectionMatrix();
    }
  };

  const handleZoomOut = () => {
    if (controlsRef.current) {
      const camera = controlsRef.current.object;
      const currentFov = camera.fov;
      const newFov = Math.min(120, currentFov + 10); // Max zoom (FOV)
      camera.fov = newFov;
      camera.updateProjectionMatrix();
    }
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
            ref={controlsRef}
            enableZoom={false} // We'll handle zoom manually with buttons
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
      
      {/* Zoom Controls - Left Side */}
      <div className="absolute top-4 left-4 z-[1001] flex flex-col gap-1">
        <Button
          variant="outline"
          size="icon"
          onClick={handleZoomIn}
          className="h-8 w-8 bg-card/95 backdrop-blur-sm border-primary/20 hover:bg-card/100 text-foreground"
          title="Zoom In"
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleZoomOut}
          className="h-8 w-8 bg-card/95 backdrop-blur-sm border-primary/20 hover:bg-card/100 text-foreground"
          title="Zoom Out"
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>

      {/* Area Selector Dropdown - Right Side */}
      <div className="absolute top-4 right-4 z-[1001]">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 bg-card/95 backdrop-blur-sm border border-primary/20 rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-card/100 transition-colors"
          >
            <span>{areas[selectedArea].name} - Bortle {currentBortleClass}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-1 bg-card border border-primary/20 rounded-lg shadow-xl z-[1002] min-w-full">
              {Object.entries(areas).map(([key, area]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedArea(key);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-muted/50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    selectedArea === key ? 'bg-primary/10 text-primary' : 'text-foreground'
                  }`}
                >
                  {area.name} - Bortle {allAreaBortleClasses[key]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sky Info Overlay */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20 z-[1000]">
        <h4 className="font-semibold text-sm mb-1">Sky View Simulation</h4>
        <div className="text-xs space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span>{areas[selectedArea].name}</span>
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
          Drag to look around • +/- to zoom
        </div>
      </div>
    </div>
  );
};

export default SkyPanorama;