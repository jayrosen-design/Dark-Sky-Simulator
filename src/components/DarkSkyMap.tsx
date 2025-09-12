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
    
    // Update layer opacity based on mitigation
    pollutionLayers.current.eachLayer((layer: any) => {
      if (layer.setStyle) {
        const currentOpacity = layer.options.fillOpacity || 0.6;
        layer.setStyle({
          fillOpacity: currentOpacity * mitigationFactor
        });
      }
    });
  };

  const calculateMitigationFactor = (settings: Record<string, boolean | number>): number => {
    let factor = 1.0;
    
    // Apply various mitigation effects
    if (settings.fullShielding) factor *= 0.7;
    if (settings.cctLimits) factor *= 0.8;
    if (settings.curfews) factor *= 0.6;
    if (settings.streetlightDimming) factor *= 0.85;
    
    return Math.max(factor, 0.1); // Minimum 10% pollution remains
  };

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden border border-primary/20 shadow-glow">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20 z-[1000]">
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