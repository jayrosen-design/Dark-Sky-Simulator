import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gavel, Shield, Clock, Lightbulb, MapPin, Users } from "lucide-react";

const Policies = () => {
  return (
    <div className="min-h-screen bg-gradient-space">
      <div className="max-w-4xl mx-auto space-y-8 p-4 sm:p-6 pb-12">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Policies & Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven strategies and policies for reducing light pollution while maintaining safety
          </p>
        </div>

        {/* Overview */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Gavel className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Effective Lighting Ordinances</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Well-designed lighting ordinances can dramatically reduce light pollution while maintaining 
              safety and security. The most effective policies combine fixture standards, timing controls, 
              and lighting levels appropriate for different zones. These regulations protect both human 
              health and wildlife while often reducing energy costs.
            </p>
          </div>
        </Card>

        {/* Key Policy Components */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Essential Policy Components</h2>
            
            <div className="grid gap-6">
              {/* Fixture Shielding */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Fixture Shielding Requirements</h3>
                  <Badge variant="secondary">Critical</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Require fully shielded fixtures that direct light downward where needed, eliminating upward light emission.
                </p>
                <div className="grid md:grid-cols-3 gap-3 text-xs">
                  <div className="bg-background/50 p-2 rounded">
                    <div className="font-medium">Full Cutoff</div>
                    <div className="text-muted-foreground">0% upward light</div>
                  </div>
                  <div className="bg-background/50 p-2 rounded">
                    <div className="font-medium">Cutoff</div>
                    <div className="text-muted-foreground">≤2.5% upward light</div>
                  </div>
                  <div className="bg-background/50 p-2 rounded">
                    <div className="font-medium">Semi-Cutoff</div>
                    <div className="text-muted-foreground">≤5% upward light</div>
                  </div>
                </div>
              </div>

              {/* Color Temperature */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Color Temperature Limits</h3>
                  <Badge variant="secondary">Important</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Restrict lighting to warmer colors that scatter less in the atmosphere and have lower biological impact.
                </p>
                <div className="grid md:grid-cols-4 gap-2 text-xs">
                  <div className="bg-amber-500/20 p-2 rounded text-center">
                    <div className="font-medium">≤2200K</div>
                    <div className="text-muted-foreground">Amber/LPS</div>
                  </div>
                  <div className="bg-yellow-500/20 p-2 rounded text-center">
                    <div className="font-medium">3000K</div>
                    <div className="text-muted-foreground">Warm White</div>
                  </div>
                  <div className="bg-blue-500/20 p-2 rounded text-center">
                    <div className="font-medium">4100K</div>
                    <div className="text-muted-foreground">Neutral</div>
                  </div>
                  <div className="bg-slate-500/20 p-2 rounded text-center">
                    <div className="font-medium">5000K+</div>
                    <div className="text-muted-foreground">Cool White</div>
                  </div>
                </div>
              </div>

              {/* Timing Controls */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Timing and Controls</h3>
                  <Badge variant="secondary">Effective</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Implement curfews and adaptive controls to reduce unnecessary lighting during low-activity periods.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-xs">
                  <div className="bg-background/50 p-2 rounded">
                    <div className="font-medium">Curfew Ordinances</div>
                    <div className="text-muted-foreground">Turn off decorative/advertising lights after 11 PM</div>
                  </div>
                  <div className="bg-background/50 p-2 rounded">
                    <div className="font-medium">Adaptive Controls</div>
                    <div className="text-muted-foreground">Motion sensors, dimming, smart controls</div>
                  </div>
                </div>
              </div>

              {/* Zoning */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Lighting Zones</h3>
                  <Badge variant="secondary">Flexible</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Establish different lighting standards for different areas based on usage and environmental sensitivity.
                </p>
                <div className="grid md:grid-cols-4 gap-2 text-xs">
                  <div className="bg-green-500/20 p-2 rounded text-center">
                    <div className="font-medium">E0-E1</div>
                    <div className="text-muted-foreground">Dark/Rural</div>
                  </div>
                  <div className="bg-yellow-500/20 p-2 rounded text-center">
                    <div className="font-medium">E2</div>
                    <div className="text-muted-foreground">Residential</div>
                  </div>
                  <div className="bg-orange-500/20 p-2 rounded text-center">
                    <div className="font-medium">E3</div>
                    <div className="text-muted-foreground">Commercial</div>
                  </div>
                  <div className="bg-red-500/20 p-2 rounded text-center">
                    <div className="font-medium">E4</div>
                    <div className="text-muted-foreground">High Activity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Technical Standards */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Technical Standards and Metrics</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h3 className="font-medium">Light Level Limits</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Residential areas:</span>
                    <span>0.5-1.0 lux average</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Commercial areas:</span>
                    <span>2-5 lux average</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industrial areas:</span>
                    <span>5-10 lux average</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Fixture Requirements</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• BUG (Backlight, Uplight, Glare) ratings</li>
                  <li>• Maximum mounting heights</li>
                  <li>• Minimum fixture spacing</li>
                  <li>• Shielding certification requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Policy Examples */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Successful Policy Examples</h2>
            
            <div className="grid gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Flagstaff, Arizona</h3>
                  <Badge variant="outline">World's First Dark Sky City</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Comprehensive ordinance requiring full cutoff fixtures, lighting curfews, and color temperature restrictions. 
                  Protects Lowell Observatory while maintaining safety.
                </p>
                <div className="text-xs text-muted-foreground">
                  Key features: Full cutoff required, 3000K max CCT, advertising light curfews
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Tucson, Arizona</h3>
                  <Badge variant="outline">Pioneer in Light Pollution Law</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  First city to enact light pollution ordinance (1972). Protects Kitt Peak observatories while 
                  serving a metropolitan area of over 1 million people.
                </p>
                <div className="text-xs text-muted-foreground">
                  Key features: Comprehensive zoning, observer protection, fixture standards
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Sedona, Arizona</h3>
                  <Badge variant="outline">Tourism-Friendly Dark Sky</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Balances tourism, business needs, and dark sky protection. Demonstrates that environmental 
                  protection can enhance rather than harm economic development.
                </p>
                <div className="text-xs text-muted-foreground">
                  Key features: Adaptive ordinance, business-friendly implementation, tourism benefits
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Implementation Strategies */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Implementation Strategies</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Building Support</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Engage stakeholders early (businesses, residents, utilities)</li>
                  <li>• Provide education about benefits and cost savings</li>
                  <li>• Form coalitions with health and environmental groups</li>
                  <li>• Use demonstration projects to show effectiveness</li>
                  <li>• Address safety concerns with data and examples</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Phased Implementation</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Start with new development requirements</li>
                  <li>• Grandfather existing compliant fixtures</li>
                  <li>• Provide reasonable replacement timelines</li>
                  <li>• Offer incentives for early compliance</li>
                  <li>• Focus enforcement on worst offenders first</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Economic Benefits */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Economic Benefits</h2>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">30-50%</div>
                <div className="text-sm text-muted-foreground">
                  Energy savings from better lighting design
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">25-40%</div>
                <div className="text-sm text-muted-foreground">
                  Reduction in maintenance costs
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">15-25%</div>
                <div className="text-sm text-muted-foreground">
                  Decrease in light-related accidents
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Additional Economic Benefits</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Increased property values in well-lit, glare-free neighborhoods</li>
                <li>• Tourism revenue from dark sky attractions</li>
                <li>• Reduced healthcare costs from better sleep and health</li>
                <li>• Lower carbon footprint and environmental compliance costs</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Model Ordinance Elements */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Model Ordinance Framework</h2>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-medium">Core Requirements</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All new fixtures must be fully shielded</li>
                    <li>• Maximum 3000K color temperature</li>
                    <li>• Lighting curfews for non-essential lighting</li>
                    <li>• Illumination level limits by zone</li>
                    <li>• Glare control requirements</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Implementation Support</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Technical assistance for compliance</li>
                    <li>• Approved fixture lists and guides</li>
                    <li>• Reasonable replacement schedules</li>
                    <li>• Enforcement procedures and penalties</li>
                    <li>• Regular ordinance review and updates</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h3 className="font-medium mb-2">Success Tip</h3>
                <p className="text-sm text-muted-foreground">
                  Start with a simple, clear ordinance focused on the most impactful changes. 
                  Build on early successes and community support to strengthen and expand 
                  protections over time.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Policies;