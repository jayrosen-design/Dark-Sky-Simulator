import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Diagram = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            System Architecture & Data Flow
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This diagram illustrates how the Dark Sky Simulator processes user inputs to calculate 
            mitigation costs, update Bortle classifications, and dynamically render both the light 
            pollution map and night sky visualization.
          </p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Application Data Flow & Processing Pipeline</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full overflow-x-auto">
              <div className="flex flex-col items-center space-y-6 p-8">
                {/* User Input */}
                <div className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg">
                  User Input: Mitigation Controls
                </div>
                
                <ArrowDown className="text-muted-foreground" />
                
                {/* State Management */}
                <div className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg">
                  Mitigation Settings State
                </div>
                
                <ArrowDown className="text-muted-foreground" />
                
                {/* Processing Engines */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium text-center shadow-lg">
                      Cost Calculation Engine
                    </div>
                    <ArrowDown className="text-muted-foreground" />
                    <div className="space-y-2 text-center">
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">Calculate Initial Costs</div>
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">Calculate Annual Savings</div>
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">Calculate Maintenance</div>
                      <ArrowDown className="text-muted-foreground h-4 w-4" />
                      <div className="bg-orange-500 text-white px-3 py-2 rounded text-sm">Cost Estimate Display</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium text-center shadow-lg">
                      Bortle Scale Calculator
                    </div>
                    <ArrowDown className="text-muted-foreground" />
                    <div className="space-y-2 text-center">
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">Apply Base Values</div>
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">Shielding Factor 0.75x</div>
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">CCT Limits 0.85x</div>
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">Curfews 0.70x</div>
                      <ArrowDown className="text-muted-foreground h-4 w-4" />
                      <div className="bg-orange-500 text-white px-3 py-2 rounded text-sm">Update Sky Texture</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium text-center shadow-lg">
                      Map Renderer
                    </div>
                    <ArrowDown className="text-muted-foreground" />
                    <div className="space-y-2 text-center">
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">Load Base Data</div>
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">Calculate Mitigation</div>
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">Apply Opacity</div>
                      <ArrowDown className="text-muted-foreground h-4 w-4" />
                      <div className="bg-orange-500 text-white px-3 py-2 rounded text-sm">Render Map Layer</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-medium text-center shadow-lg">
                      Sky Panorama Generator
                    </div>
                    <ArrowDown className="text-muted-foreground" />
                    <div className="space-y-2 text-center">
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">Select Area Baseline</div>
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">Apply Bortle Calc</div>
                      <div className="bg-purple-500 text-white px-3 py-2 rounded text-sm">Load Sky Texture</div>
                      <ArrowDown className="text-muted-foreground h-4 w-4" />
                      <div className="bg-orange-500 text-white px-3 py-2 rounded text-sm">Render 3D Panorama</div>
                    </div>
                  </div>
                </div>

                <ArrowDown className="text-muted-foreground" />
                
                {/* Progress Dashboard */}
                <div className="bg-orange-500 text-white px-8 py-4 rounded-lg font-medium shadow-lg">
                  Progress Dashboard & Achievement Metrics
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Key Processing Components</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Cost Calculation Engine</h4>
                <p className="text-sm text-muted-foreground">
                  Processes each mitigation setting to calculate initial implementation costs, 
                  annual energy savings, maintenance expenses, and payback periods based on 
                  predefined cost data matrices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Bortle Scale Calculator</h4>
                <p className="text-sm text-muted-foreground">
                  Applies multiplicative reduction factors to base Bortle classifications, 
                  with each mitigation strategy contributing specific percentage improvements 
                  to overall light pollution levels.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Map Renderer</h4>
                <p className="text-sm text-muted-foreground">
                  Dynamically updates polygon opacity and colors on the Leaflet map to 
                  visualize light pollution reduction in real-time as mitigation settings change.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Calculation Methodology</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Mitigation Factors</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Full Shielding:</strong> 25% reduction (0.75x factor)</li>
                  <li>• <strong>CCT Limits:</strong> 15% reduction (0.85x factor)</li>
                  <li>• <strong>Curfews:</strong> 30% reduction (0.70x factor)</li>
                  <li>• <strong>Dimming:</strong> 10% reduction (0.90x factor)</li>
                  <li>• <strong>Intensity:</strong> Variable 0-50% reduction</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Sky Texture Selection</h4>
                <p className="text-sm text-muted-foreground">
                  Each calculated Bortle class (1-9) corresponds to a specific panoramic 
                  sky texture that accurately represents star visibility and atmospheric 
                  glow levels for that light pollution category.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Diagram;