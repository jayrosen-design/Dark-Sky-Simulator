import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, TrendingDown, Clock } from "lucide-react";

interface CostEstimateProps {
  mitigationSettings: Record<string, boolean | number>;
}

const costData = {
  fullShielding: {
    controlName: "Full-Cutoff Fixtures Mandate",
    initialCost: 30000,
    annualSavings: 0,
    maintenanceCost: -20000,
    paybackYears: 0
  },
  cctLimits: {
    controlName: "Color Temperature Limits (3000K Max)",
    initialCost: 22500,
    annualSavings: 0,
    maintenanceCost: -8000,
    paybackYears: 0
  },
  intensityReduction: {
    controlName: "Light Intensity Reduction",
    initialCost: 7750000,
    annualSavings: 450000,
    maintenanceCost: 75000,
    paybackYears: 14.8
  },
  curfews: {
    controlName: "Lighting Curfews (12AM-5AM Dimming)",
    initialCost: 1250000,
    annualSavings: 1600000,
    maintenanceCost: -50000,
    paybackYears: 1
  },
  streetlightDimming: {
    controlName: "Streetlight Dimming (Adaptive Controls)",
    initialCost: 6060000,
    annualSavings: 420000,
    maintenanceCost: -420000,
    paybackYears: 15
  },
  warmLEDs: {
    controlName: "Warm LED Standard (2700K Default)",
    initialCost: 5000,
    annualSavings: 0,
    maintenanceCost: 0,
    paybackYears: 0
  },
  darkSkyOverlays: {
    controlName: "Dark Sky Overlay Zones",
    initialCost: 115000,
    annualSavings: 0,
    maintenanceCost: -20000,
    paybackYears: 0
  },
  campusLighting: {
    controlName: "UF Campus Retrofit",
    initialCost: 4000000,
    annualSavings: 250000,
    maintenanceCost: 100000,
    paybackYears: 11.4
  },
  highwayBarriers: {
    controlName: "Highway Light Barriers (US 441)",
    initialCost: 500000,
    annualSavings: 0,
    maintenanceCost: -10000,
    paybackYears: 0
  },
  lowAlbedoSurfaces: {
    controlName: "Dark Road Surfaces (Low-Albedo Materials)",
    initialCost: 750000,
    annualSavings: 0,
    maintenanceCost: -5000,
    paybackYears: 0
  },
  communityEducation: {
    controlName: "Community Education Program",
    initialCost: 15000,
    annualSavings: 0,
    maintenanceCost: -65000,
    paybackYears: 0
  },
  monitoringProgram: {
    controlName: "Sky Quality Monitoring",
    initialCost: 7500,
    annualSavings: 0,
    maintenanceCost: -5000,
    paybackYears: 0
  }
};

const CostEstimate: React.FC<CostEstimateProps> = ({ mitigationSettings }) => {
  const calculateCosts = () => {
    let totalInitialCost = 0;
    let totalAnnualSavings = 0;
    let totalMaintenanceCost = 0;
    
    Object.entries(mitigationSettings).forEach(([key, value]) => {
      if (value && costData[key as keyof typeof costData]) {
        const cost = costData[key as keyof typeof costData];
        
        if (key === 'intensityReduction' && typeof value === 'number') {
          // Scale intensity reduction costs based on percentage
          const scaleFactor = value / 100;
          totalInitialCost += cost.initialCost * scaleFactor;
          totalAnnualSavings += cost.annualSavings * scaleFactor;
          totalMaintenanceCost += cost.maintenanceCost * scaleFactor;
        } else if (typeof value === 'boolean' && value) {
          totalInitialCost += cost.initialCost;
          totalAnnualSavings += cost.annualSavings;
          totalMaintenanceCost += cost.maintenanceCost;
        }
      }
    });
    
    const netAnnualSavings = totalAnnualSavings + totalMaintenanceCost;
    const paybackYears = netAnnualSavings > 0 ? totalInitialCost / netAnnualSavings : 0;
    
    return {
      totalInitialCost,
      totalAnnualSavings,
      totalMaintenanceCost,
      netAnnualSavings,
      paybackYears
    };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Math.abs(amount));
  };

  const costs = calculateCosts();

  return (
    <Card className="w-full bg-card backdrop-blur-sm border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <DollarSign className="h-4 w-4" />
          Cost Estimate
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <TrendingDown className="h-3 w-3 text-red-500" />
              <span className="text-xs font-medium">Initial Cost</span>
            </div>
            <div className="text-lg font-bold text-red-600">
              {formatCurrency(costs.totalInitialCost)}
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-xs font-medium">Annual Savings</span>
            </div>
            <div className="text-lg font-bold text-green-600">
              {formatCurrency(costs.totalAnnualSavings)}
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <TrendingDown className="h-3 w-3 text-orange-500" />
              <span className="text-xs font-medium">Annual Cost</span>
            </div>
            <div className="text-lg font-bold text-orange-600">
              {formatCurrency(costs.totalMaintenanceCost)}
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-blue-500" />
              <span className="text-xs font-medium">Payback</span>
            </div>
            <div className="text-lg font-bold text-blue-600">
              {costs.paybackYears > 0 ? `${costs.paybackYears.toFixed(1)} yrs` : 'N/A'}
            </div>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Net Annual Impact:</span>
            <div className="flex items-center gap-2">
              <Badge variant={costs.netAnnualSavings >= 0 ? "default" : "destructive"} className="text-xs">
                {costs.netAnnualSavings >= 0 ? "Savings" : "Cost"}
              </Badge>
              <span className={`text-sm font-bold ${costs.netAnnualSavings >= 0 ? "text-green-600" : "text-red-600"}`}>
                {formatCurrency(costs.netAnnualSavings)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostEstimate;