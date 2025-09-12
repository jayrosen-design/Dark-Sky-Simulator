import React, { useState } from 'react';
import DarkSkyMap from '@/components/DarkSkyMap';
import MitigationControls from '@/components/MitigationControls';
import ProgressDashboard from '@/components/ProgressDashboard';
import { Card } from '@/components/ui/card';
import { Star, Map, Settings, BarChart3, RotateCcw } from 'lucide-react';

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

            {/* Current Status Column */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-muted/20">
              <div className="flex items-center gap-2">
                <Map className="w-4 h-4 text-primary" />
                <div>
                  <div className="font-medium text-foreground text-xs">Current Status</div>
                  <div className="text-muted-foreground text-xs">Bortle 4.5</div>
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

            {/* Goal Column */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/20">
              <Star className="w-4 h-4 text-mitigation" />
              <div>
                <div className="font-medium text-foreground text-xs">Goal</div>
                <div className="text-muted-foreground text-xs">Dark Sky Status</div>
              </div>
            </div>

            {/* Impact Area Column */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/20">
              <BarChart3 className="w-4 h-4 text-success" />
              <div>
                <div className="font-medium text-foreground text-xs">Impact Area</div>
                <div className="text-muted-foreground text-xs">Alachua County</div>
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
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Mitigation Controls
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Configure reduction strategies
                </p>
              </div>
              <div className="lg:h-[calc(100%-5rem)]">
                <MitigationControls 
                  settings={mitigationSettings}
                  onSettingChange={handleSettingChange}
                />
              </div>
            </Card>
          </div>

          {/* Center Column - Map */}
          <div className="col-span-12 lg:col-span-6">
            <Card className="h-auto lg:h-full p-4 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <Map className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  Light Pollution Map
                </h2>
              </div>
              <div className="h-96 lg:h-[calc(100%-3rem)]">
                <DarkSkyMap mitigationSettings={mitigationSettings} />
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
