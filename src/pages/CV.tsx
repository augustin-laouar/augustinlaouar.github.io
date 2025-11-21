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
                <p className="text-muted-foreground">University of Research • 2021 - Present</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Conducting research on interpretable machine learning systems</li>
                  <li>• Published 5 peer-reviewed papers in top-tier venues</li>
                  <li>• Teaching assistant for "Introduction to AI" course</li>
                  <li>• Mentoring 3 undergraduate research students</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Research Engineer</h3>
                <p className="text-muted-foreground">TechCorp AI Labs • 2019 - 2021</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Led development of NLP models for customer service automation</li>
                  <li>• Improved model accuracy by 23% through novel training techniques</li>
                  <li>• Collaborated with cross-functional teams on product integration</li>
                  <li>• Presented research findings at internal innovation summits</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Machine Learning Intern</h3>
                <p className="text-muted-foreground">DataScience Co. • Summer 2018</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Developed predictive models for financial risk assessment</li>
                  <li>• Implemented data preprocessing pipelines using Python and SQL</li>
                  <li>• Created visualizations for stakeholder presentations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Awards & Honors */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-semibold">Awards & Honors</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Best Paper Award</h3>
                    <p className="text-sm text-muted-foreground">ICML 2024</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Doctoral Research Fellowship</h3>
                    <p className="text-sm text-muted-foreground">National Science Foundation</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2021-2024</span>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Outstanding Graduate Award</h3>
                    <p className="text-sm text-muted-foreground">Tech University</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2021</span>
                </div>
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
                  {["Python", "R", "Java", "C++", "JavaScript"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">ML/AI Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "Hugging Face"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Data Science</h3>
                <div className="flex flex-wrap gap-2">
                  {["Pandas", "NumPy", "SQL", "Spark", "Tableau"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "Linux", "Jupyter"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Service */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-semibold">Academic Service</h2>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>• Reviewer for ICML, NeurIPS, ICLR (2022-2024)</p>
              <p>• Program Committee Member, AI Ethics Workshop at AAAI 2024</p>
              <p>• Student Volunteer, Conference on Computer Vision and Pattern Recognition 2023</p>
              <p>• Co-organizer, University AI Research Seminar Series (2022-2023)</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;
