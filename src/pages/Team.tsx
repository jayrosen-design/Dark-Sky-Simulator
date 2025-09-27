import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-space">
      <div className="max-w-4xl mx-auto space-y-8 p-4 sm:p-6 pb-12">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Our Team
          </h1>
        </div>

        {/* Team Member */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Jay Rosen</h2>
            <p className="text-lg text-muted-foreground">Astrophotographer & Developer</p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:studio@jayrosen.design" className="hover:text-primary transition-colors">
                studio@jayrosen.design
              </a>
            </div>
          </div>
        </Card>

        {/* Acknowledgments */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Being developed with help from members of:</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>• Alachua County Environmental Protection Advisory Committee</p>
              <p>• Alachua Astronomy Club</p>
              <p>• Chiefland Astronomy Club</p>
              <p>• UF Astraeus Space Institute</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Team;