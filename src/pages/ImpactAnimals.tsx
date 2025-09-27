import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bird, Fish, Bug, TreePine, Moon, AlertTriangle } from "lucide-react";

const ImpactAnimals = () => {
  return (
    <div className="min-h-screen bg-gradient-space">
      <div className="max-w-4xl mx-auto space-y-8 p-4 sm:p-6 pb-12">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Impact on Wildlife
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How artificial light at night disrupts natural behaviors and ecosystems
          </p>
        </div>

        {/* Overview */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Moon className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Disrupting Natural Rhythms</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              For billions of years, life on Earth evolved with predictable patterns of light and dark. 
              Many species depend on natural darkness for navigation, reproduction, feeding, and protection 
              from predators. Artificial light at night disrupts these fundamental biological processes, 
              affecting countless species from insects to marine life to migratory birds.
            </p>
          </div>
        </Card>

        {/* Birds */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bird className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Birds</h2>
              <Badge variant="destructive">Critically Affected</Badge>
            </div>
            
            <div className="grid gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Migration Disruption</h3>
                <p className="text-sm text-muted-foreground">
                  Billions of migratory birds navigate using stars, moon, and magnetic fields. Artificial lights 
                  can disorient them, causing them to fly in circles around lit structures, leading to exhaustion, 
                  collisions, and death. An estimated 365-988 million birds die annually in North America from 
                  building collisions, many related to lighting.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Breeding and Feeding</h3>
                <p className="text-sm text-muted-foreground">
                  Artificial light can delay dawn singing in songbirds, alter hormone production affecting 
                  reproduction, and disrupt feeding patterns. Some species may abandon traditional nesting 
                  areas if they become too brightly lit.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Sea Birds and Coastal Species</h3>
                <p className="text-sm text-muted-foreground">
                  Young seabirds often become disoriented by coastal lighting when attempting their first 
                  flight to sea, flying toward lights instead of the ocean. This phenomenon, called "fallout," 
                  affects species like petrels, shearwaters, and albatrosses.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Sea Turtles */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Fish className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Sea Turtles</h2>
              <Badge variant="destructive">Endangered Species</Badge>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Sea turtle hatchlings naturally navigate toward the brightest horizon—historically the moon 
                and stars reflected on the ocean. Coastal lighting disrupts this ancient system, causing 
                hatchlings to crawl toward land instead of sea, a phenomenon called "disorientation."
              </p>
              
              <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <h3 className="font-medium">Critical Impact</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Disoriented hatchlings may die from exhaustion, dehydration, predation, or vehicle strikes. 
                  Adult female turtles may also avoid well-lit beaches for nesting, reducing available 
                  nesting habitat for these already threatened species.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Insects */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bug className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Insects</h2>
              <Badge variant="outline">Ecosystem Foundation</Badge>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Nocturnal insects form the foundation of many ecosystems, serving as pollinators and 
                food sources for countless species. Light pollution severely impacts their populations 
                and behaviors.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Fatal Attraction</h3>
                  <p className="text-sm text-muted-foreground">
                    Many insects are drawn to artificial lights, becoming trapped in endless circling 
                    patterns around light sources. This leads to exhaustion, increased predation, 
                    and death.
                  </p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Pollination Disruption</h3>
                  <p className="text-sm text-muted-foreground">
                    Night-flying pollinators like moths may avoid lit areas, reducing pollination 
                    services for plants that depend on nocturnal pollination.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Cascading Effects</h3>
                <p className="text-sm text-muted-foreground">
                  Declining insect populations affect the entire food web, impacting birds, bats, 
                  spiders, and other predators that depend on insects for food.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Marine Life */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Fish className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Marine Life</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Coastal lighting penetrates underwater environments, affecting marine ecosystems 
                that evolved in natural light-dark cycles.
              </p>
              
              <div className="grid gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium">Coral Reefs</h3>
                    <p className="text-sm text-muted-foreground">
                      Light pollution can disrupt coral spawning, which typically occurs during specific 
                      lunar phases in darkness.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium">Fish Behavior</h3>
                    <p className="text-sm text-muted-foreground">
                      Artificial light can alter feeding patterns, predator-prey relationships, 
                      and migration routes of marine fish.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium">Zooplankton</h3>
                    <p className="text-sm text-muted-foreground">
                      These tiny organisms perform daily vertical migrations that can be disrupted 
                      by artificial light, affecting entire marine food webs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Mammals */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TreePine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Mammals</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Bats</h3>
                <p className="text-sm text-muted-foreground">
                  Some bat species avoid lit areas, reducing their available habitat. Others are 
                  attracted to lights where insects gather, potentially altering their natural 
                  foraging patterns.
                </p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Nocturnal Mammals</h3>
                <p className="text-sm text-muted-foreground">
                  Species like raccoons, foxes, and deer may alter their activity patterns and 
                  habitat use in response to artificial lighting, potentially increasing 
                  human-wildlife conflicts.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Solutions */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Wildlife-Friendly Lighting Solutions</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Design Solutions</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use fully shielded fixtures</li>
                  <li>• Install motion sensors and timers</li>
                  <li>• Choose warm-colored lights (3000K or less)</li>
                  <li>• Minimize light levels to what's needed</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Seasonal Considerations</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lights Out programs during migration</li>
                  <li>• Turtle-friendly coastal lighting</li>
                  <li>• Breeding season light restrictions</li>
                  <li>• Dark corridors for wildlife movement</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ImpactAnimals;