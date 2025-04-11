
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update page title
    document.title = "Page Not Found | White Whiz";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-whitewhiz-gray-light px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-9xl font-bold text-whitewhiz-purple mb-6 animate-fade-in">404</h1>
        <h2 className="text-3xl font-semibold text-whitewhiz-gray-dark mb-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Oops! Page not found
        </h2>
        <p className="text-whitewhiz-gray-medium text-lg mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Button 
          asChild 
          className="bg-whitewhiz-purple hover:bg-whitewhiz-purple-light animate-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          <Link to="/" className="inline-flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
