import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, Linkedin, Globe, Star } from "lucide-react";

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-space">
      <div className="max-w-4xl mx-auto space-y-8 p-4 sm:p-6 pb-12">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the experts dedicated to preserving dark skies for future generations
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We are a multidisciplinary team of researchers, engineers, policy experts, and advocates 
              working to combat light pollution through innovative technology, evidence-based policy, 
              and community engagement. Our Dark Sky Mapper platform represents years of collaborative 
              effort to make light pollution data accessible and actionable for communities worldwide.
            </p>
          </div>
        </Card>

        {/* Core Team */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Core Team</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Team Member 1 */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Dr. Sarah Chen</h3>
                    <Badge variant="secondary">Project Lead</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    PhD in Environmental Science, 15+ years in light pollution research
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dr. Chen leads our research initiatives and policy development. Her work has been 
                    instrumental in establishing light pollution standards for several international 
                    dark sky communities.
                  </p>
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <Mail className="h-3 w-3" />
                      <span>s.chen@darkskyproject.org</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Linkedin className="h-3 w-3" />
                      <span>sarah-chen-phd</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Marcus Rodriguez</h3>
                    <Badge variant="secondary">Technical Director</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    MS Computer Science, GIS and Remote Sensing Specialist
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marcus oversees the technical development of our simulation platform and manages 
                    the integration with Google Earth Engine and satellite data processing systems.
                  </p>
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <Mail className="h-3 w-3" />
                      <span>m.rodriguez@darkskyproject.org</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="h-3 w-3" />
                      <span>github.com/mrodriguez</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Dr. Emily Watson</h3>
                    <Badge variant="secondary">Policy Advisor</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    JD Environmental Law, Former DarkSky International Board Member
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dr. Watson brings extensive experience in environmental policy and municipal law. 
                    She has helped draft lighting ordinances for over 50 communities worldwide.
                  </p>
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <Mail className="h-3 w-3" />
                      <span>e.watson@darkskyproject.org</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Linkedin className="h-3 w-3" />
                      <span>emily-watson-law</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Dr. James Park</h3>
                    <Badge variant="secondary">Data Scientist</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    PhD Physics, Satellite Remote Sensing Expert
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dr. Park specializes in processing and analyzing satellite nighttime imagery. 
                    His algorithms power the baseline data processing for our simulation models.
                  </p>
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <Mail className="h-3 w-3" />
                      <span>j.park@darkskyproject.org</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="h-3 w-3" />
                      <span>scholar.google.com/jpark</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Advisors */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Advisory Board</h2>
            
            <div className="grid gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Dr. Christopher Kyba</h3>
                  <Badge variant="outline">Research Advisor</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Leading light pollution researcher at GFZ German Research Centre for Geosciences. 
                  Dr. Kyba's work on the "New World Atlas of Artificial Night Sky Brightness" provides 
                  foundational research for our platform.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Tim Hunter</h3>
                  <Badge variant="outline">Municipal Advisor</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Former Mayor of Flagstaff, Arizona (world's first Dark Sky City). Tim provides 
                  practical insights on implementing and maintaining dark sky policies in real-world 
                  municipal environments.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Dr. Travis Longcore</h3>
                  <Badge variant="outline">Ecological Advisor</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Assistant Professor at UCLA Institute of the Environment and Sustainability. 
                  Dr. Longcore's research on the ecological impacts of artificial light informs 
                  our wildlife impact assessments.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Collaborations */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Institutional Partnerships</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Research Institutions</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Stanford University - Environmental Engineering</li>
                  <li>• MIT - Urban Planning & Policy</li>
                  <li>• University of California, Davis - Ecology</li>
                  <li>• Colorado State University - Atmospheric Science</li>
                  <li>• Arizona State University - Sustainability</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Partner Organizations</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• DarkSky International</li>
                  <li>• NASA Goddard Space Flight Center</li>
                  <li>• NOAA National Centers for Environmental Information</li>
                  <li>• International Commission on Illumination (CIE)</li>
                  <li>• Illuminating Engineering Society (IES)</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Funding and Support */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Funding & Support</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                This project is made possible through generous support from multiple funding sources 
                and in-kind contributions from partner organizations:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Grant Funding</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• National Science Foundation (NSF)</li>
                    <li>• Environmental Protection Agency (EPA)</li>
                    <li>• Department of Energy (DOE)</li>
                    <li>• Private Foundation Grants</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">In-Kind Support</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Google Earth Engine Platform Access</li>
                    <li>• NASA Satellite Data</li>
                    <li>• University Research Facilities</li>
                    <li>• Community Partner Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Publications */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Recent Publications</h2>
            
            <div className="space-y-3">
              <div className="bg-muted/50 p-3 rounded-lg">
                <h3 className="font-medium text-sm mb-1">
                  "Quantitative Assessment of Light Pollution Mitigation Using Satellite Data"
                </h3>
                <div className="text-xs text-muted-foreground">
                  Environmental Science & Technology, 2024 • Chen, S., Park, J., Rodriguez, M.
                </div>
              </div>
              
              <div className="bg-muted/50 p-3 rounded-lg">
                <h3 className="font-medium text-sm mb-1">
                  "Policy Effectiveness in Dark Sky Protection: A Global Comparative Study"
                </h3>
                <div className="text-xs text-muted-foreground">
                  Journal of Environmental Policy, 2023 • Watson, E., Chen, S.
                </div>
              </div>
              
              <div className="bg-muted/50 p-3 rounded-lg">
                <h3 className="font-medium text-sm mb-1">
                  "Real-time Light Pollution Simulation for Community Planning"
                </h3>
                <div className="text-xs text-muted-foreground">
                  Remote Sensing Applications, 2023 • Rodriguez, M., Park, J., Chen, S.
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-medium">Project Inquiries</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>info@darkskyproject.org</span>
                  </div>
                  <p>
                    For general questions about the Dark Sky Mapper platform, research collaborations, 
                    or community partnerships.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Technical Support</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>support@darkskyproject.org</span>
                  </div>
                  <p>
                    For technical questions about using the simulation platform, data interpretation, 
                    or platform feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Team;