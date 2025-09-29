import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
              <lov-mermaid>
graph TD
    A[User Input: Mitigation Controls] --> B{Mitigation Settings State}
    
    B --> C[Cost Calculation Engine]
    B --> D[Bortle Scale Calculator]  
    B --> E[Light Pollution Map Renderer]
    B --> F[Night Sky Panorama Generator]
    
    C --> C1[Calculate Initial Costs]
    C --> C2[Calculate Annual Savings]
    C --> C3[Calculate Maintenance Costs]
    C1 --> C4[Cost Estimate Display]
    C2 --> C4
    C3 --> C4
    C4 --> C5[Payback Period Analysis]
    
    D --> D1[Apply Base Bortle Values]
    D1 --> D2[Apply Shielding Factor 0.75x]
    D2 --> D3[Apply CCT Limits 0.85x]
    D3 --> D4[Apply Curfews 0.70x]
    D4 --> D5[Apply Dimming 0.90x]
    D5 --> D6[Apply Intensity Reduction]
    D6 --> D7[Calculate Final Bortle Class]
    D7 --> D8[Update Sky Panorama Texture]
    
    E --> E1[Load Base Light Pollution Data]
    E1 --> E2[Calculate Mitigation Factor]
    E2 --> E3[Apply Opacity Reduction]
    E3 --> E4[Update Polygon Colors]
    E4 --> E5[Render Updated Map Layer]
    
    F --> F1[Select Area Baseline]
    F1 --> F2[Apply Bortle Calculation]
    F2 --> F3[Load Corresponding Sky Texture]
    F3 --> F4[Render 3D Panorama Sphere]
    
    D7 --> G[Progress Dashboard]
    C5 --> G
    G --> G1[Calculate Overall Progress]
    G1 --> G2[Update Achievement Metrics]
    
    classDef inputNode fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
    classDef processNode fill:#10b981,stroke:#047857,stroke-width:2px,color:#fff  
    classDef outputNode fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    classDef calcNode fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    
    class A inputNode
    class B inputNode
    class C,D,E,F processNode
    class C4,C5,D8,E5,F4,G2 outputNode
    class C1,C2,C3,D1,D2,D3,D4,D5,D6,D7,E1,E2,E3,E4,F1,F2,F3,G,G1 calcNode
              </lov-mermaid>
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