# Dark Sky Simulator

**Light Pollution Mitigation Modeling for Alachua County Environmental Protection**

**Author:** Jay Rosen (jayrosen@ufl.edu)  
**Affiliation:** University of Florida College of Education  
**Conference:** UF Astraeus Space Research Day (October 1, 2025)  
**Live Application:** https://jayrosen.design/dark-sky

![Dark Sky Simulator Research Poster](https://github.com/jayrosen-design/alachua-sky-saver/blob/main/public/Jay%20Rosen%20-%20Dark%20Sky%20Simulator%20Poster.jpg?raw=true)

📄 **[Download Research Paper (PDF)](https://github.com/jayrosen-design/alachua-sky-saver/blob/main/public/Dark%20Sky%20Simulator%20paper.pdf)**

## Acknowledgements

This research was prepared at the request of the Alachua County Environmental Protection Advisory Committee (EPAC). The author also thanks the members of the Alachua Astronomy Club and Chiefland Astronomy Village for their community support and shared passion for dark sky preservation.

## Abstract

The Dark Sky Simulator is an interactive web application designed to visualize the current state of light pollution in Alachua County and model the quantitative benefits of implementing Dark Sky-friendly lighting policies. The platform combines real-time light pollution mapping with a comprehensive simulation engine that allows users to test various mitigation strategies including fixture shielding requirements, correlated color temperature limits, intensity reductions, and lighting curfews.

Users can define custom areas of interest and immediately see both visual and quantitative results, including improvements in Bortle Scale classifications and progress toward International Dark Sky certification requirements. The application provides critical decision-making tools for policymakers and environmental advocates by calculating implementation costs, projected annual savings, and payback periods for different lighting strategies.

By modeling proven approaches from successful Dark Sky communities like Groveland, Florida and Flagstaff, Arizona, the simulator demonstrates potential pathways for Alachua County to reduce light pollution while maintaining public safety and economic viability. The tool serves as both an educational resource and practical planning instrument, enabling evidence-based policy development that can protect the dark skies above natural areas like Paynes Prairie while improving astronomical visibility throughout the region.

## Key Features

### Interactive Simulation Engine
- **Custom Area Selection:** Define specific regions for targeted analysis
- **Real-time Visualization:** See immediate visual and quantitative impacts
- **Bortle Scale Modeling:** Track improvements from Bortle 7 (urban) to Bortle 2-3 (dark sky)
- **360° Sky Panorama:** Visual representation of night sky quality changes

### Mitigation Controls

**Lighting Policy Changes**
- Full-Cutoff Fixtures Mandate (High Impact) - Fully shielded lighting (ULOR = 0)
- Color Temperature Limits (Medium Impact) - Maximum 3000K for new installations
- Light Intensity Reduction (High Impact) - Reduce overall lighting levels (0-50%)
- Lighting Curfews (High Impact) - Automated dimming 12AM-5AM

**Public Infrastructure**
- Streetlight Dimming (Medium Impact) - Adaptive controls for GRU Streetlights
- Warm LED Standard (Medium Impact) - 2700K LEDs as default specification

**Protected Zones**
- Dark Sky Overlay Zones (Medium Impact) - Special protection for sensitive areas
- UF Campus Retrofit (Medium Impact) - University lighting master plan

**Transportation Mitigation**
- Highway Light Barriers (Low Impact) - Physical barriers along US 441
- Dark Road Surfaces (Low Impact) - Light-absorbing pavement materials

**Community & Monitoring**
- Community Education Program (Medium Impact) - Public outreach initiatives
- Sky Quality Monitoring (Medium Impact) - Ongoing measurement and data collection

### Economic Analysis
- **Implementation Cost Tracking:** Detailed initial investment calculations
- **Energy Savings Projections:** Annual cost reductions from efficient lighting
- **Payback Period Calculation:** ROI timeline for mitigation strategies
- **Net Annual Impact:** Comprehensive financial analysis

### Dark Sky Certification Progress
- **Five Weighted Requirements Tracking:**
  - Comprehensive lighting ordinance (30%)
  - Public streetlight retrofits (25%)
  - Protected dark sky zones (20%)
  - Community education (15%)
  - Sky brightness monitoring (10%)

## Projected Impact

### County-Wide Implementation
- **Initial Investment:** $15 million
- **Annual Maintenance:** $480,000
- **Annual Energy Savings:** $2.4 million
- **Net Annual Savings:** $1.9 million
- **Payback Period:** 7.8 years

### Light Pollution Reduction
- **Paynes Prairie:** Bortle 4 → Bortle 2
- **Gainesville Urban Core:** Bortle 7 → Bortle 3
- **Observable Change:** Milky Way visibility dramatically improved

## System Architecture

The simulator employs a modular architecture with distinct processing components:

### Cost Calculation Engine
Processes mitigation settings to calculate initial implementation costs, annual energy savings, maintenance expenses, and payback periods based on predefined cost data matrices.

### Bortle Scale Calculator
Applies multiplicative reduction factors to base Bortle classifications:
- Full Shielding: 25% reduction (0.75x factor)
- CCT Limits: 15% reduction (0.85x factor)
- Curfews: 30% reduction (0.70x factor)
- Dimming: 10% reduction (0.90x factor)
- Intensity: Variable 0-50% reduction

### Map Renderer
Dynamically updates polygon opacity and colors on the Leaflet map to visualize light pollution reduction in real-time as mitigation settings change.

### Sky Texture Selection
Each calculated Bortle class (1-9) corresponds to a specific panoramic sky texture that accurately represents star visibility and atmospheric glow levels.

## Technology Stack

- **Frontend:** React, TypeScript, Vite
- **UI Components:** shadcn-ui, Tailwind CSS
- **Mapping:** Leaflet
- **3D Visualization:** Three.js, React Three Fiber
- **State Management:** React Hooks
- **Routing:** React Router

## Dark Sky Certification Context

### International Dark Sky Communities
Towns, cities, or regions that adopt comprehensive lighting ordinances and demonstrate measurable improvements in light pollution reduction. These communities balance growth and development with environmental stewardship.

**Success Models:**
- **Groveland, Florida** - First Florida city with Dark Sky status, Bortle 3-4
- **Flagstaff, Arizona** - World's first International Dark Sky City (2001), Bortle 2-5

### Benefits of Dark Sky Designation

**Economic Benefits**
- Tourism revenue from astro-tourism
- Energy savings from better lighting design
- Increased property values
- Attraction of environmentally conscious businesses
- Access to environmental and tourism grants

**Environmental & Social Benefits**
- Wildlife protection for nocturnal animals
- Improved human health and sleep quality
- Preservation of cultural heritage
- Community pride and recognition
- Enhanced science education opportunities

## Development

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd dark-sky-simulator

# Install dependencies
npm i

# Start the development server
npm run dev
```

### Project Structure
```
src/
├── components/          # React components
│   ├── DarkSkyMap.tsx  # Interactive Leaflet map
│   ├── MitigationControls.tsx
│   ├── CostEstimate.tsx
│   ├── ProgressDashboard.tsx
│   └── SkyPanorama.tsx # 3D night sky visualization
├── pages/              # Route pages
└── lib/                # Utilities and helpers
```

## Research Documentation

- **Research Paper:** `public/Dark Sky Simulator paper.pdf`
- **Conference Poster:** `public/Jay Rosen - Dark Sky Simulator Poster.jpg`

## License & Contact

**Author:** Jay Rosen  
**Email:** jayrosen@ufl.edu  
**Institution:** University of Florida College of Education

This project was developed to support the Alachua County Environmental Protection Advisory Committee (EPAC) in their mission to preserve dark skies and promote responsible outdoor lighting practices.
