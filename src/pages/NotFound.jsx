import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-secondary/30">
      <div className="max-w-xl w-full text-center bg-card border border-border rounded-2xl p-10 shadow-xs">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-primary/10">
            <SearchX className="h-10 w-10 text-primary" />
          </div>
        </div>

        <h1 className="text-6xl font-bold tracking-tight mb-2 text-primary">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
          Page Not Found
        </h2>

        <p className="text-muted-foreground mb-8">
          Oops! The page you’re looking for doesn’t exist
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="cosmic-button w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-bold flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
