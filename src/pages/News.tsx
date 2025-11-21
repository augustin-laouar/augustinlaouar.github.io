import { Calendar, ExternalLink } from "lucide-react";

interface NewsItem {
  date: string;
  title: string;
  description: string;
  link?: string;
}

const News = () => {
  const newsItems: NewsItem[] = [
    {
      date: "March 2024",
      title: "Paper Accepted at ICML 2024",
      description:
        "Excited to announce that our paper 'Adaptive Learning Rates for Neural Networks: A Convergence Analysis' has been accepted for presentation at the International Conference on Machine Learning in Vienna, Austria.",
    },
    {
      date: "February 2024",
      title: "Guest Lecture at MIT",
      description:
        "Had the privilege of giving a guest lecture on 'Ethics in AI Systems' to graduate students at MIT's Computer Science Department.",
      link: "#",
    },
    {
      date: "January 2024",
      title: "Research Grant Awarded",
      description:
        "Received a $50,000 research grant from the National Science Foundation to investigate ethical AI frameworks in medical diagnosis systems. This funding will support the next phase of my doctoral research.",
    },
    {
      date: "December 2023",
      title: "New Collaboration with Healthcare Partners",
      description:
        "Beginning a new research collaboration with University Hospital to apply machine learning models for early disease detection. This partnership will provide access to anonymized patient data for validation studies.",
    },
    {
      date: "November 2023",
      title: "Keynote at AI Summit 2023",
      description:
        "Delivered a keynote presentation on 'Building Trustworthy AI Systems' at the National AI Summit, attended by over 500 researchers and industry professionals.",
      link: "#",
    },
    {
      date: "October 2023",
      title: "Workshop Paper Published",
      description:
        "Our workshop paper on fairness-aware machine learning has been published in the NeurIPS Fair AI Workshop proceedings.",
    },
    {
      date: "September 2023",
      title: "Teaching Award Nomination",
      description:
        "Honored to be nominated for the Excellence in Teaching Assistant Award for my work in the Introduction to AI course.",
    },
    {
      date: "August 2023",
      title: "Summer Research Program Success",
      description:
        "Successfully concluded our summer undergraduate research program. Mentored three students who will be presenting their work at regional conferences this fall.",
    },
  ];

  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Recent activities, achievements, and announcements
          </p>

          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                    <h2 className="text-xl font-serif font-semibold mb-3">{item.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
            <p className="text-muted-foreground">
              Want to stay updated? Follow me on{" "}
              <a href="https://twitter.com" className="text-primary hover:underline">
                Twitter
              </a>{" "}
              or{" "}
              <a href="https://linkedin.com" className="text-primary hover:underline">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
