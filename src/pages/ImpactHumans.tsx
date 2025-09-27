import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Eye, Moon, Star, Clock, Lightbulb } from "lucide-react";

const ImpactHumans = () => {
  return (
    <div className="min-h-screen bg-gradient-space">
      <div className="max-w-4xl mx-auto space-y-8 p-4 sm:p-6 pb-12">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Impact on Human Health
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How artificial light at night affects our sleep, health, and well-being
          </p>
        </div>

        {/* Overview */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Circadian Rhythm Disruption</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Human biology is finely tuned to natural light-dark cycles. Our circadian rhythms—internal 
              biological clocks—regulate sleep, hormone production, body temperature, and countless other 
              physiological processes. Artificial light at night, especially blue-rich light, can disrupt 
              these essential rhythms, leading to a cascade of health problems.
            </p>
          </div>
        </Card>

        {/* Sleep Disruption */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Moon className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Sleep Quality</h2>
              <Badge variant="destructive">Critical Impact</Badge>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Exposure to artificial light, particularly in the evening and at night, suppresses the 
                production of melatonin—the hormone that regulates sleep-wake cycles. This can lead to 
                difficulty falling asleep, poor sleep quality, and daytime fatigue.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Melatonin Suppression</h3>
                  <p className="text-sm text-muted-foreground">
                    Even small amounts of light can suppress melatonin production. Blue light is 
                    particularly effective at disrupting melatonin, which is why screens and LED 
                    lighting can be so problematic before bedtime.
                  </p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Sleep Disorders</h3>
                  <p className="text-sm text-muted-foreground">
                    Chronic light exposure at night is linked to insomnia, delayed sleep phase 
                    syndrome, and other sleep disorders that affect millions of people worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Mental Health */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Mental Health</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Disrupted circadian rhythms are strongly linked to mental health problems, including 
                depression, anxiety, and mood disorders.
              </p>
              
              <div className="grid gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium">Seasonal Affective Disorder (SAD)</h3>
                    <p className="text-sm text-muted-foreground">
                      While SAD is caused by lack of daylight, artificial light at night can worsen 
                      symptoms by further disrupting natural light-dark cycles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium">Depression and Anxiety</h3>
                    <p className="text-sm text-muted-foreground">
                      Studies show increased rates of depression and anxiety in people exposed to 
                      higher levels of artificial light at night.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium">Cognitive Function</h3>
                    <p className="text-sm text-muted-foreground">
                      Poor sleep quality due to light pollution can impair memory, concentration, 
                      decision-making, and overall cognitive performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Physical Health */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Physical Health Consequences</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Obesity and Diabetes</h3>
                <p className="text-sm text-muted-foreground">
                  Circadian disruption affects metabolism and hormone regulation, increasing 
                  the risk of obesity, type 2 diabetes, and metabolic syndrome.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Cardiovascular Disease</h3>
                <p className="text-sm text-muted-foreground">
                  Poor sleep and disrupted circadian rhythms are linked to increased risk 
                  of heart disease, stroke, and high blood pressure.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Immune System</h3>
                <p className="text-sm text-muted-foreground">
                  Chronic sleep disruption weakens the immune system, making individuals 
                  more susceptible to infections and illness.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Cancer Risk</h3>
                <p className="text-sm text-muted-foreground">
                  The World Health Organization has classified shift work involving 
                  circadian disruption as a probable carcinogen.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Eye Health */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Vision and Eye Health</h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Digital Eye Strain</h3>
                  <p className="text-sm text-muted-foreground">
                    Prolonged exposure to blue light from screens and LED lighting can cause 
                    eye fatigue, dry eyes, and discomfort.
                  </p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Glare and Disability</h3>
                  <p className="text-sm text-muted-foreground">
                    Poorly designed outdoor lighting creates glare that can temporarily blind 
                    drivers and pedestrians, increasing accident risk.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Age-Related Effects</h3>
                <p className="text-sm text-muted-foreground">
                  Older adults are particularly sensitive to light pollution effects due to 
                  changes in the eye's lens and increased light sensitivity with age.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Vulnerable Populations */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Particularly Vulnerable Groups</h2>
            
            <div className="grid gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Shift Workers</h3>
                  <p className="text-sm text-muted-foreground">
                    Healthcare workers, emergency responders, and others who work at night face 
                    increased health risks from chronic circadian disruption.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Children and Adolescents</h3>
                  <p className="text-sm text-muted-foreground">
                    Young people are particularly sensitive to light pollution effects, with 
                    implications for development, learning, and behavior.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Elderly Population</h3>
                  <p className="text-sm text-muted-foreground">
                    Age-related changes in circadian rhythms make older adults more vulnerable 
                    to light pollution's effects on sleep and health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Cultural Impact */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Loss of Natural Heritage</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Beyond health impacts, light pollution disconnects us from our natural heritage. 
                The majority of humanity can no longer see the Milky Way from their homes, 
                representing a profound loss of connection to the cosmos.
              </p>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Cultural and Spiritual Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Many cultures and religions have deep connections to the night sky. Light pollution 
                  threatens these traditions and our shared human experience of wonder and perspective 
                  that comes from observing the stars.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Solutions */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Protecting Human Health</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="font-medium">Personal Actions</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use warm light bulbs (3000K or less)</li>
                  <li>• Avoid screens 1-2 hours before bed</li>
                  <li>• Install blackout curtains or eye masks</li>
                  <li>• Use blue light filters on devices</li>
                  <li>• Maintain consistent sleep schedules</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Community Solutions</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Support dark sky ordinances</li>
                  <li>• Advocate for shielded lighting</li>
                  <li>• Promote adaptive lighting controls</li>
                  <li>• Educate about health impacts</li>
                  <li>• Create dark zones in communities</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ImpactHumans;