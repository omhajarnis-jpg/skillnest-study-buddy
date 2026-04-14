import Navigation from "@/components/Navigation";
import { useParams, Link } from "react-router-dom";
import { Download, Play, Award, FileText, Video, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const UGPage = () => {
  const { year } = useParams();
  
  const yearMap: { [key: string]: string } = {
    "fy": "First Year",
    "sy": "Second Year", 
    "ty": "Third Year",
    "fourth": "Fourth Year"
  };

  const yearName = yearMap[year || ""] || "Unknown Year";

  // Sample content data for undergraduate level
  const notes = [
    { title: "Advanced Mathematics", subject: "Mathematics", size: "4.2 MB", downloadCount: 2847 },
    { title: "Computer Science Fundamentals", subject: "CS", size: "5.8 MB", downloadCount: 3543 },
    { title: "Physics Mechanics", subject: "Physics", size: "3.7 MB", downloadCount: 2156 },
    { title: "Literature Analysis", subject: "English", size: "2.9 MB", downloadCount: 1823 },
    { title: "Economics Principles", subject: "Economics", size: "4.1 MB", downloadCount: 2234 },
    { title: "Research Methodology", subject: "Research", size: "3.5 MB", downloadCount: 1967 }
  ];

  const videos = [
    { title: "Calculus Made Easy", duration: "45:32", views: "23.7k", subject: "Mathematics" },
    { title: "Programming Basics", duration: "52:15", views: "18.9k", subject: "Computer Science" },
    { title: "Lab Experiments Guide", duration: "38:20", views: "15.2k", subject: "Physics" },
    { title: "Essay Writing Techniques", duration: "28:45", views: "12.8k", subject: "English" },
    { title: "Market Analysis", duration: "41:10", views: "19.3k", subject: "Economics" },
    { title: "Data Collection Methods", duration: "35:55", views: "14.6k", subject: "Research" }
  ];

  const certifications = [
    { title: "Google Data Analytics", provider: "Google", level: "Professional", cost: "$49/month", category: "Data Science" },
    { title: "AWS Cloud Practitioner", provider: "Amazon", level: "Associate", cost: "$100", category: "Cloud Computing" },
    { title: "Project Management", provider: "PMI", level: "Professional", cost: "$405", category: "Management" },
    { title: "Digital Marketing", provider: "HubSpot", level: "Intermediate", cost: "Free", category: "Marketing" },
    { title: "Python Programming", provider: "Microsoft", level: "Intermediate", cost: "$165", category: "Programming" },
    { title: "UX Design Fundamentals", provider: "Adobe", level: "Beginner", cost: "$20.99/month", category: "Design" }
  ];

  return (
    <div className="min-h-screen bg-subtle-gradient">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/undergraduate" className="hover:text-primary">Undergraduate</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{yearName}</span>
          </nav>
          
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {yearName} Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Advanced study materials and professional development resources for {yearName} students
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="skillnest-card p-6 text-center">
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{notes.length}</div>
            <div className="text-sm text-muted-foreground">Study Notes</div>
          </div>
          <div className="skillnest-card p-6 text-center">
            <Video className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{videos.length}</div>
            <div className="text-sm text-muted-foreground">Video Lectures</div>
          </div>
          <div className="skillnest-card p-6 text-center">
            <Award className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{certifications.length}</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="skillnest-card p-6 text-center">
            <Award className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground">Access</div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Notes Section */}
          <section className="animate-slide-up">
            <div className="flex items-center mb-8">
              <FileText className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Advanced Study Notes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note, index) => (
                <div key={index} className="content-card group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {note.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-1">
                        Subject: {note.subject}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {note.size} • {note.downloadCount.toLocaleString()} downloads
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Videos Section */}
          <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-8">
              <Video className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Expert Video Lectures</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div key={index} className="content-card group">
                  <div className="relative mb-4">
                    <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                      <Play className="h-12 w-12 text-primary" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {video.subject}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {video.views} views
                  </p>
                  
                  <Button className="w-full" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Now
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Professional Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="content-card group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {cert.title}
                      </h3>
                      <div className="space-y-1 mb-3">
                        <p className="text-muted-foreground text-sm">
                          Provider: {cert.provider}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Level: {cert.level}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Category: {cert.category}
                        </p>
                      </div>
                      <p className="font-semibold text-primary text-lg">
                        {cert.cost}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <Award className="h-4 w-4 mr-2" />
                    Enroll Now
                  </Button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Advance Your Career?
          </h2>
          <p className="text-muted-foreground mb-6">
            Take your skills to the next level with our comprehensive resources and professional certifications.
          </p>
          <div className="space-x-4">
            <Link to="/contact">
              <Button>Get Academic Guidance</Button>
            </Link>
            <Link to="/undergraduate">
              <Button variant="outline">Explore Other Years</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UGPage;