import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight">
            Augustin{" "}
            <span className="text-primary">Laouar</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of Networking, Privacy, and System Architecture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="group">
              <Link to="/publications">
                View Publications
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-8">Recent Highlights</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6 py-2">
              <p className="text-sm text-muted-foreground mb-1">September 2024</p>
              <h3 className="text-lg font-semibold mb-2">Paper accepted at ACM HotNets 2025</h3>
              <p className="text-muted-foreground">
                Our paper "Rethinking Geolocalization on the Internet" has been accepted and will be presented at HotNets 2025.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
