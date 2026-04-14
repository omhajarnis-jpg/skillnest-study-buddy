import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const School = () => {
  const grades = [
    { grade: "1st", name: "Class 1", description: "Foundation learning" },
    { grade: "2nd", name: "Class 2", description: "Basic concepts" },
    { grade: "3rd", name: "Class 3", description: "Building skills" },
    { grade: "4th", name: "Class 4", description: "Expanding knowledge" },
    { grade: "5th", name: "Class 5", description: "Core subjects" },
    { grade: "6th", name: "Class 6", description: "Middle school start" },
    { grade: "7th", name: "Class 7", description: "Advanced concepts" },
    { grade: "8th", name: "Class 8", description: "Pre-secondary prep" },
    { grade: "9th", name: "Class 9", description: "Secondary start" },
    { grade: "10th", name: "Class 10", description: "Board exam prep" },
    { grade: "11th", name: "Class 11", description: "Stream selection" },
    { grade: "12th", name: "Class 12", description: "Final year" },
  ];

  return (
    <div className="min-h-screen bg-subtle-gradient">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            School Section
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your grade to access notes, videos, and certifications tailored for your learning level.
          </p>
        </div>

        {/* Grades Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {grades.map((item, index) => (
            <Link
              key={item.grade}
              to={`/class/${item.grade.toLowerCase()}`}
              className="grade-card group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            Need help choosing? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for guidance.
          </p>
        </div>
      </main>
    </div>
  );
};

export default School;