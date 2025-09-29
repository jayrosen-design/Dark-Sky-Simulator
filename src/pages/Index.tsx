import React, { useState } from 'react';
import DarkSkyMap from '@/components/DarkSkyMap';
import SkyPanorama from '@/components/SkyPanorama';
import MitigationControls from '@/components/MitigationControls';
import ProgressDashboard from '@/components/ProgressDashboard';
import CostEstimate from '@/components/CostEstimate';
import { Card } from '@/components/ui/card';
import { Star, Map, Settings, BarChart3, RotateCcw, Eye, DollarSign } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  const [mitigationSettings, setMitigationSettings] = useState({
    // Lighting Policy
    fullShielding: false,
    cctLimits: false,
    intensityReduction: 0,
    curfews: false,
    
    // Public Infrastructure
    streetlightDimming: false,
    warmLEDs: false,
    
    // Protected Zones
    darkSkyOverlays: false,
    campusLighting: false,
    
    // Transportation
    highwayBarriers: false,
    lowAlbedoSurfaces: false,
    
    // Certification Requirements
    communityEducation: false,
    monitoringProgram: false,
  });

  // Calculate improved Bortle classes for each area (more aggressive improvements)
  const calculateImprovedBortle = (baseBortle: number) => {
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

  const areas = {
    downtown: { original: 9, improved: calculateImprovedBortle(9) },
    suburban: { original: 6, improved: calculateImprovedBortle(6) },
    paynes: { original: 4, improved: calculateImprovedBortle(4) },
  };

  const handleSettingChange = (key: string, value: boolean | number) => {
    setMitigationSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleReset = () => {
    setMitigationSettings({
      fullShielding: false,
      cctLimits: false,
      intensityReduction: 0,
      curfews: false,
      streetlightDimming: false,
      warmLEDs: false,
      darkSkyOverlays: false,
      campusLighting: false,
      highwayBarriers: false,
      lowAlbedoSurfaces: false,
      communityEducation: false,
      monitoringProgram: false,
    });
  };

  const handleApplyPreset = (presetSettings: Record<string, boolean | number>) => {
    setMitigationSettings(prev => ({
      ...prev,
      ...presetSettings
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-space">
      <div className="w-full space-y-4 p-2 sm:p-4 pb-8">{/* Reduced padding on mobile, wider on desktop */}
        {/* Main Content - Responsive Layout */}
        <div className="space-y-4 xl:grid xl:grid-cols-12 xl:gap-4 xl:space-y-0">{/* Changed to xl breakpoint for better tablet experience */}
          
          {/* Left Column - Mitigation Controls */}
          <div className="xl:col-span-3">{/* Changed to xl breakpoint */}
            <Card className="bg-card backdrop-blur-sm border-primary/20">
              <div className="p-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-primary" />
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">Mitigation Controls</h2>
                      <p className="text-sm text-muted-foreground">Configure reduction strategies</p>
                    </div>
                  </div>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-destructive/10 hover:bg-destructive/20 border border-destructive/20 text-destructive rounded transition-colors"
                    title="Reset to natural baseline"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                </div>
              </div>
              <div>
                <MitigationControls 
                  settings={mitigationSettings}
                  onSettingChange={handleSettingChange}
                />
              </div>
            </Card>
          </div>

          {/* Center Column - Cost, Map and Sky View */}
          <div className="xl:col-span-6">{/* Changed to xl breakpoint */}
            <div className="space-y-4">
              {/* Cost Estimate */}
              <CostEstimate mitigationSettings={mitigationSettings} />

              {/* Light Pollution Map */}
              <Card className="p-4 bg-card backdrop-blur-sm border-primary/20">
                <div className="flex items-center gap-2 mb-4">
                  <Map className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">
                    Alachua County - Light Pollution Map
                  </h2>
                </div>
                <div className="h-64 sm:h-80 xl:h-[350px]">{/* Responsive height */}
                  <DarkSkyMap mitigationSettings={mitigationSettings} />
                </div>
              </Card>

              {/* Sky Panorama Viewer */}
              <Card className="p-4 bg-card backdrop-blur-sm border-primary/20">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">
                    Night Sky Simulation
                  </h2>
                </div>
                <div className="h-64 sm:h-80 xl:h-[350px]">{/* Responsive height */}
                  <SkyPanorama mitigationSettings={mitigationSettings} />
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Progress Dashboard */}
          <div className="xl:col-span-3">{/* Changed to xl breakpoint */}
            <Card className="bg-card backdrop-blur-sm border-primary/20">
              <div className="p-4 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Dark Sky Initiative Progress
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Track certification progress
                </p>
              </div>
              <div>
                <ProgressDashboard 
                  mitigationSettings={mitigationSettings} 
                  onApplyPreset={handleApplyPreset}
                />
              </div>
            </Card>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Index;
