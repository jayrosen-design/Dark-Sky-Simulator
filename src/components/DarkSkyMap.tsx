import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Card } from '@/components/ui/card';

interface DarkSkyMapProps {
  mitigationSettings: Record<string, boolean | number>;
}

const DarkSkyMap: React.FC<DarkSkyMapProps> = ({ mitigationSettings }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const pollutionLayers = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    console.log('Initializing Leaflet map...');

    // Initialize map
    map.current = L.map(mapContainer.current, {
      center: [29.6516, -82.3248], // Gainesville, FL coordinates
      zoom: 10,
      zoomControl: true,
      attributionControl: true
    });

    // Add OpenStreetMap tile layer with dark theme
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map.current);

    // Initialize pollution layers
    pollutionLayers.current = L.layerGroup().addTo(map.current);

    // Add light pollution overlays
    addLightPollutionLayers();
    addSensitiveAreas();

    console.log('Map initialized successfully');

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Update layers when mitigation settings change
  useEffect(() => {
    if (!map.current) return;
    updatePollutionVisualization();
  }, [mitigationSettings]);

  const addLightPollutionLayers = () => {
    if (!map.current || !pollutionLayers.current) return;

    // Clear existing layers
    pollutionLayers.current.clearLayers();

    // Realistic light pollution data with organic shapes
    const pollutionAreas = [
      // Gainesville urban core (Bortle 8-9) - Downtown area with irregular boundaries
      {
        coords: [
          [29.6598, -82.3420],
          [29.6612, -82.3380],
          [29.6645, -82.3250],
          [29.6680, -82.3180],
          [29.6695, -82.3150],
          [29.6710, -82.3140],
          [29.6720, -82.3160],
          [29.6735, -82.3180],
          [29.6740, -82.3220],
          [29.6730, -82.3280],
          [29.6720, -82.3320],
          [29.6705, -82.3380],
          [29.6685, -82.3420],
          [29.6650, -82.3450],
          [29.6620, -82.3440]
        ],
        bortle: 9,
        intensity: 0.9,
        area: 'Gainesville Downtown Core',
        color: '#ef4444'
      },
      // University of Florida area (Bortle 7-8) - Campus and surrounding dense development
      {
        coords: [
          [29.6480, -82.3580],
          [29.6520, -82.3520],
          [29.6560, -82.3480],
          [29.6580, -82.3420],
          [29.6590, -82.3380],
          [29.6570, -82.3340],
          [29.6540, -82.3300],
          [29.6500, -82.3280],
          [29.6460, -82.3300],
          [29.6430, -82.3340],
          [29.6420, -82.3380],
          [29.6430, -82.3420],
          [29.6450, -82.3480],
          [29.6470, -82.3540]
        ],
        bortle: 8,
        intensity: 0.8,
        area: 'University of Florida Campus',
        color: '#f97316'
      },
      // West Gainesville suburban sprawl (Bortle 6-7)
      {
        coords: [
          [29.6200, -82.4200],
          [29.6350, -82.4100],
          [29.6450, -82.3950],
          [29.6520, -82.3800],
          [29.6580, -82.3700],
          [29.6620, -82.3650],
          [29.6650, -82.3620],
          [29.6680, -82.3600],
          [29.6700, -82.3580],
          [29.6720, -82.3620],
          [29.6740, -82.3680],
          [29.6750, -82.3750],
          [29.6740, -82.3820],
          [29.6720, -82.3890],
          [29.6680, -82.3950],
          [29.6620, -82.4020],
          [29.6550, -82.4080],
          [29.6480, -82.4120],
          [29.6400, -82.4160],
          [29.6320, -82.4180],
          [29.6250, -82.4200]
        ],
        bortle: 6,
        intensity: 0.6,
        area: 'West Gainesville Suburbs',
        color: '#fb923c'
      },
      // East Gainesville residential (Bortle 5-6)
      {
        coords: [
          [29.6400, -82.2800],
          [29.6480, -82.2750],
          [29.6560, -82.2720],
          [29.6620, -82.2700],
          [29.6680, -82.2720],
          [29.6720, -82.2750],
          [29.6750, -82.2800],
          [29.6780, -82.2860],
          [29.6800, -82.2920],
          [29.6810, -82.2980],
          [29.6800, -82.3040],
          [29.6780, -82.3100],
          [29.6750, -82.3140],
          [29.6700, -82.3120],
          [29.6650, -82.3100],
          [29.6600, -82.3080],
          [29.6550, -82.3050],
          [29.6500, -82.3020],
          [29.6450, -82.2980],
          [29.6420, -82.2920],
          [29.6400, -82.2860]
        ],
        bortle: 5,
        intensity: 0.5,
        area: 'East Gainesville Residential',
        color: '#fbbf24'
      },
      // Commercial corridors along major roads (Bortle 7)
      {
        coords: [
          [29.6300, -82.3600],
          [29.6320, -82.3580],
          [29.6350, -82.3550],
          [29.6380, -82.3520],
          [29.6420, -82.3480],
          [29.6460, -82.3440],
          [29.6500, -82.3400],
          [29.6520, -82.3420],
          [29.6480, -82.3460],
          [29.6440, -82.3500],
          [29.6400, -82.3540],
          [29.6360, -82.3580],
          [29.6320, -82.3620]
        ],
        bortle: 7,
        intensity: 0.7,
        area: 'Commercial Strip - Archer Road',
        color: '#f97316'
      },
      // Paynes Prairie area (Bortle 3-4) - Natural preserve with minimal light
      {
        coords: [
          [29.5800, -82.3600],
          [29.5850, -82.3400],
          [29.5900, -82.3200],
          [29.5950, -82.3000],
          [29.6000, -82.2900],
          [29.6050, -82.2850],
          [29.6100, -82.2900],
          [29.6120, -82.3000],
          [29.6100, -82.3100],
          [29.6050, -82.3200],
          [29.6000, -82.3300],
          [29.5950, -82.3400],
          [29.5900, -82.3500],
          [29.5850, -82.3550]
        ],
        bortle: 3,
        intensity: 0.25,
        area: 'Paynes Prairie Preserve',
        color: '#22c55e'
      }
    ];

    pollutionAreas.forEach(area => {
      const polygon = L.polygon(area.coords as L.LatLngExpression[], {
        color: '#ffffff',
        weight: 1,
        opacity: 0.5,
        fillColor: area.color,
        fillOpacity: area.intensity * 0.6
      }).addTo(pollutionLayers.current!);

      // Store original values as custom properties on the layer
      (polygon as any)._originalColor = area.color;
      (polygon as any)._originalOpacity = area.intensity * 0.6;
      (polygon as any)._originalIntensity = area.intensity;

      polygon.bindPopup(`
        <div class="p-2">
          <h3 class="font-semibold text-gray-900">${area.area}</h3>
          <p class="text-sm text-gray-700">Bortle Class: ${area.bortle}</p>
          <p class="text-xs text-gray-600">Click for detailed analysis</p>
        </div>
      `);
    });
  };

  const addSensitiveAreas = () => {
    if (!map.current) return;

    // Add sensitive areas markers
    const sensitiveAreas = [
      {
        name: 'Paynes Prairie Preserve State Park',
        coordinates: [29.58, -82.3] as L.LatLngExpression,
        type: 'preserve'
      },
      {
        name: 'San Felasco Hammock Preserve',
        coordinates: [29.68, -82.42] as L.LatLngExpression,
        type: 'preserve'
      },
      {
        name: 'Rosemary Hill Observatory',
        coordinates: [29.72, -82.35] as L.LatLngExpression,
        type: 'observatory'
      }
    ];

    // Create custom icon for protected areas
    const protectedIcon = L.divIcon({
      html: '<div style="background-color: #3b82f6; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>',
      iconSize: [16, 16],
      className: 'custom-div-icon'
    });

    sensitiveAreas.forEach(area => {
      const marker = L.marker(area.coordinates, { 
        icon: protectedIcon 
      }).addTo(map.current!);

      marker.bindPopup(`
        <div class="p-2">
          <h3 class="font-semibold text-gray-900">${area.name}</h3>
          <p class="text-sm capitalize text-gray-700">${area.type}</p>
          <p class="text-xs text-gray-600">Protected Dark Sky Area</p>
        </div>
      `);
    });
  };

  const updatePollutionVisualization = () => {
    if (!pollutionLayers.current) return;

    // Calculate mitigation effect
    const mitigationFactor = calculateMitigationFactor(mitigationSettings);
    
    // Update layer colors and opacity based on mitigation
    pollutionLayers.current.eachLayer((layer: any) => {
      if (layer.setStyle && layer._originalColor) {
        // Maintain minimum visibility while showing improvement
        const adjustedOpacity = Math.max(0.2, layer._originalOpacity * mitigationFactor);
        
        // Adjust color to show improvement - shift toward cooler colors
        let adjustedColor = layer._originalColor;
        
        // Progressive color changes as mitigation improves
        if (mitigationFactor < 0.8) {
          const improvement = 1 - mitigationFactor;
          if (layer._originalColor === '#ef4444') { // Red -> Orange -> Yellow -> Green
            if (improvement > 0.6) adjustedColor = '#22c55e'; // Green
            else if (improvement > 0.4) adjustedColor = '#fbbf24'; // Yellow  
            else if (improvement > 0.2) adjustedColor = '#fb923c'; // Orange
          } else if (layer._originalColor === '#f97316') { // Orange -> Yellow -> Green
            if (improvement > 0.5) adjustedColor = '#22c55e'; // Green
            else if (improvement > 0.3) adjustedColor = '#fbbf24'; // Yellow
          } else if (layer._originalColor === '#fb923c') { // Light orange -> Green
            if (improvement > 0.3) adjustedColor = '#22c55e'; // Green
          }
        }
        
        layer.setStyle({
          fillOpacity: adjustedOpacity,
          fillColor: adjustedColor
        });
      }
    });
  };

  const calculateMitigationFactor = (settings: Record<string, boolean | number>): number => {
    let factor = 1.0;
    
    // Apply various mitigation effects with more gradual reduction
    if (settings.fullShielding) factor *= 0.75;
    if (settings.cctLimits) factor *= 0.85;
    if (settings.curfews) factor *= 0.70;
    if (settings.streetlightDimming) factor *= 0.90;
    if (settings.darkSkyOverlays) factor *= 0.80;
    if (settings.intensityReduction) {
      factor *= (1 - (settings.intensityReduction as number) * 0.01);
    }
    
    return Math.max(factor, 0.25); // Minimum 25% pollution remains (more realistic)
  };

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden border border-primary/20 shadow-glow">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 right-16 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20 z-[1000]">
        <h4 className="font-semibold text-sm mb-2">Light Pollution Levels</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bortle-1"></div>
            <span>Bortle 1-3: Excellent Dark Sky</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bortle-4"></div>
            <span>Bortle 4-5: Rural/Suburban</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bortle-6"></div>
            <span>Bortle 6-7: Bright Suburban</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bortle-9"></div>
            <span>Bortle 8-9: Inner City</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkSkyMap;