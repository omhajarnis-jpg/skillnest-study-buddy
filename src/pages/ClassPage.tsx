import Navigation from "@/components/Navigation";
import { useParams, Link } from "react-router-dom";
import { Download, Play, Award, FileText, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClassPage = () => {
  const { grade } = useParams();
  
  const gradeMap: { [key: string]: string } = {
    "1st": "1st Grade",
    "2nd": "2nd Grade", 
    "3rd": "3rd Grade",
    "4th": "4th Grade",
    "5th": "5th Grade",
    "6th": "6th Grade",
    "7th": "7th Grade",
    "8th": "8th Grade",
    "9th": "9th Grade",
    "10th": "10th Grade",
    "11th": "11th Grade",
    "12th": "12th Grade"
  };

  const gradeName = gradeMap[grade || ""] || "Unknown Grade";

  // Sample content data
  const notes = [
    { title: "Mathematics Fundamentals", subject: "Math", size: "2.4 MB", downloadCount: 1247 },
    { title: "English Grammar Guide", subject: "English", size: "1.8 MB", downloadCount: 943 },
    { title: "Science Concepts", subject: "Science", size: "3.2 MB", downloadCount: 1156 },
    { title: "Social Studies Summary", subject: "Social Studies", size: "2.1 MB", downloadCount: 823 }
  ];

  const videos = [
    { title: "Math Problem Solving", duration: "15:32", views: "12.3k", thumbnail: "math" },
    { title: "English Reading Skills", duration: "22:45", views: "8.7k", thumbnail: "english" },
    { title: "Science Experiments", duration: "18:20", views: "15.2k", thumbnail: "science" },
    { title: "History Timeline", duration: "25:10", views: "6.9k", thumbnail: "history" }
  ];

  const certifications = [
    { title: "Khan Academy - Math Basics", provider: "Khan Academy", level: "Beginner", cost: "Free" },
    { title: "Reading Comprehension", provider: "Coursera", level: "Intermediate", cost: "$29" },
    { title: "Science Fair Projects", provider: "edX", level: "Beginner", cost: "Free" },
    { title: "Creative Writing", provider: "Udemy", level: "Beginner", cost: "$19" }
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
            <Link to="/school" className="hover:text-primary">School</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{gradeName}</span>
          </nav>
          
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {gradeName} Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive study materials designed for {gradeName} students
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Notes Section */}
          <section className="animate-slide-up">
            <div className="flex items-center mb-8">
              <FileText className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Study Notes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {notes.map((note, index) => (
                <div key={index} className="content-card group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {note.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-1">
                        Subject: {note.subject}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {note.size} • {note.downloadCount} downloads
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
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
              <h2 className="text-3xl font-bold text-foreground">Video Tutorials</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <div key={index} className="content-card group">
                  <div className="relative mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                      <Play className="h-16 w-16 text-primary" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {video.views} views
                  </p>
                  
                  <Button className="w-full">
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
              <h2 className="text-3xl font-bold text-foreground">Recommended Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="content-card group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-1">
                        Provider: {cert.provider}
                      </p>
                      <p className="text-muted-foreground text-sm mb-1">
                        Level: {cert.level}
                      </p>
                      <p className="font-semibold text-primary">
                        {cert.cost}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <Award className="h-4 w-4 mr-2" />
                    View Course
                  </Button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need More Help?
          </h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? We're here to help!
          </p>
          <div className="space-x-4">
            <Link to="/contact">
              <Button>Contact Support</Button>
            </Link>
            <Link to="/school">
              <Button variant="outline">Back to School Section</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClassPage;