import { Download, Briefcase, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold">Curriculum Vitae</h1>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>

          {/* Experience */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-semibold">Experience</h2>
            </div>
            <div className="space-y-6 border-l-2 border-border pl-6 ml-3">
              <div>
                <h3 className="text-xl font-semibold">Doctoral Researcher</h3>
                <p className="text-muted-foreground">École Normale Supérieure de Lyon • Mar 2025 – Present</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Research on the architecture of Internet systems.</li>
                  <li>• Focus on network performance and privacy.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Research Engineer</h3>
                <p className="text-muted-foreground">École Normale Supérieure de Lyon • Oct 2024 – Feb 2025</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Network performance analysis of wireless IoT devices.</li>
                  <li>• Developed lightweight multivariate traffic model improving accuracy by 23%.</li>
                  <li>• Implemented the model in an NS3 (C++) module.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Undergraduate Research Assistant</h3>
                <p className="text-muted-foreground">Université Claude Bernard Lyon 1 • Nov 2024 – Jun 2025</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Studied security and privacy impact of IoT devices.</li>
                  <li>• Reverse-engineered IoT devices using Ghidra and Wireshark.</li>
                  <li>• Discovered several device vulnerabilities.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Network Engineer Apprentice</h3>
                <p className="text-muted-foreground">Viveris • Sept 2023 – Sept 2024</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Led network infrastructure upgrades toward ISO 27001 alignment.</li>
                  <li>• Reduced infrastructure costs by 25% using OPNSense, OpenVAS, and Zabbix.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
                <p className="text-muted-foreground">Worldline • Apr 2022 – Aug 2022</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Built financial tools using Java Spring and PostgreSQL.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-semibold">Publications</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold">Rethinking Geolocalization on the Internet</h3>
                <p className="text-sm text-muted-foreground">ACM HotNets 2025</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold">SoK: Privacy Analysis of Geolocation Data Infrastructures</h3>
                <p className="text-sm text-muted-foreground">In preparation</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-6">Skills</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {["C/C++", "Rust", "Go", "Python", "Java", "JavaScript/HTML/CSS"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {["CCNA 1 & 2", "CCNA Security", "INE eJPT"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["French (Native)", "English (Fluent)", "Spanish (Intermediate)"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Academic Service */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-semibold">Teaching Experience</h2>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>• Teaching Assistant — ENS Lyon (Sept 2025 – Present)</p>
              <p>• Teaching Assistant — Networking, UCBL (Oct 2024 – Jan 2025)</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;