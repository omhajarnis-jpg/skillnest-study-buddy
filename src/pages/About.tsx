import Navigation from "@/components/Navigation";
import { CheckCircle, Heart, Target, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Comprehensive Resources",
      description: "Access notes, videos, and certifications all in one place"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Study with Buddy",
      description: "Learn together with our collaborative study approach"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Grade-Specific Content",
      description: "Tailored materials for every educational level"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Student-Centric",
      description: "Designed by students, for students' success"
    }
  ];

  return (
    <div className="min-h-screen bg-subtle-gradient">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About SkillNest
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            One place to find everything you need for your studies – from 1st grade to graduation.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-hero-gradient rounded-2xl p-12 text-center text-white animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
              SkillNest is dedicated to making quality education accessible to every student. 
              We believe that learning should be collaborative, comprehensive, and enjoyable. 
              Our platform brings together the best study materials, expert videos, and valuable 
              certifications to support your academic journey from elementary school through graduation.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose SkillNest?
            </h2>
            <p className="text-xl text-muted-foreground">
              Features that make studying effective and enjoyable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="content-card flex items-start space-x-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 skillnest-card">
            <div className="text-4xl font-bold text-primary mb-2">12+</div>
            <div className="text-muted-foreground">Grade Levels</div>
          </div>
          <div className="text-center p-8 skillnest-card">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Study Resources</div>
          </div>
          <div className="text-center p-8 skillnest-card">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Access Available</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-accent/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who are already studying with SkillNest
          </p>
          <div className="space-x-4">
            <a 
              href="/school" 
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Explore School Section
            </a>
            <a 
              href="/undergraduate" 
              className="inline-flex items-center px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              View Undergraduate
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;