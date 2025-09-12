import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Star, 
  Award, 
  TrendingUp,
  MapPin,
  Eye,
  CheckCircle2
} from 'lucide-react';

interface ProgressDashboardProps {
  mitigationSettings: Record<string, boolean | number>;
}

const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ 
  mitigationSettings 
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

  return (
    <div className="space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
      {/* Paynes Prairie Bortle Status */}
      <Card className="p-4 bg-gradient-dark-sky border-primary/20 shadow-glow">
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Paynes Prairie Visibility</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Current Bortle Class</span>
            <Badge variant="outline" className="border-accent/50 text-accent">
              {metrics.currentBortle}
            </Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">With Mitigations</span>
            <Badge variant="outline" className="border-success/50 text-success">
              {metrics.improvedBortle.toFixed(1)}
            </Badge>
          </div>
          
          <div className="p-3 rounded-md bg-card/50 border border-primary/10">
            <div className="text-sm font-medium text-foreground mb-1">
              {getBortleDescription(metrics.improvedBortle)}
            </div>
            <div className="text-xs text-muted-foreground">
              {metrics.bortleImprovement > 0 
                ? `Improvement of ${metrics.bortleImprovement.toFixed(1)} Bortle classes`
                : 'No improvement with current settings'
              }
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

      {/* Dark Sky Certification Status */}
      <Card className="p-4 bg-card/80 backdrop-blur-sm border-primary/20 shadow-space">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-5 h-5 text-accent" />
          <h3 className="font-semibold text-foreground">Dark Sky Certification</h3>
          <Badge 
            variant="outline" 
            className={`ml-auto ${
              darkSkyStatus.readiness === 'Ready' ? 'border-success/50 text-success' :
              darkSkyStatus.readiness === 'In Progress' ? 'border-accent/50 text-accent' :
              'border-muted-foreground/50 text-muted-foreground'
            }`}
          >
            {darkSkyStatus.readiness}
          </Badge>
        </div>
        
        <div className="space-y-2 mb-3">
          {darkSkyStatus.requirements.map((req) => (
            <div key={req.name} className="flex items-center gap-2 text-sm">
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
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Certification Progress</span>
            <span className="text-foreground font-medium">{darkSkyStatus.progress}%</span>
          </div>
          <Progress value={darkSkyStatus.progress} className="h-2" />
        </div>
      </Card>

      {/* Success Models */}
      <Card className="p-4 bg-gradient-aurora border-primary/20 shadow-glow">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-4 h-4 text-primary-foreground" />
          <h3 className="font-semibold text-primary-foreground">Success Models</h3>
        </div>
        <div className="space-y-2 text-sm text-primary-foreground/90">
          <div>
            <div className="font-medium">Groveland, FL</div>
            <div className="text-xs opacity-80">3000K limit, full shielding, 10-year retrofit</div>
          </div>
          <div>
            <div className="font-medium">Flagstaff, AZ</div>
            <div className="text-xs opacity-80">2700K limit, lumen caps, lighting zones</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProgressDashboard;