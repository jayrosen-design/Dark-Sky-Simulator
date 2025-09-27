import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, TrendingDown, Clock, Info } from "lucide-react";

interface MitigationControlModalProps {
  isOpen: boolean;
  onClose: () => void;
  controlKey: string;
}

const costData = {
  fullShielding: {
    controlName: "Full-Cutoff Fixtures Mandate",
    impactRating: "High",
    initialCost: 30000,
    annualSavings: 0,
    maintenanceCost: -20000,
    paybackYears: 0,
    notes: "A foundational, enabling policy. Initial cost covers administrative/legal fees. Annual maintenance represents the ongoing operational cost for 0.25 FTE code enforcement. Direct financial payback is N/A; ROI is measured in enhanced effectiveness of other controls and IDA certification value."
  },
  cctLimits: {
    controlName: "Color Temperature Limits (3000K Max)",
    impactRating: "Medium",
    initialCost: 22500,
    annualSavings: 0,
    maintenanceCost: -8000,
    paybackYears: 0,
    notes: "A low-cost policy measure focused on reducing blue light scatter. Initial cost covers administrative/legal fees. Annual maintenance represents a marginal increase in workload for enforcement (0.10 FTE). Energy consumption is a function of wattage, not CCT, resulting in $0 direct energy savings."
  },
  intensityReduction: {
    controlName: "Light Intensity Reduction (Variable 0-50%)",
    impactRating: "High",
    initialCost: 7750000,
    annualSavings: 450000,
    maintenanceCost: 75000,
    paybackYears: 14.8,
    notes: "A capital-intensive program assuming a 30% average reduction across GRU streetlights and commercial fixtures. Annual savings include $450k energy savings and $75k maintenance savings from extended LED lifespan."
  },
  curfews: {
    controlName: "Lighting Curfews (12AM-5AM Dimming)",
    impactRating: "High",
    initialCost: 1250000,
    annualSavings: 1600000,
    maintenanceCost: -50000,
    paybackYears: 1,
    notes: "Offers the most rapid financial return. Initial cost covers installation of simple timers for 5,000 businesses. Annual savings are substantial for the community business sector, leading to a payback period of less than one year for individual businesses."
  },
  streetlightDimming: {
    controlName: "Streetlight Dimming (Adaptive Controls)",
    impactRating: "Medium",
    initialCost: 6060000,
    annualSavings: 420000,
    maintenanceCost: -420000,
    paybackYears: 15,
    notes: "A major capital project to upgrade 30,000 GRU fixtures. Annual energy savings are projected to be offset by annual Software-as-a-Service (SaaS) licensing fees and network management costs, resulting in a net annual impact near zero, extending the payback period."
  },
  warmLEDs: {
    controlName: "Warm LED Standard (2700K Default)",
    impactRating: "Medium",
    initialCost: 5000,
    annualSavings: 0,
    maintenanceCost: 0,
    paybackYears: 0,
    notes: "A procurement policy change with minimal administrative cost (<$5,000). It is financially neutral but sets a gold standard for municipal leadership."
  },
  darkSkyOverlays: {
    controlName: "Dark Sky Overlay Zones",
    impactRating: "Medium",
    initialCost: 115000,
    annualSavings: 0,
    maintenanceCost: -20000,
    paybackYears: 0,
    notes: "Strategic planning initiative. Initial cost includes planning, legal fees, and a grant program seed fund. Annual cost is for enhanced enforcement. ROI is derived indirectly from astrotourism and enhanced property values, not direct savings."
  },
  campusLighting: {
    controlName: "UF Campus Retrofit",
    impactRating: "Medium",
    initialCost: 4000000,
    annualSavings: 250000,
    maintenanceCost: 100000,
    paybackYears: 11.4,
    notes: "Keystone project, with costs borne by the University of Florida (UF). Savings accrue to UF ($350,000 net annual impact from energy and maintenance reductions)."
  },
  highwayBarriers: {
    controlName: "Highway Light Barriers (US 441)",
    impactRating: "Low",
    initialCost: 500000,
    annualSavings: 0,
    maintenanceCost: -10000,
    paybackYears: 0,
    notes: "Extremely high-cost protective measure, estimated at over $500,000 per mile. Provides no financial return and incurs ongoing maintenance liability. Justified only for high-value assets."
  },
  lowAlbedoSurfaces: {
    controlName: "Dark Road Surfaces (Low-Albedo Materials)",
    impactRating: "Low",
    initialCost: 750000,
    annualSavings: 0,
    maintenanceCost: -5000,
    paybackYears: 0,
    notes: "High-cost strategy whose implementation is viable only when integrated into existing resurfacing schedules as a material premium (estimated 15% premium). No direct financial return, and may lead to potentially higher maintenance costs."
  },
  communityEducation: {
    controlName: "Community Education Program",
    impactRating: "Medium",
    initialCost: 15000,
    annualSavings: 0,
    maintenanceCost: -65000,
    paybackYears: 0,
    notes: "Essential for IDA certification. Initial cost covers materials development; annual maintenance represents the ongoing operational budget for staffing and events. ROI is indirect, realized through increased voluntary compliance and sustained political support."
  },
  monitoringProgram: {
    controlName: "Sky Quality Monitoring",
    impactRating: "Medium",
    initialCost: 7500,
    annualSavings: 0,
    maintenanceCost: -5000,
    paybackYears: 0,
    notes: "Essential for IDA certification. Low-cost investment for data collection (10 SQM units and setup). Annual maintenance is minimal for data management and reporting. ROI is indirect, providing quantitative validation of policy performance."
  }
};

const MitigationControlModal: React.FC<MitigationControlModalProps> = ({
  isOpen,
  onClose,
  controlKey,
}) => {
  const controlData = costData[controlKey as keyof typeof costData];

  if (!controlData) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Math.abs(amount));
  };

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'high':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const netAnnualImpact = controlData.annualSavings + controlData.maintenanceCost;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            {controlData.controlName}
          </DialogTitle>
          <DialogDescription>
            Detailed cost analysis and implementation information
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Impact Rating */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Impact Rating:</span>
            <Badge className={getImpactColor(controlData.impactRating)}>
              {controlData.impactRating}
            </Badge>
          </div>

          {/* Financial Overview */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Financial Overview
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium">Initial Cost</span>
                  </div>
                  <div className="text-xl font-bold text-red-600">
                    {formatCurrency(controlData.initialCost)}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Annual Savings</span>
                  </div>
                  <div className="text-xl font-bold text-green-600">
                    {formatCurrency(controlData.annualSavings)}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium">Annual Cost</span>
                  </div>
                  <div className="text-xl font-bold text-orange-600">
                    {formatCurrency(controlData.maintenanceCost)}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Payback Period</span>
                  </div>
                  <div className="text-xl font-bold text-blue-600">
                    {controlData.paybackYears > 0 ? `${controlData.paybackYears} yrs` : 'N/A'}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Net Annual Impact:</span>
                  <div className="flex items-center gap-2">
                    <Badge variant={netAnnualImpact >= 0 ? "default" : "destructive"}>
                      {netAnnualImpact >= 0 ? "Savings" : "Cost"}
                    </Badge>
                    <span className={`font-bold ${netAnnualImpact >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {formatCurrency(netAnnualImpact)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Notes */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Implementation Notes</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {controlData.notes}
              </p>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MitigationControlModal;