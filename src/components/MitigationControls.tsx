import React from 'react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Lightbulb, 
  Clock, 
  MapPin,
  Star,
  Leaf,
  Building,
  Car
} from 'lucide-react';

interface MitigationControlsProps {
  settings: Record<string, boolean | number>;
  onSettingChange: (key: string, value: boolean | number) => void;
}

const MitigationControls: React.FC<MitigationControlsProps> = ({ 
  settings, 
  onSettingChange 
}) => {
  const controlSections = [
    {
      title: 'Lighting Policy Changes',
      icon: <Shield className="w-4 h-4" />,
      color: 'primary',
      controls: [
        {
          key: 'fullShielding',
          label: 'Full-Cutoff Fixtures Mandate',
          description: 'Require fully shielded lighting (ULOR = 0)',
          type: 'switch' as const,
          impact: 'High'
        },
        {
          key: 'cctLimits',
          label: 'Color Temperature Limits',
          description: 'Maximum 3000K for new installations',
          type: 'switch' as const,
          impact: 'Medium'
        },
        {
          key: 'intensityReduction',
          label: 'Light Intensity Reduction',
          description: 'Reduce overall lighting levels',
          type: 'slider' as const,
          min: 0,
          max: 50,
          step: 5,
          unit: '%',
          impact: 'High'
        },
        {
          key: 'curfews',
          label: 'Lighting Curfews',
          description: 'Automated dimming 12AM-5AM',
          type: 'switch' as const,
          impact: 'High'
        }
      ]
    },
    {
      title: 'Public Infrastructure',
      icon: <Lightbulb className="w-4 h-4" />,
      color: 'mitigation',
      controls: [
        {
          key: 'streetlightDimming',
          label: 'Streetlight Dimming',
          description: 'Adaptive controls for GRU streetlights',
          type: 'switch' as const,
          impact: 'Medium'
        },
        {
          key: 'warmLEDs',
          label: 'Warm LED Standard',
          description: '2700K LEDs as default specification',
          type: 'switch' as const,
          impact: 'Medium'
        }
      ]
    },
    {
      title: 'Protected Zones',
      icon: <MapPin className="w-4 h-4" />,
      color: 'success',
      controls: [
        {
          key: 'darkSkyOverlays',
          label: 'Dark Sky Overlay Zones',
          description: 'Special protections for sensitive areas',
          type: 'switch' as const,
          impact: 'Medium'
        },
        {
          key: 'campusLighting',
          label: 'UF Campus Retrofit',
          description: 'University lighting master plan',
          type: 'switch' as const,
          impact: 'Medium'
        }
      ]
    },
    {
      title: 'Transportation Mitigation',
      icon: <Car className="w-4 h-4" />,
      color: 'accent',
      controls: [
        {
          key: 'highwayBarriers',
          label: 'Highway Light Barriers',
          description: 'Physical barriers along US 441',
          type: 'switch' as const,
          impact: 'Low'
        },
        {
          key: 'lowAlbedoSurfaces',
          label: 'Dark Road Surfaces',
          description: 'Light-absorbing pavement materials',
          type: 'switch' as const,
          impact: 'Low'
        }
      ]
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'destructive';
      case 'Medium': return 'accent';
      case 'Low': return 'muted';
      default: return 'muted';
    }
  };

  return (
    <div className="space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
      <div className="sticky top-0 bg-gradient-space p-4 rounded-lg border border-primary/20 z-10">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Star className="w-5 h-5 text-primary" />
          Mitigation Strategies
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Configure light pollution reduction measures to improve dark sky conditions
        </p>
      </div>

      {controlSections.map((section) => (
        <Card 
          key={section.title}
          className="p-4 bg-card/80 backdrop-blur-sm border-primary/20 shadow-space"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 rounded-md bg-${section.color}/10 text-${section.color}`}>
              {section.icon}
            </div>
            <h3 className="font-semibold text-foreground">{section.title}</h3>
          </div>
          
          <div className="space-y-4">
            {section.controls.map((control) => (
              <div key={control.key} className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <label className="text-sm font-medium text-foreground">
                        {control.label}
                      </label>
                      <Badge 
                        variant="outline" 
                        className={`text-xs border-${getImpactColor(control.impact)}/50 text-${getImpactColor(control.impact)}`}
                      >
                        {control.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {control.description}
                    </p>
                  </div>
                  
                  <div className="ml-4">
                    {control.type === 'switch' ? (
                      <Switch
                        checked={settings[control.key] as boolean}
                        onCheckedChange={(checked) => 
                          onSettingChange(control.key, checked)
                        }
                        className="data-[state=checked]:bg-primary"
                      />
                    ) : (
                      <div className="w-24">
                        <Slider
                          value={[settings[control.key] as number]}
                          onValueChange={([value]) => 
                            onSettingChange(control.key, value)
                          }
                          min={control.min}
                          max={control.max}
                          step={control.step}
                          className="w-full"
                        />
                        <div className="text-xs text-center text-muted-foreground mt-1">
                          {settings[control.key]}{control.unit}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
      
      <Card className="p-4 bg-gradient-dark-sky border-primary/20 shadow-glow">
        <div className="flex items-center gap-2 mb-2">
          <Leaf className="w-4 h-4 text-success" />
          <h3 className="font-semibold text-foreground">Environmental Impact</h3>
        </div>
        <p className="text-xs text-muted-foreground">
          These mitigation strategies also benefit wildlife, reduce energy consumption, 
          and improve human health by minimizing artificial light at night.
        </p>
      </Card>
    </div>
  );
};

export default MitigationControls;