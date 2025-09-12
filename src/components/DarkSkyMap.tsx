import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';

interface DarkSkyMapProps {
  mitigationSettings: Record<string, boolean | number>;
}

const DarkSkyMap: React.FC<DarkSkyMapProps> = ({ mitigationSettings }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Validate token format
    if (!mapboxToken.startsWith('pk.')) {
      console.error('Invalid Mapbox token. Please use a PUBLIC token that starts with "pk." not a secret token.');
      return;
    }

    console.log('Initializing Mapbox with token:', mapboxToken.substring(0, 10) + '...');

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-82.3248, 29.6516], // Gainesville, FL coordinates
        zoom: 9,
        pitch: 0,
        bearing: 0,
      });

      console.log('Map created successfully');

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add light pollution overlays once map loads
      map.current.on('load', () => {
        console.log('Map loaded successfully');
        addLightPollutionLayers();
        addSensitiveAreas();
      });

      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
      });

    } catch (error) {
      console.error('Failed to initialize Mapbox map:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  // Update layers when mitigation settings change
  useEffect(() => {
    if (!map.current?.isStyleLoaded()) return;
    updatePollutionVisualization();
  }, [mitigationSettings]);

  const addLightPollutionLayers = () => {
    if (!map.current) return;

    // Simulated light pollution data - in real implementation, this would come from VIIRS data
    map.current.addSource('light-pollution', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          // Gainesville urban core (Bortle 8-9)
          {
            type: 'Feature',
            properties: { bortle: 9, intensity: 0.9, area: 'Gainesville Downtown' },
            geometry: {
              type: 'Polygon',
              coordinates: [[
                [-82.35, 29.64],
                [-82.32, 29.64],
                [-82.32, 29.67],
                [-82.35, 29.67],
                [-82.35, 29.64]
              ]]
            }
          },
          // Suburban Gainesville (Bortle 6-7)
          {
            type: 'Feature',
            properties: { bortle: 6, intensity: 0.6, area: 'Suburban Gainesville' },
            geometry: {
              type: 'Polygon',
              coordinates: [[
                [-82.4, 29.6],
                [-82.25, 29.6],
                [-82.25, 29.7],
                [-82.4, 29.7],
                [-82.4, 29.6]
              ]]
            }
          },
          // Paynes Prairie area (Bortle 4-5)
          {
            type: 'Feature',
            properties: { bortle: 4, intensity: 0.3, area: 'Paynes Prairie' },
            geometry: {
              type: 'Polygon',
              coordinates: [[
                [-82.35, 29.55],
                [-82.25, 29.55],
                [-82.25, 29.62],
                [-82.35, 29.62],
                [-82.35, 29.55]
              ]]
            }
          }
        ]
      }
    });

    // Add light pollution fill layer
    map.current.addLayer({
      id: 'light-pollution-fill',
      type: 'fill',
      source: 'light-pollution',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'bortle'],
          1, '#1e293b', // Bortle 1 - dark blue
          4, '#fb923c', // Bortle 4 - orange
          6, '#f97316', // Bortle 6 - bright orange  
          9, '#ef4444'  // Bortle 9 - red
        ],
        'fill-opacity': [
          'interpolate',
          ['linear'],
          ['get', 'intensity'],
          0, 0.3,
          1, 0.8
        ]
      }
    });

    // Add light pollution outline
    map.current.addLayer({
      id: 'light-pollution-outline',
      type: 'line',
      source: 'light-pollution',
      paint: {
        'line-color': '#ffffff',
        'line-width': 1,
        'line-opacity': 0.5
      }
    });

    // Add popup on click
    map.current.on('click', 'light-pollution-fill', (e) => {
      if (!e.features?.[0]) return;
      
      const feature = e.features[0];
      const coordinates = e.lngLat;
      const { bortle, area } = feature.properties;

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`
          <div class="p-2">
            <h3 class="font-semibold">${area}</h3>
            <p class="text-sm">Bortle Class: ${bortle}</p>
            <p class="text-xs text-gray-600">Click for detailed analysis</p>
          </div>
        `)
        .addTo(map.current!);
    });

    // Change cursor on hover
    map.current.on('mouseenter', 'light-pollution-fill', () => {
      map.current!.getCanvas().style.cursor = 'pointer';
    });

    map.current.on('mouseleave', 'light-pollution-fill', () => {
      map.current!.getCanvas().style.cursor = '';
    });
  };

  const addSensitiveAreas = () => {
    if (!map.current) return;

    // Add sensitive areas markers
    const sensitiveAreas = [
      {
        name: 'Paynes Prairie Preserve State Park',
        coordinates: [-82.3, 29.58],
        type: 'preserve'
      },
      {
        name: 'San Felasco Hammock Preserve',
        coordinates: [-82.42, 29.68],
        type: 'preserve'
      },
      {
        name: 'Rosemary Hill Observatory',
        coordinates: [-82.35, 29.72],
        type: 'observatory'
      }
    ];

    sensitiveAreas.forEach(area => {
      const marker = new mapboxgl.Marker({
        color: '#3b82f6',
        scale: 0.8
      })
        .setLngLat(area.coordinates as [number, number])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-semibold">${area.name}</h3>
                <p class="text-sm capitalize">${area.type}</p>
                <p class="text-xs text-gray-600">Protected Dark Sky Area</p>
              </div>
            `)
        )
        .addTo(map.current!);
    });
  };

  const updatePollutionVisualization = () => {
    if (!map.current?.getSource('light-pollution')) return;

    // Calculate mitigation effect
    const mitigationFactor = calculateMitigationFactor(mitigationSettings);
    
    // Update layer opacity based on mitigation
    map.current.setPaintProperty('light-pollution-fill', 'fill-opacity', [
      'interpolate',
      ['linear'],
      ['get', 'intensity'],
      0, 0.1 * mitigationFactor,
      1, 0.8 * mitigationFactor
    ]);
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

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      if (!mapboxToken.startsWith('pk.')) {
        alert('Please use a PUBLIC Mapbox token that starts with "pk." not a secret token that starts with "sk."');
        return;
      }
      setShowTokenInput(false);
    }
  };

  if (showTokenInput) {
    return (
      <Card className="p-6 space-y-4 bg-card/80 backdrop-blur-sm border-primary/20">
        <h3 className="text-lg font-semibold text-foreground">Mapbox Configuration</h3>
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
          <p className="text-sm text-destructive font-medium mb-2">⚠️ Important: Use a PUBLIC token</p>
          <p className="text-xs text-muted-foreground">
            You need a PUBLIC token that starts with "pk." (not a secret token that starts with "sk.").
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          Get your PUBLIC token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a> → Account → Access Tokens
        </p>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="pk.ey..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="w-full p-2 rounded-md bg-input border border-border text-foreground"
          />
          <button
            onClick={handleTokenSubmit}
            disabled={!mapboxToken.trim()}
            className="w-full p-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            Initialize Map
          </button>
        </div>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden border border-primary/20 shadow-glow">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
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