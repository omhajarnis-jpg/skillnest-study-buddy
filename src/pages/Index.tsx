import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (selectedLevel === "school") {
      navigate("/school");
    } else if (selectedLevel === "undergraduate") {
      navigate("/undergraduate");
    }
  };

  return (
    <div className="min-h-screen bg-subtle-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="hero-gradient py-20 lg:py-32 relative bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.8)), url(${heroImage})`,
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-8">
                <GraduationCap className="h-16 w-16 text-white mr-4 animate-float" />
                <div className="text-left">
                  <h1 className="text-5xl md:text-7xl font-bold text-white">
                    SkillNest
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 font-medium">
                    Study with Buddy
                  </p>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed">
                One place to find everything you need for your studies – from 1st grade to graduation.
                Access notes, videos, and certifications tailored for your learning journey.
              </p>

              {/* Grade Selection */}
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                  Which grade/year are you in?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <button
                    onClick={() => setSelectedLevel("school")}
                    className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                      selectedLevel === "school"
                        ? "border-white bg-white/20 transform scale-105"
                        : "border-white/30 bg-white/10 hover:bg-white/15 hover:border-white/50"
                    }`}
                  >
                    <BookOpen className="h-12 w-12 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">School</h3>
                    <p className="text-white/90">
                      1st to 12th Standard
                    </p>
                  </button>

                  <button
                    onClick={() => setSelectedLevel("undergraduate")}
                    className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                      selectedLevel === "undergraduate"
                        ? "border-white bg-white/20 transform scale-105"
                        : "border-white/30 bg-white/10 hover:bg-white/15 hover:border-white/50"
                    }`}
                  >
                    <Users className="h-12 w-12 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Undergraduate</h3>
                    <p className="text-white/90">
                      FY, SY, TY, Fourth Year
                    </p>
                  </button>
                </div>

                <Button
                  onClick={handleGetStarted}
                  disabled={!selectedLevel}
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SkillNest provides comprehensive study resources designed to support your academic journey at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="content-card text-center group animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Comprehensive Notes
              </h3>
              <p className="text-muted-foreground">
                Detailed study materials and notes for all subjects, organized by grade and topic for easy access.
              </p>
            </div>

            <div className="content-card text-center group animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Expert Videos
              </h3>
              <p className="text-muted-foreground">
                High-quality video tutorials and lectures from experienced educators to enhance your understanding.
              </p>
            </div>

            <div className="content-card text-center group animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Certifications
              </h3>
              <p className="text-muted-foreground">
                Curated professional certifications and courses to boost your skills and career prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">16+</div>
              <div className="text-white/90">Grade Levels</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-white/90">Study Resources</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-white/90">Video Tutorials</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join thousands of students who are already excelling with SkillNest
            </p>
            <div className="space-x-4">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Browse School Resources
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                Explore Undergraduate
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;