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

    // Realistic light pollution data with organic shapes based on NASA Black Marble VNP46A2 patterns
    const pollutionAreas = [
      // Urban core - high intensity, organic city shape
      {
        coords: [
          [29.6720, -82.3400], [29.6710, -82.3350], [29.6650, -82.3200], [29.6590, -82.3150],
          [29.6500, -82.3200], [29.6450, -82.3280], [29.6400, -82.3350], [29.6420, -82.3420],
          [29.6480, -82.3480], [29.6580, -82.3500], [29.6650, -82.3480], [29.6720, -82.3400]
        ],
        radiance: 45.8, // nW⋅cm−2⋅sr−1 - typical urban core
        bortle: 9,
        area: 'Gainesville Urban Core',
        color: '#ffffff', // White for highest pollution
        description: 'Downtown and University of Florida campus area'
      },
      // Main commercial corridors - irregular shapes following roads
      {
        coords: [
          [29.6900, -82.3800], [29.6850, -82.3200], [29.6650, -82.3100], [29.6400, -82.3150],
          [29.6200, -82.3300], [29.6100, -82.3600], [29.6200, -82.3900], [29.6500, -82.4100],
          [29.6800, -82.4000], [29.6900, -82.3800]
        ],
        radiance: 28.3,
        bortle: 7,
        area: 'Commercial Corridors',
        color: '#fbbf24', // Yellow-orange
        description: 'Major roads: Archer, 13th St, University Ave'
      },
      // Suburban sprawl - irregular residential patterns
      {
        coords: [
          [29.7200, -82.4500], [29.7100, -82.2800], [29.6900, -82.2600], [29.6500, -82.2700],
          [29.6200, -82.3000], [29.5800, -82.3200], [29.5600, -82.3800], [29.5700, -82.4200],
          [29.6000, -82.4400], [29.6500, -82.4300], [29.7000, -82.4500], [29.7200, -82.4500]
        ],
        radiance: 12.7,
        bortle: 5,
        area: 'Suburban Areas',
        color: '#fb923c', // Orange
        description: 'Residential neighborhoods and strip malls'
      },
      // Rural transition zones - scattered development
      {
        coords: [
          [29.7500, -82.5000], [29.7300, -82.2500], [29.6800, -82.2400], [29.6200, -82.2500],
          [29.5500, -82.2800], [29.5200, -82.3500], [29.5100, -82.4200], [29.5300, -82.4800],
          [29.5800, -82.5200], [29.6500, -82.5100], [29.7200, -82.5000], [29.7500, -82.5000]
        ],
        radiance: 3.9,
        bortle: 4,
        area: 'Rural Transition',
        color: '#22c55e', // Green
        description: 'Scattered rural development and small towns'
      },
      // Natural areas - minimal light pollution
      {
        coords: [
          [29.5900, -82.3500], [29.5700, -82.3100], [29.5500, -82.2900], [29.5300, -82.3000],
          [29.5200, -82.3200], [29.5100, -82.3500], [29.5200, -82.3800], [29.5400, -82.3900],
          [29.5600, -82.3800], [29.5800, -82.3600], [29.5900, -82.3500]
        ],
        radiance: 0.8,
        bortle: 3,
        area: 'Paynes Prairie Preserve',
        color: '#1e40af', // Dark blue
        description: 'Protected natural area with minimal artificial lighting'
      },
      // Highway corridors - linear high-intensity features
      {
        coords: [
          [29.7100, -82.3600], [29.7000, -82.3580], [29.6800, -82.3520], [29.6500, -82.3480],
          [29.6200, -82.3450], [29.6000, -82.3430], [29.5950, -82.3470], [29.6200, -82.3490],
          [29.6500, -82.3520], [29.6800, -82.3560], [29.7000, -82.3620], [29.7100, -82.3600]
        ],
        radiance: 35.2,
        bortle: 8,
        area: 'I-75 Corridor',
        color: '#ef4444', // Red
        description: 'Interstate highway with service stations and interchange lighting'
      }
    ];

    pollutionAreas.forEach(area => {
      // Calculate opacity based on radiance (scientific scaling)
      const normalizedRadiance = Math.min(area.radiance / 50.0, 1.0); // Scale to max 50 nW⋅cm−2⋅sr−1
      const fillOpacity = Math.max(0.1, normalizedRadiance * 0.8); // Minimum 10% visibility

      const polygon = L.polygon(area.coords as L.LatLngExpression[], {
        color: area.color,
        weight: 1,
        opacity: 0.8,
        fillColor: area.color,
        fillOpacity: fillOpacity
      }).addTo(pollutionLayers.current!);

      // Store scientific data as custom properties
      (polygon as any)._originalColor = area.color;
      (polygon as any)._originalOpacity = fillOpacity;
      (polygon as any)._baselineRadiance = area.radiance;
      (polygon as any)._bortleClass = area.bortle;

      polygon.bindPopup(`
        <div class="p-3 min-w-[200px]">
          <h3 class="font-semibold text-gray-900 mb-1">${area.area}</h3>
          <div class="text-sm space-y-1">
            <p><span class="font-medium">Radiance:</span> ${area.radiance.toFixed(1)} nW⋅cm⁻²⋅sr⁻¹</p>
            <p><span class="font-medium">Bortle Class:</span> ${area.bortle}</p>
            <p class="text-xs text-gray-600 mt-2">${area.description}</p>
          </div>
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

    // Calculate scientific mitigation factor
    const mitigationFactor = calculateMitigationFactor(mitigationSettings);
    
    // Update layers based on scientific radiance calculations
    pollutionLayers.current.eachLayer((layer: any) => {
      if (layer.setStyle && layer._baselineRadiance) {
        // Apply simulation equation: Rsim = Rbase × mitigation_factor
        const simulatedRadiance = layer._baselineRadiance * mitigationFactor;
        
        // Calculate new opacity based on simulated radiance
        const newOpacity = Math.max(0.1, Math.min(simulatedRadiance / 50.0, 1.0) * 0.8);
        
        // Color mapping based on radiance levels (like lightpollutionmap.info)
        let newColor = layer._originalColor;
        if (simulatedRadiance > 30) newColor = '#ffffff'; // White: >30 nW⋅cm−2⋅sr−1
        else if (simulatedRadiance > 20) newColor = '#ef4444'; // Red: 20-30
        else if (simulatedRadiance > 10) newColor = '#fbbf24'; // Yellow: 10-20
        else if (simulatedRadiance > 5) newColor = '#fb923c'; // Orange: 5-10
        else if (simulatedRadiance > 2) newColor = '#22c55e'; // Green: 2-5
        else newColor = '#1e40af'; // Blue: <2 (excellent dark sky)
        
        layer.setStyle({
          fillOpacity: newOpacity,
          fillColor: newColor,
          color: newColor
        });

        // Update popup with new simulated values
        const area = layer.getPopup()?.getContent() || '';
        const areaName = area.match(/<h3[^>]*>([^<]+)<\/h3>/)?.[1] || 'Unknown Area';
        const description = area.match(/text-xs text-gray-600[^>]*>([^<]+)</)?.[1] || '';
        
        layer.bindPopup(`
          <div class="p-3 min-w-[200px]">
            <h3 class="font-semibold text-gray-900 mb-1">${areaName}</h3>
            <div class="text-sm space-y-1">
              <p><span class="font-medium">Baseline:</span> ${layer._baselineRadiance.toFixed(1)} nW⋅cm⁻²⋅sr⁻¹</p>
              <p><span class="font-medium">Simulated:</span> ${simulatedRadiance.toFixed(1)} nW⋅cm⁻²⋅sr⁻¹</p>
              <p><span class="font-medium">Reduction:</span> ${((1 - mitigationFactor) * 100).toFixed(1)}%</p>
              <p><span class="font-medium">Bortle Class:</span> ${layer._bortleClass}</p>
              <p class="text-xs text-gray-600 mt-2">${description}</p>
            </div>
          </div>
        `);
      }
    });
  };

  const calculateMitigationFactor = (settings: Record<string, boolean | number>): number => {
    // Scientific simulation based on NASA Black Marble and Dark Sky research
    let urf = 1.0; // Uplight Reduction Factor (fixture shielding)
    let csf = 1.0; // CCT Skyglow Factor (color temperature)
    let lrf = 1.0; // Lumen Reduction Factor (intensity & curfews)
    
    // Fixture Shielding (based on IES cutoff classifications)
    if (settings.fullShielding) {
      urf = 0.50; // Full cutoff eliminates 50% direct uplight component
    } else if (settings.cctLimits) {
      urf = 0.75; // Partial shielding effect
    }
    
    // Color Temperature effects on skyglow (Rayleigh scattering)
    if (settings.cctLimits) {
      csf = 0.65; // 3000K warm white vs 5000K+ cool white
    }
    
    // Intensity reduction and curfews
    if (settings.curfews) {
      lrf *= 0.70; // 30% reduction from non-essential lighting shutdown
    }
    if (settings.streetlightDimming) {
      lrf *= 0.85; // 15% dimming effect
    }
    if (settings.intensityReduction) {
      lrf *= (1 - (settings.intensityReduction as number) * 0.01);
    }
    
    // Combined effect: Rsim = Rbase × URF × CSF × LRF
    return Math.max(urf * csf * lrf, 0.20); // Minimum 20% remains (reflected component)
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