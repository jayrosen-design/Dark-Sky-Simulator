import React, { useState } from 'react';
import DarkSkyMap from '@/components/DarkSkyMap';
import SkyPanorama from '@/components/SkyPanorama';
import MitigationControls from '@/components/MitigationControls';
import ProgressDashboard from '@/components/ProgressDashboard';
import { Card } from '@/components/ui/card';
import { Star, Map, Settings, BarChart3, RotateCcw, Eye } from 'lucide-react';

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

  // Calculate improved Bortle classes for each area
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
    
    const improvement = 1 - Math.max(factor, 0.25);
    const maxImprovement = baseBortle <= 4 ? 2 : baseBortle <= 6 ? 3 : 4;
    const bortleImprovement = Math.floor(improvement * maxImprovement);
    return Math.max(1, baseBortle - bortleImprovement);
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
      <div className="w-full space-y-4 p-4">
        {/* Header */}
        <Card className="p-4 bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
            
            {/* Title Column */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 animate-glow">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">
                  Alachua Dark Sky Simulator
                </h1>
                <p className="text-xs text-muted-foreground">
                  Interactive planning tool
                </p>
              </div>
            </div>

            {/* Gainesville Downtown */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/20">
              <Map className="w-4 h-4 text-primary" />
              <div>
                <div className="font-medium text-foreground text-xs">Gainesville Downtown</div>
                <div className="text-muted-foreground text-xs">
                  Bortle {areas.downtown.original}
                  {areas.downtown.improved !== areas.downtown.original && (
                    <span className="text-success"> → {areas.downtown.improved}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Suburban Gainesville */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/20">
              <Star className="w-4 h-4 text-mitigation" />
              <div>
                <div className="font-medium text-foreground text-xs">Suburban Gainesville</div>
                <div className="text-muted-foreground text-xs">
                  Bortle {areas.suburban.original}
                  {areas.suburban.improved !== areas.suburban.original && (
                    <span className="text-success"> → {areas.suburban.improved}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Paynes Prairie */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/20">
              <BarChart3 className="w-4 h-4 text-success" />
              <div>
                <div className="font-medium text-foreground text-xs">Paynes Prairie</div>
                <div className="text-muted-foreground text-xs">
                  Bortle {areas.paynes.original}
                  {areas.paynes.improved !== areas.paynes.original && (
                    <span className="text-success"> → {areas.paynes.improved}</span>
                  )}
                </div>
              </div>
            </div>

          </div>
        </Card>

        {/* Main Content - 3 Column Layout */}
        <div className="grid grid-cols-12 gap-4 min-h-[calc(100vh-8rem)]">
          
          {/* Left Column - Mitigation Controls */}
          <div className="col-span-12 lg:col-span-3">
            <Card className="h-auto lg:h-full bg-card/50 backdrop-blur-sm border-primary/20">
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
              <div className="lg:h-[calc(100%-5rem)]">
                <MitigationControls 
                  settings={mitigationSettings}
                  onSettingChange={handleSettingChange}
                />
              </div>
            </Card>
          </div>

          {/* Center Column - Map and Sky View */}
          <div className="col-span-12 lg:col-span-6 space-y-4">
            {/* Light Pollution Map */}
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <Map className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  Light Pollution Map
                </h2>
              </div>
              <div className="h-64 lg:h-80">
                <DarkSkyMap mitigationSettings={mitigationSettings} />
              </div>
            </Card>

            {/* Sky Panorama Viewer */}
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  Night Sky Simulation
                </h2>
              </div>
              <div className="h-96 lg:h-[28rem]">
                <SkyPanorama mitigationSettings={mitigationSettings} />
              </div>
            </Card>
          </div>

          {/* Right Column - Progress Dashboard */}
          <div className="col-span-12 lg:col-span-3">
            <Card className="h-auto lg:h-full bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="p-4 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Progress Dashboard
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Track certification progress
                </p>
              </div>
              <div className="lg:h-[calc(100%-5rem)] lg:overflow-hidden">
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
