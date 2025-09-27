import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, MapPin, Star, Clock, Users } from "lucide-react";

const Certification = () => {
  return (
    <div className="min-h-screen bg-gradient-space">
      <div className="max-w-4xl mx-auto space-y-8 p-4 sm:p-6 pb-12">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Path to Dark Sky Certification
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the global movement of communities committed to preserving natural darkness
          </p>
        </div>

        {/* Overview */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">DarkSky International Certification</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              DarkSky International (formerly the International Dark-Sky Association) recognizes communities, 
              parks, and reserves that demonstrate exceptional commitment to preserving dark skies through 
              responsible lighting policies and practices. Certification provides a framework for achieving 
              measurable improvements in lighting quality while building community pride and economic benefits.
            </p>
          </div>
        </Card>

        {/* Certification Types */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Types of Dark Sky Places</h2>
            
            <div className="grid gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">International Dark Sky Communities</h3>
                  <Badge variant="secondary">Most Relevant</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Towns, cities, or regions that adopt comprehensive lighting ordinances and demonstrate 
                  measurable improvements in light pollution reduction. These communities balance growth 
                  and development with environmental stewardship.
                </p>
                <div className="text-xs text-muted-foreground">
                  Examples: Flagstaff (AZ), Sedona (AZ), Bon Accord (Canada), Moffat (Scotland)
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">International Dark Sky Parks</h3>
                  <Badge variant="outline">Protected Areas</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Public or private parks with exceptional quality of starry nights and commitment to 
                  protecting dark sky resources for present and future generations.
                </p>
                <div className="text-xs text-muted-foreground">
                  Examples: Death Valley, Big Bend, Natural Bridges, Brecon Beacons
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">International Dark Sky Reserves</h3>
                  <Badge variant="outline">Large Areas</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Large areas consisting of a dark "core" zone surrounded by a populated "buffer" zone 
                  where communities work together to reduce light pollution.
                </p>
                <div className="text-xs text-muted-foreground">
                  Examples: Central Idaho, Mont-Mégantic (Canada), Rhön (Germany), Aoraki Mackenzie (New Zealand)
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Community Certification Process */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Community Certification Process</h2>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full text-primary font-bold text-sm">1</div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-medium">Initial Assessment & Commitment</h3>
                  <p className="text-sm text-muted-foreground">
                    Evaluate current lighting conditions, build community support, and secure government 
                    commitment to pursue certification. Form a working group of stakeholders.
                  </p>
                  <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
                    Timeline: 3-6 months
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full text-primary font-bold text-sm">2</div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-medium">Develop Lighting Ordinance</h3>
                  <p className="text-sm text-muted-foreground">
                    Create or strengthen existing lighting ordinances to meet DarkSky International standards. 
                    Must address fixture shielding, color temperature, timing controls, and light levels.
                  </p>
                  <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
                    Timeline: 6-12 months
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full text-primary font-bold text-sm">3</div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-medium">Implementation & Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Implement ordinance requirements, conduct lighting audits, and achieve substantial 
                    compliance with new standards. Document improvements through photography and measurements.
                  </p>
                  <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
                    Timeline: 1-3 years
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full text-primary font-bold text-sm">4</div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-medium">Application & Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Submit comprehensive application including ordinance documentation, compliance evidence, 
                    and community commitment letters. Undergo site visit and review by DarkSky International.
                  </p>
                  <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
                    Timeline: 6-12 months
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full text-primary font-bold text-sm">5</div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-medium">Certification & Ongoing Commitment</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive designation and commit to ongoing compliance monitoring, community education, 
                    and continuous improvement. Participate in 5-year recertification process.
                  </p>
                  <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
                    Timeline: Ongoing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Requirements */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Certification Requirements</h2>
            </div>
            
            <div className="grid gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Lighting Ordinance Standards</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Required Elements:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Full cutoff fixtures for most applications</li>
                      <li>• Color temperature limits (typically ≤3000K)</li>
                      <li>• Illumination level standards</li>
                      <li>• Glare control measures</li>
                      <li>• Timing controls and curfews</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Prohibited Lighting:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Unshielded fixtures</li>
                      <li>• Decorative lighting visible from outside</li>
                      <li>• Searchlights and sky beams</li>
                      <li>• Excessive illumination levels</li>
                      <li>• Blue-rich lighting (>4000K)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Community Commitment</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Government Support:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Official resolution supporting certification</li>
                      <li>• Dedicated staff or committee</li>
                      <li>• Budget allocation for implementation</li>
                      <li>• Enforcement mechanisms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Community Engagement:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Public education programs</li>
                      <li>• Stakeholder involvement</li>
                      <li>• Business and resident support</li>
                      <li>• Ongoing outreach efforts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Benefits */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Benefits of Certification</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Economic Benefits</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Tourism revenue:</strong> Astrotourism can bring millions in economic impact</li>
                  <li>• <strong>Energy savings:</strong> Better lighting design reduces electricity costs</li>
                  <li>• <strong>Property values:</strong> Dark sky designation can increase property values</li>
                  <li>• <strong>Business attraction:</strong> Certification attracts environmentally conscious businesses</li>
                  <li>• <strong>Grant opportunities:</strong> Access to environmental and tourism grants</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Environmental & Social Benefits</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Wildlife protection:</strong> Reduced impact on nocturnal animals</li>
                  <li>• <strong>Human health:</strong> Better sleep and reduced light pollution exposure</li>
                  <li>• <strong>Cultural heritage:</strong> Preservation of night sky viewing</li>
                  <li>• <strong>Community pride:</strong> Recognition as an environmental leader</li>
                  <li>• <strong>Education opportunities:</strong> Science and environmental education programs</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Success Stories */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Success Stories</h2>
            
            <div className="grid gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Flagstaff, Arizona</h3>
                  <Badge>World's First Dark Sky City</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Since certification, Flagstaff has seen increased tourism, reduced energy costs, and 
                  enhanced quality of life. The city successfully balances urban growth with astronomical 
                  research needs.
                </p>
                <div className="text-xs text-muted-foreground">
                  Key achievements: 30% lighting energy reduction, $1M+ annual astrotourism revenue
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Torrey, Utah</h3>
                  <Badge>Small Town Success</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  This small community near Capitol Reef National Park leveraged dark sky certification 
                  to boost tourism and preserve its rural character while attracting new residents and businesses.
                </p>
                <div className="text-xs text-muted-foreground">
                  Key achievements: 400% increase in astrotourism visitors, new business development
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Moffat, Scotland</h3>
                  <Badge>International Example</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  The first Dark Sky Town in Europe, Moffat demonstrates that certification is achievable 
                  across different regulatory environments and can enhance international tourism appeal.
                </p>
                <div className="text-xs text-muted-foreground">
                  Key achievements: International recognition, enhanced European dark sky tourism
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Getting Started */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Getting Started</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-medium">First Steps</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Contact DarkSky International for guidance</li>
                    <li>• Form a local dark sky committee</li>
                    <li>• Conduct initial lighting inventory</li>
                    <li>• Build stakeholder support</li>
                    <li>• Research existing ordinances and requirements</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Resources Available</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Model lighting ordinance templates</li>
                    <li>• Technical assistance programs</li>
                    <li>• Community toolkit and guides</li>
                    <li>• Mentor community connections</li>
                    <li>• Educational materials and workshops</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <h3 className="font-medium mb-2">Key to Success</h3>
                <p className="text-sm text-muted-foreground">
                  The most successful certification efforts start with strong community engagement and 
                  education. Take time to build understanding and support before pursuing policy changes. 
                  Remember that certification is a marathon, not a sprint—focus on steady progress and 
                  long-term commitment.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Certification;