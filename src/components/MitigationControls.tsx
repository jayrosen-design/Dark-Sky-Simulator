import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import MitigationControlModal from './MitigationControlModal';
import { Shield, Lightbulb, Clock, MapPin, Star, Leaf, Building, Car, RotateCcw, Users, BarChart3, Info, ChevronDown, ChevronRight } from 'lucide-react';
interface MitigationControlsProps {
  settings: Record<string, boolean | number>;
  onSettingChange: (key: string, value: boolean | number) => void;
}
const MitigationControls: React.FC<MitigationControlsProps> = ({
  settings,
  onSettingChange
}) => {
  const [selectedControl, setSelectedControl] = useState<string | null>(null);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'Lighting Policy Changes': true,
    'Public Infrastructure': false,
    'Protected Zones': false,
    'Transportation Mitigation': false,
    'Community & Monitoring': false
  });
  const controlSections = [{
    title: 'Lighting Policy Changes',
    icon: <Shield className="w-4 h-4" />,
    color: 'primary',
    controls: [{
      key: 'fullShielding',
      label: 'Full-Cutoff Fixtures Mandate',
      description: 'Require fully shielded lighting (ULOR = 0)',
      type: 'switch' as const,
      impact: 'High'
    }, {
      key: 'cctLimits',
      label: 'Color Temperature Limits',
      description: 'Maximum 3000K for new installations',
      type: 'switch' as const,
      impact: 'Medium'
    }, {
      key: 'intensityReduction',
      label: 'Light Intensity Reduction',
      description: 'Reduce overall lighting levels',
      type: 'slider' as const,
      min: 0,
      max: 50,
      step: 5,
      unit: '%',
      impact: 'High'
    }, {
      key: 'curfews',
      label: 'Lighting Curfews',
      description: 'Automated dimming 12AM-5AM',
      type: 'switch' as const,
      impact: 'High'
    }]
  }, {
    title: 'Public Infrastructure',
    icon: <Lightbulb className="w-4 h-4" />,
    color: 'mitigation',
    controls: [{
      key: 'streetlightDimming',
      label: 'Streetlight Dimming',
      description: 'Adaptive controls for GRU streetlights',
      type: 'switch' as const,
      impact: 'Medium'
    }, {
      key: 'warmLEDs',
      label: 'Warm LED Standard',
      description: '2700K LEDs as default specification',
      type: 'switch' as const,
      impact: 'Medium'
    }]
  }, {
    title: 'Protected Zones',
    icon: <MapPin className="w-4 h-4" />,
    color: 'success',
    controls: [{
      key: 'darkSkyOverlays',
      label: 'Dark Sky Overlay Zones',
      description: 'Special protections for sensitive areas',
      type: 'switch' as const,
      impact: 'Medium'
    }, {
      key: 'campusLighting',
      label: 'UF Campus Retrofit',
      description: 'University lighting master plan',
      type: 'switch' as const,
      impact: 'Medium'
    }]
  }, {
    title: 'Transportation Mitigation',
    icon: <Car className="w-4 h-4" />,
    color: 'accent',
    controls: [{
      key: 'highwayBarriers',
      label: 'Highway Light Barriers',
      description: 'Physical barriers along US 441',
      type: 'switch' as const,
      impact: 'Low'
    }, {
      key: 'lowAlbedoSurfaces',
      label: 'Dark Road Surfaces',
      description: 'Light-absorbing pavement materials',
      type: 'switch' as const,
      impact: 'Low'
    }]
  }, {
    title: 'Community & Monitoring',
    icon: <Users className="w-4 h-4" />,
    color: 'mitigation',
    controls: [{
      key: 'communityEducation',
      label: 'Community Education Program',
      description: 'Public outreach and dark sky awareness initiatives',
      type: 'switch' as const,
      impact: 'Medium'
    }, {
      key: 'monitoringProgram',
      label: 'Sky Quality Monitoring',
      description: 'Ongoing measurement and data collection program',
      type: 'switch' as const,
      impact: 'Medium'
    }]
  }];
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'accent';
      case 'Low':
        return 'muted';
      default:
        return 'muted';
    }
  };
  const toggleSection = (sectionTitle: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };
  const getActiveControlsCount = (controls: any[]) => {
    return controls.filter(control => {
      if (control.type === 'switch') {
        return settings[control.key] === true;
      } else {
        return settings[control.key] as number > 0;
      }
    }).length;
  };
  return <>
    <div className="h-full overflow-y-auto p-3 space-y-2 pb-4">

      {controlSections.map(section => <Collapsible key={section.title} open={openSections[section.title]} onOpenChange={() => toggleSection(section.title)}>
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-space">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full p-3 h-auto justify-start hover:bg-muted/20">
                <div className="flex items-center gap-2 flex-1">
                  <div className={`p-1.5 rounded-md bg-${section.color}/10 text-${section.color}`}>
                    {section.icon}
                  </div>
                   <h3 className="font-medium text-foreground text-base">{section.title}</h3>
                   {!openSections[section.title] && <Badge variant="secondary" className="text-sm px-2 py-1 ml-2 bg-muted/40 text-muted-foreground">
                       {getActiveControlsCount(section.controls)}/{section.controls.length}
                     </Badge>}
                   <div className="ml-auto">
                     {openSections[section.title] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                   </div>
                </div>
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent>
              <div className="px-3 pb-3 space-y-3">
              {section.controls.map(control => <div key={control.key} className="space-y-1.5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <label className="text-sm font-medium text-foreground">
                          {control.label}
                        </label>
                        <Button variant="ghost" size="sm" className="h-4 w-4 p-0 hover:bg-primary/10" onClick={() => setSelectedControl(control.key)}>
                          <Info className="h-2.5 w-2.5 text-muted-foreground hover:text-primary" />
                        </Button>
                        <Badge variant="outline" className={`text-sm px-2 py-1 border-${getImpactColor(control.impact)}/50 text-${getImpactColor(control.impact)}`}>
                          {control.impact}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-tight">
                        {control.description}
                      </p>
                    </div>
                    
                    <div className="ml-3">
                      {control.type === 'switch' ? <Switch checked={settings[control.key] as boolean} onCheckedChange={checked => onSettingChange(control.key, checked)} className="data-[state=checked]:bg-primary scale-90" /> : <div className="w-20">
                          <Slider value={[settings[control.key] as number]} onValueChange={([value]) => onSettingChange(control.key, value)} min={control.min} max={control.max} step={control.step} className="w-full" />
                          <div className="text-sm text-center text-muted-foreground mt-0.5">
                            {settings[control.key]}{control.unit}
                          </div>
                        </div>}
                    </div>
                  </div>
                </div>)}
              </div>
            </CollapsibleContent>
          </Card>
        </Collapsible>)}
      
      
    </div>
    
    <MitigationControlModal isOpen={selectedControl !== null} onClose={() => setSelectedControl(null)} controlKey={selectedControl || ''} />
    </>;
};
export default MitigationControls;