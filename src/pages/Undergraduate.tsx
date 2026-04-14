import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

const Undergraduate = () => {
  const years = [
    { 
      year: "fy", 
      name: "First Year", 
      description: "Foundation courses and basic concepts",
      color: "bg-blue-100 text-blue-800"
    },
    { 
      year: "sy", 
      name: "Second Year", 
      description: "Core subjects and specialization begins",
      color: "bg-green-100 text-green-800"
    },
    { 
      year: "ty", 
      name: "Third Year", 
      description: "Advanced topics and practical application",
      color: "bg-purple-100 text-purple-800"
    },
    { 
      year: "fourth", 
      name: "Fourth Year", 
      description: "Final projects and career preparation",
      color: "bg-orange-100 text-orange-800"
    },
  ];

  return (
    <div className="min-h-screen bg-subtle-gradient">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Undergraduate Section
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive study materials for your undergraduate journey. From first year to graduation!
          </p>
        </div>

        {/* Years Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {years.map((item, index) => (
            <Link
              key={item.year}
              to={`/ug/${item.year}`}
              className="group"
            >
              <div className="content-card text-center h-full animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                  Explore Resources →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What You'll Find
            </h2>
            <p className="text-muted-foreground">
              Everything you need for undergraduate success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Notes</h3>
              <p className="text-muted-foreground">Detailed study materials for all subjects</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Lectures</h3>
              <p className="text-muted-foreground">Expert-led tutorials and explanations</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <p className="text-muted-foreground">Industry-recognized courses and certificates</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Undergraduate;