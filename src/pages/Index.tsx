import React, { useState } from 'react';
import DarkSkyMap from '@/components/DarkSkyMap';
import MitigationControls from '@/components/MitigationControls';
import ProgressDashboard from '@/components/ProgressDashboard';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Map, Settings, BarChart3 } from 'lucide-react';

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
  });

  const handleSettingChange = (key: string, value: boolean | number) => {
    setMitigationSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-space p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 animate-glow">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Alachua Dark Sky Simulator
              </h1>
              <p className="text-muted-foreground">
                Interactive light pollution mapping and mitigation planning for Alachua County, Florida
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/20">
              <Map className="w-4 h-4 text-primary" />
              <div>
                <div className="font-medium text-foreground">Current Status</div>
                <div className="text-muted-foreground">Bortle 4.5 in Paynes Prairie</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/20">
              <Star className="w-4 h-4 text-mitigation" />
              <div>
                <div className="font-medium text-foreground">Goal</div>
                <div className="text-muted-foreground">International Dark Sky Status</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/20">
              <BarChart3 className="w-4 h-4 text-success" />
              <div>
                <div className="font-medium text-foreground">Impact Area</div>
                <div className="text-muted-foreground">Alachua County</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-16rem)]">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="h-full p-4 bg-card/50 backdrop-blur-sm border-primary/20">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Map className="w-5 h-5 text-primary" />
                Light Pollution Map
              </h2>
              <div className="h-[calc(100%-3rem)]">
                <DarkSkyMap mitigationSettings={mitigationSettings} />
              </div>
            </Card>
          </div>

          {/* Controls and Dashboard */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="controls" className="h-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-muted/20">
                <TabsTrigger value="controls" className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Controls
                </TabsTrigger>
                <TabsTrigger value="progress" className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Progress
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="controls" className="h-[calc(100%-4rem)]">
                <Card className="h-full p-4 bg-card/50 backdrop-blur-sm border-primary/20">
                  <MitigationControls 
                    settings={mitigationSettings}
                    onSettingChange={handleSettingChange}
                  />
                </Card>
              </TabsContent>
              
              <TabsContent value="progress" className="h-[calc(100%-4rem)]">
                <Card className="h-full p-4 bg-card/50 backdrop-blur-sm border-primary/20">
                  <ProgressDashboard mitigationSettings={mitigationSettings} />
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
