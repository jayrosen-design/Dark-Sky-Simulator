import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, ExternalLink, Download, Globe, Users, Lightbulb } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-space">
      <div className="max-w-4xl mx-auto space-y-8 p-4 sm:p-6 pb-12">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tools, guides, and information to help you reduce light pollution in your community
          </p>
        </div>

        {/* Organizations */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Key Organizations</h2>
            </div>
            
            <div className="grid gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">DarkSky International</h3>
                  <Badge variant="secondary">Primary Resource</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  The leading organization working to protect night skies from light pollution. Offers 
                  certification programs, educational resources, and advocacy tools.
                </p>
                <div className="flex items-center space-x-2 text-xs">
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-muted-foreground">darksky.org</span>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Illuminating Engineering Society (IES)</h3>
                  <Badge variant="outline">Technical Standards</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Professional organization that develops lighting standards and guidelines, including 
                  recommendations for minimizing light pollution.
                </p>
                <div className="flex items-center space-x-2 text-xs">
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-muted-foreground">ies.org</span>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">International Commission on Illumination (CIE)</h3>
                  <Badge variant="outline">Global Standards</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  International organization for lighting science and technology, developing standards 
                  and guidance documents for responsible outdoor lighting.
                </p>
                <div className="flex items-center space-x-2 text-xs">
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-muted-foreground">cie.co.at</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Technical Resources */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Book className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Technical Guides & Standards</h2>
            </div>
            
            <div className="grid gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Model Lighting Ordinance (MLO)</h3>
                  <Badge variant="secondary">
                    <Download className="h-3 w-3 mr-1" />
                    Free Download
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Comprehensive template ordinance from DarkSky International providing a framework 
                  for communities to develop effective lighting regulations.
                </p>
                <div className="text-xs text-muted-foreground">
                  Includes: Zoning guidelines, fixture standards, enforcement procedures
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">IES Design Guide DG-18</h3>
                  <Badge variant="outline">Professional Standard</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  "Design Guide for the Illumination of Roadway Exits" - Technical guidance for 
                  effective lighting design that minimizes environmental impact.
                </p>
                <div className="text-xs text-muted-foreground">
                  Focus: Highway lighting, glare control, energy efficiency
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">CIE Guide to the Lighting of Urban Areas</h3>
                  <Badge variant="outline">International Standard</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  International best practices for urban lighting design, including considerations 
                  for environmental impact and energy efficiency.
                </p>
                <div className="text-xs text-muted-foreground">
                  Covers: Urban planning, sustainability, obtrusive light control
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Educational Materials */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Educational Materials</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h3 className="font-medium">For Communities</h3>
                <div className="space-y-3">
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium text-sm">Citizen's Guide to Dark Sky Protection</div>
                    <div className="text-xs text-muted-foreground">
                      Introduction to light pollution issues and solutions for community members
                    </div>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium text-sm">Fixture Shield User Guide</div>
                    <div className="text-xs text-muted-foreground">
                      Practical guide to identifying and improving problematic lighting
                    </div>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium text-sm">Economic Benefits of Dark Sky Protection</div>
                    <div className="text-xs text-muted-foreground">
                      Case studies and data on cost savings and economic opportunities
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">For Professionals</h3>
                <div className="space-y-3">
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium text-sm">Lighting Engineer's Handbook</div>
                    <div className="text-xs text-muted-foreground">
                      Technical guidance for designing dark sky-friendly lighting systems
                    </div>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium text-sm">Municipal Planning Guide</div>
                    <div className="text-xs text-muted-foreground">
                      Strategies for incorporating dark sky principles into development planning
                    </div>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium text-sm">Ordinance Implementation Toolkit</div>
                    <div className="text-xs text-muted-foreground">
                      Step-by-step guidance for adopting and enforcing lighting ordinances
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Data and Research */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Data & Research Tools</h2>
            </div>
            
            <div className="grid gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Light Pollution Atlas</h3>
                  <Badge variant="secondary">Interactive Map</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Global interactive map showing light pollution levels worldwide based on satellite data. 
                  Useful for assessing current conditions and tracking changes over time.
                </p>
                <div className="flex items-center space-x-2 text-xs">
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-muted-foreground">lightpollutionmap.info</span>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">NASA Black Marble Data</h3>
                  <Badge variant="outline">Scientific Data</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  High-quality satellite imagery of Earth at night, providing scientific data for 
                  research and monitoring light pollution trends.
                </p>
                <div className="flex items-center space-x-2 text-xs">
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-muted-foreground">nasa.gov/blackmarble</span>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Globe at Night</h3>
                  <Badge variant="outline">Citizen Science</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Citizen science program where volunteers measure night sky brightness and contribute 
                  to a global database of light pollution observations.
                </p>
                <div className="flex items-center space-x-2 text-xs">
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-muted-foreground">globeatnight.org</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Lighting Guides */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Practical Lighting Guides</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Fixture Selection</h3>
                <div className="space-y-3">
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium text-sm mb-1">Approved Fixture Database</div>
                    <div className="text-xs text-muted-foreground">
                      Searchable database of fixtures that meet dark sky standards
                    </div>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium text-sm mb-1">BUG Rating Explained</div>
                    <div className="text-xs text-muted-foreground">
                      Understanding Backlight, Uplight, and Glare ratings for fixtures
                    </div>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium text-sm mb-1">Retrofit Solutions</div>
                    <div className="text-xs text-muted-foreground">
                      Options for improving existing lighting without complete replacement
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Design Resources</h3>
                <div className="space-y-3">
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium text-sm mb-1">Lighting Design Calculator</div>
                    <div className="text-xs text-muted-foreground">
                      Tools for calculating appropriate light levels for different applications
                    </div>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium text-sm mb-1">Color Temperature Guide</div>
                    <div className="text-xs text-muted-foreground">
                      Choosing appropriate CCT for different applications and environments
                    </div>
                  </div>
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium text-sm mb-1">Controls and Timing</div>
                    <div className="text-xs text-muted-foreground">
                      Implementing smart controls, sensors, and adaptive lighting systems
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Funding and Support */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Funding & Support Programs</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="font-medium">Grant Opportunities</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• EPA Environmental Justice grants</li>
                  <li>• State energy efficiency programs</li>
                  <li>• Tourism development grants</li>
                  <li>• Environmental protection grants</li>
                  <li>• Municipal sustainability funds</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Technical Assistance</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• DarkSky International consultation</li>
                  <li>• University research partnerships</li>
                  <li>• Professional lighting society support</li>
                  <li>• Peer community mentoring</li>
                  <li>• Utility company programs</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Research and Studies */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Key Research Studies</h2>
            
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Health Impact Studies</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• "Artificial Light at Night and Cancer" - Harvard Medical School</li>
                  <li>• "Light Pollution and Sleep Disorders" - Sleep Research Society</li>
                  <li>• "Circadian Disruption and Metabolic Health" - Nature Medicine</li>
                </ul>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Wildlife Impact Research</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• "Ecological Light Pollution" - Frontiers in Ecology</li>
                  <li>• "Impacts on Migratory Birds" - Biological Conservation</li>
                  <li>• "Sea Turtle Disorientation Studies" - Marine Biology</li>
                </ul>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Economic Analysis</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• "Dark Sky Tourism Economic Impact" - Tourism Economics</li>
                  <li>• "Energy Savings from Better Lighting" - Energy Policy</li>
                  <li>• "Cost-Benefit Analysis of Light Pollution Ordinances"</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Get Help & Support</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-medium">Expert Consultation</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>Need help with your dark sky initiative? Connect with experts who can provide guidance tailored to your community's needs.</p>
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium">DarkSky International</div>
                    <div className="text-xs">certification@darksky.org</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Community Forums</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>Connect with other communities working on dark sky protection to share experiences and learn from each other.</p>
                  <div className="bg-muted/30 p-3 rounded">
                    <div className="font-medium">Dark Sky Community Network</div>
                    <div className="text-xs">Online forums and regional meetups</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Resources;