import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Target, 
  Star, 
  Award, 
  TrendingUp,
  MapPin,
  Eye,
  CheckCircle2,
  Info
} from 'lucide-react';

interface ProgressDashboardProps {
  mitigationSettings: Record<string, boolean | number>;
  onApplyPreset: (settings: Record<string, boolean | number>) => void;
}

const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ 
  mitigationSettings,
  onApplyPreset
}) => {
  // Calculate progress metrics based on mitigation settings
  const calculateMetrics = () => {
    let policyScore = 0;
    let infrastructureScore = 0;
    let protectionScore = 0;
    
    // Policy implementations
    if (mitigationSettings.fullShielding) policyScore += 30;
    if (mitigationSettings.cctLimits) policyScore += 25;
    if (mitigationSettings.curfews) policyScore += 25;
    if (mitigationSettings.intensityReduction) {
      policyScore += (mitigationSettings.intensityReduction as number) * 0.4;
    }
    
    // Infrastructure improvements
    if (mitigationSettings.streetlightDimming) infrastructureScore += 40;
    if (mitigationSettings.warmLEDs) infrastructureScore += 35;
    if (mitigationSettings.campusLighting) infrastructureScore += 25;
    
    // Protected areas
    if (mitigationSettings.darkSkyOverlays) protectionScore += 50;
    if (mitigationSettings.highwayBarriers) protectionScore += 25;
    if (mitigationSettings.lowAlbedoSurfaces) protectionScore += 25;
    
    const overallScore = (policyScore + infrastructureScore + protectionScore) / 3;
    
    // Calculate Bortle Class improvement for Paynes Prairie
    let bortleImprovement = 0;
    if (mitigationSettings.fullShielding) bortleImprovement += 0.8;
    if (mitigationSettings.cctLimits) bortleImprovement += 0.5;
    if (mitigationSettings.curfews) bortleImprovement += 0.7;
    if (mitigationSettings.darkSkyOverlays) bortleImprovement += 0.6;
    
    const currentBortle = 4.5;
    const improvedBortle = Math.max(1, currentBortle - bortleImprovement);
    
    return {
      policyScore: Math.min(100, policyScore),
      infrastructureScore: Math.min(100, infrastructureScore),
      protectionScore: Math.min(100, protectionScore),
      overallScore: Math.min(100, overallScore),
      currentBortle,
      improvedBortle,
      bortleImprovement
    };
  };

  const metrics = calculateMetrics();

  const getBortleDescription = (bortle: number) => {
    if (bortle <= 2) return "Excellent - Milky Way vivid";
    if (bortle <= 3) return "Good - Milky Way clearly visible";
    if (bortle <= 4) return "Fair - Milky Way visible";
    if (bortle <= 5) return "Poor - Milky Way faint";
    return "Very Poor - Milky Way invisible";
  };

  const getDarkSkyProgress = () => {
    const requirements = [
      { name: 'Lighting Ordinance', met: metrics.policyScore > 70, weight: 30 },
      { name: 'Public Lighting Retrofit', met: metrics.infrastructureScore > 60, weight: 25 },
      { name: 'Protected Areas', met: metrics.protectionScore > 50, weight: 20 },
      { name: 'Community Education', met: mitigationSettings.communityEducation, weight: 15 },
      { name: 'Monitoring Program', met: mitigationSettings.monitoringProgram, weight: 10 }
    ];
    
    const metRequirements = requirements.filter(req => req.met);
    const totalWeight = metRequirements.reduce((sum, req) => sum + req.weight, 0);
    
    return {
      requirements,
      progress: totalWeight,
      readiness: totalWeight >= 70 ? 'Ready' : totalWeight >= 40 ? 'In Progress' : 'Getting Started'
    };
  };

  const darkSkyStatus = getDarkSkyProgress();

  // Preset configurations based on real success models
  const presets = {
    groveland: {
      fullShielding: true,
      cctLimits: true,
      intensityReduction: 20,
      curfews: true,
      streetlightDimming: true,
      warmLEDs: true,
      darkSkyOverlays: true,
      campusLighting: true,
      highwayBarriers: false,
      lowAlbedoSurfaces: false,
      communityEducation: true,
      monitoringProgram: true,
    },
    flagstaff: {
      fullShielding: true,
      cctLimits: true,
      intensityReduction: 30,
      curfews: true,
      streetlightDimming: true,
      warmLEDs: true,
      darkSkyOverlays: true,
      campusLighting: true,
      highwayBarriers: true,
      lowAlbedoSurfaces: true,
      communityEducation: true,
      monitoringProgram: true,
    }
  };

  return (
    <div className="space-y-4 h-full overflow-y-auto pr-2 p-4">
      {/* Bortle Scale - 3 Column Layout */}
      <Card className="p-4 bg-card/80 backdrop-blur-sm border-primary/20 shadow-space">
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Bortle Scale</h3>
          <Dialog>
            <DialogTrigger asChild>
              <button className="ml-auto p-1 rounded-full hover:bg-card/50 transition-colors">
                <Info className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Bortle Scale</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 text-sm">
                <p>The Bortle Scale measures light pollution levels from 1-9:</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-green-500">Bortle 1-3:</span>
                    <span>Excellent Dark Sky</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-yellow-500">Bortle 4-5:</span>
                    <span>Rural/Suburban</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-orange-500">Bortle 6-7:</span>
                    <span>Bright Suburban</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-red-500">Bortle 8-9:</span>
                    <span>Inner City</span>
                  </div>
                </div>
                <p className="text-muted-foreground">Lower numbers indicate darker skies with better visibility of stars and the Milky Way.</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {/* Paynes Prairie - First */}
          <div className="text-center p-2 rounded-lg bg-card/40 border border-primary/10">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Target className="w-3 h-3 text-success" />
            </div>
            <div className="font-medium text-foreground text-xs mb-1">Paynes Prairie</div>
            <div className="text-muted-foreground text-xs">
              <span className="font-bold text-yellow-500">Bortle {metrics.currentBortle}</span>
              {metrics.bortleImprovement > 0 && (
                <div className="font-bold text-green-500 text-xs mt-0.5"> → Bortle {metrics.improvedBortle.toFixed(1)}</div>
              )}
            </div>
          </div>

          {/* Suburban Gainesville - Second */}
          <div className="text-center p-2 rounded-lg bg-card/40 border border-primary/10">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Star className="w-3 h-3 text-mitigation" />
            </div>
            <div className="font-medium text-foreground text-xs mb-1">Suburban Gainesville</div>
            <div className="text-muted-foreground text-xs">
              <span className="font-bold text-orange-500">Bortle 6</span>
              <div className="font-bold text-yellow-500 text-xs mt-0.5"> → Bortle 4</div>
            </div>
          </div>

          {/* Gainesville Downtown - Third */}
          <div className="text-center p-2 rounded-lg bg-card/40 border border-primary/10">
            <div className="flex items-center justify-center gap-1 mb-2">
              <MapPin className="w-3 h-3 text-primary" />
            </div>
            <div className="font-medium text-foreground text-xs mb-1">Gainesville Downtown</div>
            <div className="text-muted-foreground text-xs">
              <span className="font-bold text-red-500">Bortle 9</span>
              <div className="font-bold text-orange-500 text-xs mt-0.5"> → Bortle 7</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Implementation Progress */}
      <Card className="p-4 bg-card/80 backdrop-blur-sm border-primary/20 shadow-space">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-mitigation" />
          <h3 className="font-semibold text-foreground">Implementation Progress</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Lighting Policy</span>
              <span className="text-foreground font-medium">{Math.round(metrics.policyScore)}%</span>
            </div>
            <Progress value={metrics.policyScore} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Infrastructure</span>
              <span className="text-foreground font-medium">{Math.round(metrics.infrastructureScore)}%</span>
            </div>
            <Progress value={metrics.infrastructureScore} className="h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Protected Areas</span>
              <span className="text-foreground font-medium">{Math.round(metrics.protectionScore)}%</span>
            </div>
            <Progress value={metrics.protectionScore} className="h-2" />
          </div>
          
          <div className="pt-2 border-t border-border">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-foreground">Overall Progress</span>
              <span className="text-primary font-semibold">{Math.round(metrics.overallScore)}%</span>
            </div>
            <Progress value={metrics.overallScore} className="h-3" />
          </div>
        </div>
      </Card>

      {/* Dark Sky Certification Status - Compact with Info Button */}
      <Card className="p-4 bg-card/80 backdrop-blur-sm border-primary/20 shadow-space">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-accent" />
          <h3 className="font-semibold text-foreground">Dark Sky Certification</h3>
          <Badge 
            variant="outline" 
            className={`${
              darkSkyStatus.readiness === 'Ready' ? 'border-success/50 text-success' :
              darkSkyStatus.readiness === 'In Progress' ? 'border-accent/50 text-accent' :
              'border-muted-foreground/50 text-muted-foreground'
            }`}
          >
            {darkSkyStatus.readiness}
          </Badge>
          <Dialog>
            <DialogTrigger asChild>
              <button className="ml-auto p-1 rounded-full hover:bg-card/50 transition-colors">
                <Info className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Dark Sky Certification Requirements</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm">
                <p>Dark Sky International certification requires meeting these criteria:</p>
                
                <div className="space-y-3">
                  {darkSkyStatus.requirements.map((req) => (
                    <div key={req.name} className="flex items-center gap-2">
                      <CheckCircle2 
                        className={`w-4 h-4 ${
                          req.met ? 'text-success' : 'text-muted-foreground'
                        }`}
                      />
                      <span className={req.met ? 'text-foreground' : 'text-muted-foreground'}>
                        {req.name}
                      </span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {req.weight}%
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-3 border-t border-border">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground font-medium">{darkSkyStatus.progress}%</span>
                  </div>
                  <Progress value={darkSkyStatus.progress} className="h-2" />
                </div>

                <div className="text-muted-foreground text-xs pt-2">
                  <p><strong>Lighting Ordinance:</strong> Comprehensive lighting code with fixture requirements</p>
                  <p><strong>Public Lighting Retrofit:</strong> Converting existing infrastructure to Dark Sky-friendly lighting</p>
                  <p><strong>Protected Areas:</strong> Establishing and maintaining dark zones</p>
                  <p><strong>Community Education:</strong> Public outreach and awareness programs</p>
                  <p><strong>Monitoring Program:</strong> Regular sky quality measurements</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Card>

      {/* Success Models */}
      <Card className="p-4 bg-card/80 backdrop-blur-sm border-primary/20 shadow-space">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-4 h-4 text-accent" />
          <h3 className="font-semibold text-foreground">Success Models</h3>
          <Dialog>
            <DialogTrigger asChild>
              <button className="ml-auto p-1 rounded-full hover:bg-card/50 transition-colors">
                <Info className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Dark Sky Success Stories</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Groveland, Florida</h4>
                    <ul className="space-y-1 text-muted-foreground text-xs">
                      <li>• Adopted comprehensive lighting ordinance with 3000K CCT limits</li>
                      <li>• Required full cutoff fixtures for all new development</li>
                      <li>• Implemented 10-year municipal lighting retrofit plan</li>
                      <li>• Established lighting curfews for non-essential lighting</li>
                      <li>• Created public education and enforcement programs</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Flagstaff, Arizona</h4>
                    <ul className="space-y-1 text-muted-foreground text-xs">
                      <li>• First International Dark Sky City (2001)</li>
                      <li>• Stringent 2700K CCT limits with lumen caps</li>
                      <li>• Comprehensive lighting zones with varying restrictions</li>
                      <li>• Highway shielding barriers to protect observatories</li>
                      <li>• Low-albedo surface requirements for new construction</li>
                      <li>• Strong university-community partnership</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-xs pt-2 border-t border-border">
                  Both cities demonstrate that effective dark sky protection requires combining lighting ordinances, 
                  infrastructure upgrades, and community engagement.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="space-y-3">
          <button
            onClick={() => onApplyPreset(presets.groveland)}
            className="w-full p-3 rounded-lg bg-card/50 hover:bg-card/70 border border-primary/20 text-left transition-colors group"
          >
            <div className="font-medium text-foreground group-hover:text-foreground">
              Groveland, FL Strategy
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              3000K limit, full shielding, 10-year retrofit plan
            </div>
          </button>
          
          <button
            onClick={() => onApplyPreset(presets.flagstaff)}
            className="w-full p-3 rounded-lg bg-card/50 hover:bg-card/70 border border-primary/20 text-left transition-colors group"
          >
            <div className="font-medium text-foreground group-hover:text-foreground">
              Flagstaff, AZ Strategy
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              2700K limit, lumen caps, comprehensive lighting zones
            </div>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ProgressDashboard;