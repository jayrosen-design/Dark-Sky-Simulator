import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Card } from '@/components/ui/card';
import { useTheme } from 'next-themes';

interface DarkSkyMapProps {
  mitigationSettings: Record<string, boolean | number>;
}

const DarkSkyMap: React.FC<DarkSkyMapProps> = ({ mitigationSettings }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const pollutionLayers = useRef<L.LayerGroup | null>(null);
  const tileLayer = useRef<L.TileLayer | null>(null);
  const { theme } = useTheme();

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

    // Add appropriate tile layer based on theme
    const tileUrl = theme === 'light' 
      ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
      
    tileLayer.current = L.tileLayer(tileUrl, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map.current);

    // Custom styles for zoom controls based on theme
    const style = document.createElement('style');
    style.textContent = `
      .leaflet-control-zoom-in,
      .leaflet-control-zoom-out {
        background-color: hsl(var(--card)) !important;
        border: 1px solid hsl(var(--border)) !important;
        color: hsl(var(--foreground)) !important;
        backdrop-filter: blur(8px);
        transition: all 0.2s ease;
      }
      .leaflet-control-zoom-in:hover,
      .leaflet-control-zoom-out:hover {
        background-color: hsl(var(--card)/100%) !important;
        border-color: hsl(var(--primary)/20%) !important;
      }
      .leaflet-control-zoom {
        border: none !important;
        box-shadow: var(--shadow-glow) !important;
      }
    `;
    document.head.appendChild(style);

    // Initialize pollution layers
    pollutionLayers.current = L.layerGroup().addTo(map.current);

    // Add light pollution overlays
    addLightPollutionLayers();
    // addSensitiveAreas(); // Removed marker points

    console.log('Map initialized successfully');

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Update tile layer when theme changes
  useEffect(() => {
    if (!map.current || !tileLayer.current) return;
    
    const tileUrl = theme === 'light' 
      ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
    
    tileLayer.current.setUrl(tileUrl);
  }, [theme]);

  // Update layers when mitigation settings change
  useEffect(() => {
    if (!map.current) return;
    updatePollutionVisualization();
  }, [mitigationSettings]);

  const addLightPollutionLayers = () => {
    if (!map.current || !pollutionLayers.current) return;

    // Clear existing layers
    pollutionLayers.current.clearLayers();

    // Simulated light pollution data
    const pollutionAreas = [
      // Gainesville urban core (Bortle 8-9)
      {
        coords: [
          [29.64, -82.35],
          [29.64, -82.32],
          [29.67, -82.32],
          [29.67, -82.35]
        ],
        bortle: 9,
        intensity: 0.9,
        area: 'Gainesville Downtown',
        color: '#ef4444'
      },
      // Suburban Gainesville (Bortle 6-7)
      {
        coords: [
          [29.6, -82.4],
          [29.6, -82.25],
          [29.7, -82.25],
          [29.7, -82.4]
        ],
        bortle: 6,
        intensity: 0.6,
        area: 'Suburban Gainesville',
        color: '#f97316'
      },
      // Paynes Prairie area (Bortle 4-5)
      {
        coords: [
          [29.55, -82.35],
          [29.55, -82.25],
          [29.62, -82.25],
          [29.62, -82.35]
        ],
        bortle: 4,
        intensity: 0.3,
        area: 'Paynes Prairie',
        color: '#fb923c'
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
      (polygon as any)._originalBortle = area.bortle;
      (polygon as any)._areaName = area.area;
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
            <div className="w-3 h-3 rounded" style={{backgroundColor: '#22c55e'}}></div>
            <span>Bortle 1-3: Excellent Dark Sky</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{backgroundColor: '#fbbf24'}}></div>
            <span>Bortle 4-5: Rural/Suburban</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{backgroundColor: '#f97316'}}></div>
            <span>Bortle 6-7: Bright Suburban</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{backgroundColor: '#ef4444'}}></div>
            <span>Bortle 8-9: Inner City</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkSkyMap;