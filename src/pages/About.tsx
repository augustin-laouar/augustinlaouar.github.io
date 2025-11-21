import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-8">About Me</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
              <p>
                I am a doctoral student in Computer Science at the University of Research, 
                specializing in machine learning and artificial intelligence. My research focuses 
                on developing interpretable and ethical AI systems that can be reliably deployed 
                in high-stakes domains such as healthcare and finance.
              </p>
              <p>
                Before pursuing my PhD, I completed my Master's degree in Data Science and worked 
                as a research engineer at TechCorp, where I led projects on natural language 
                processing and computer vision applications.
              </p>
              <p>
                My approach combines rigorous theoretical foundations with practical applications, 
                always keeping in mind the societal impact of the technologies we create. I am 
                passionate about making AI more transparent, fair, and accessible to all.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-serif font-semibold text-lg mb-4">Contact</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:researcher@university.edu" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">researcher@university.edu</span>
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">GitHub Profile</span>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="text-sm">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-6">Education</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">PhD in Computer Science</h3>
                  <p className="text-muted-foreground">University of Research, 2021 - Present</p>
                  <p className="mt-2">
                    Thesis: "Interpretable Machine Learning for Healthcare Decision Support Systems"
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Advisor: Prof. Jane Smith
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">MSc in Data Science</h3>
                  <p className="text-muted-foreground">Tech University, 2019 - 2021</p>
                  <p className="mt-2">
                    Graduated with Distinction. Thesis on neural network optimization techniques.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">BSc in Computer Science</h3>
                  <p className="text-muted-foreground">State University, 2016 - 2019</p>
                  <p className="mt-2">First Class Honours</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-semibold mb-6">Research Interests</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Machine Learning</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Deep Learning</li>
                  <li>• Reinforcement Learning</li>
                  <li>• Transfer Learning</li>
                </ul>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">AI Ethics</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fairness in AI</li>
                  <li>• Explainable AI</li>
                  <li>• Privacy-Preserving ML</li>
                </ul>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Natural Language Processing</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Large Language Models</li>
                  <li>• Sentiment Analysis</li>
                  <li>• Machine Translation</li>
                </ul>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Computer Vision</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Object Detection</li>
                  <li>• Medical Image Analysis</li>
                  <li>• Video Understanding</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
