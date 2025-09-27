import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Zap, Globe, TrendingUp } from "lucide-react";

const LightPollution = () => {
  return (
    <div className="min-h-screen bg-gradient-space">
      <div className="max-w-4xl mx-auto space-y-8 p-4 sm:p-6 pb-12">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Understanding Light Pollution
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn about the causes, types, and global impact of artificial light at night
          </p>
        </div>

        {/* What is Light Pollution */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">What is Light Pollution?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Light pollution is the excessive, misdirected, or obtrusive artificial light produced by human activities. 
              It occurs when artificial light sources interfere with natural darkness, affecting ecosystems, human health, 
              and our ability to observe the night sky. Unlike other forms of pollution, light pollution is entirely 
              reversible—simply turning off lights can immediately restore natural darkness.
            </p>
          </div>
        </Card>

        {/* Types of Light Pollution */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Types of Light Pollution</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Skyglow</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  The brightening of the night sky over inhabited areas, caused by upward-directed light scattering 
                  in the atmosphere. This is what creates the orange glow over cities.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Glare</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Excessive brightness that causes visual discomfort or reduces visibility. Common with 
                  unshielded streetlights and poorly designed outdoor lighting.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Light Trespass</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Light falling where it's not intended or needed, such as streetlights shining into 
                  bedroom windows or illuminating neighboring properties.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Clutter</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Bright, confusing, and excessive groupings of light sources, commonly found in 
                  commercial areas with numerous signs and lights.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Main Causes */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Main Causes</h2>
            </div>
            
            <div className="grid gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Unshielded Lighting</h3>
                  <p className="text-sm text-muted-foreground">
                    Fixtures that emit light upward or horizontally instead of directing it downward where needed.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Over-illumination</h3>
                  <p className="text-sm text-muted-foreground">
                    Using more light than necessary for safety and visibility, often due to misconceptions about security.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Blue-rich LED Lighting</h3>
                  <p className="text-sm text-muted-foreground">
                    High-temperature LED lights that scatter more in the atmosphere and have greater biological impact.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Urban Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    Rapid development without proper lighting ordinances or dark sky considerations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Global Impact */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Global Impact</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">80%</div>
                <div className="text-sm text-muted-foreground">
                  of the world's population lives under light-polluted skies
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">
                  of U.S. and European populations experience light pollution
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">2%</div>
                <div className="text-sm text-muted-foreground">
                  annual increase in global artificial light brightness
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Light pollution affects nearly every ecosystem on Earth. From disrupting animal migration patterns 
              to interfering with plant growth cycles, the ecological consequences are far-reaching. Meanwhile, 
              the majority of humanity can no longer see the Milky Way from their homes, representing a profound 
              disconnection from our natural heritage.
            </p>
          </div>
        </Card>

        {/* Growing Problem */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">A Growing Problem</h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Despite increased awareness, light pollution continues to grow globally. The transition to LED lighting, 
              while energy-efficient, has often led to increased light levels and bluer light spectra. However, 
              this challenge also presents an opportunity: with proper planning and technology, we can achieve 
              effective outdoor lighting while preserving dark skies.
            </p>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">The Solution is Within Reach</h3>
              <p className="text-sm text-muted-foreground">
                Unlike many environmental problems, light pollution has immediate solutions. Better lighting design, 
                shielding, timing controls, and appropriate light levels can dramatically reduce light pollution 
                while maintaining safety and security.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LightPollution;