
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll to add background
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      ref={navRef} 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/03dfb02c-c5be-4b4c-b22a-1da46e076e64.png" 
              alt="CYHIVE Logo" 
              className="h-10" 
            />
          </Link>
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 text-cyhive-900 hover:text-cyhive-500 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-4 py-2 text-cyhive-900 hover:text-cyhive-500 inline-flex items-center gap-1">
                  Services
                  <ChevronDown className="h-4 w-4" />
                  
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                {/* Internship sub-dropdown */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Internship</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-white">
                      <DropdownMenuItem>
                        <Link 
                          to="/services/internship/ai" 
                          className="w-full" 
                          onClick={() => {
                            setIsMenuOpen(false); // Close the mobile menu
                            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0); // Ensure scroll works on mobile
                          }}
                        >
                          Artificial Intelligence
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link 
                          to="/services/internship/datastructures" 
                          className="w-full" 
                          onClick={() => {
                            setIsMenuOpen(false);
                            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                          }}
                        >
                          Data Structures
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link 
                          to="/services/internship/python" 
                          className="w-full" 
                          onClick={() => {
                            setIsMenuOpen(false);
                            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                          }}
                        >
                          Python
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link 
                          to="/services/internship/networking" 
                          className="w-full" 
                          onClick={() => {
                            setIsMenuOpen(false);
                            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                          }}
                        >
                          Networking
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                
                {/* Courses sub-dropdown */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Courses</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="bg-white">
                      <DropdownMenuItem>
                        <Link 
                          to="/services/webdev/python" 
                          className="w-full" 
                          onClick={() => {
                            setIsMenuOpen(false);
                            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                          }}
                        >
                          Full Stack Python
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link 
                          to="/services/webdev/mern" 
                          className="w-full" 
                          onClick={() => {
                            setIsMenuOpen(false);
                            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                          }}
                        >
                          MERN Stack
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link 
                          to="/services/webdev/java" 
                          className="w-full" 
                          onClick={() => {
                            setIsMenuOpen(false);
                            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                          }}
                        >
                          Full Stack Java
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link 
                          to="/services/frontend" 
                          className="w-full" 
                          onClick={() => {
                            setIsMenuOpen(false);
                            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                          }}
                        >
                          Front End Development
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link 
                          to="/services/mobile" 
                          className="w-full" 
                          onClick={() => {
                            setIsMenuOpen(false);
                            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                          }}
                        >
                          Mobile App Development
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link 
                          to="/services/graphic" 
                          className="w-full" 
                          onClick={() => {
                            setIsMenuOpen(false);
                            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                          }}
                        >
                          Graphic Design
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <Link 
                    to="/services/frontend" 
                    className="w-full" 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Front End Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem> 
                  <Link 
                    to="/services/mobile" 
                    className="w-full" 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Mobile App Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link 
                    to="/services/graphic" 
                    className="w-full" 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Graphic Design
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link 
                    to="/services/vfx" 
                    className="w-full" 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    VFX
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link 
              to="/about" 
              className="px-4 py-2 text-cyhive-900 hover:text-cyhive-500 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              About Us
            </Link>
            <Link 
              to="/verify" 
              className="px-4 py-2 text-cyhive-900 hover:text-cyhive-500 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Verify
            </Link>
            
            
            <Link 
              to="/contact" 
              className="px-4 py-2 text-cyhive-900 hover:text-cyhive-500 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cyhive-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="px-4 py-2 text-cyhive-900 hover:text-cyhive-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services Section */}
            <div className="px-4 py-2">
              <p className="font-medium text-cyhive-900">Services</p>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <div>
                  <p className="font-medium text-cyhive-700">Internship</p>
                  <div className="ml-4 mt-1 flex flex-col space-y-1">
                    <Link 
                      to="/services/internship/ai" 
                      className="text-sm text-cyhive-900 hover:text-cyhive-500"
                      onClick={() => {
                        setIsMenuOpen(false); // Close the mobile menu
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0); // Ensure scroll works on mobile
                      }}
                    >
                      Artificial Intelligence
                    </Link>
                    <Link 
                      to="/services/internship/datastructures" 
                      className="text-sm text-cyhive-900 hover:text-cyhive-500"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                      }}
                    >
                      Data Structures
                    </Link>
                    <Link 
                      to="/services/internship/python" 
                      className="text-sm text-cyhive-900 hover:text-cyhive-500"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                      }}
                    >
                      Python
                    </Link>
                    <Link 
                      to="/services/internship/networking" 
                      className="text-sm text-cyhive-900 hover:text-cyhive-500"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                      }}
                    >
                      Networking
                    </Link>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium text-cyhive-700">Courses</p>
                  <div className="ml-4 mt-1 flex flex-col space-y-1">
                    <Link 
                      to="/services/webdev/python" 
                      className="text-sm text-cyhive-900 hover:text-cyhive-500"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                      }}
                    >
                      Full Stack Python
                    </Link>
                    <Link 
                      to="/services/webdev/mern" 
                      className="text-sm text-cyhive-900 hover:text-cyhive-500"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                      }}
                    >
                      MERN Stack
                    </Link>
                    <Link 
                      to="/services/webdev/java" 
                      className="text-sm text-cyhive-900 hover:text-cyhive-500"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                      }}
                    >
                      Full Stack Java
                    </Link>
                    <Link 
                      to="/services/frontend" 
                      className="text-sm text-cyhive-900 hover:text-cyhive-500"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                      }}
                    >
                      Front End Development
                    </Link>
                    <Link 
                      to="/services/mobile" 
                      className="text-sm text-cyhive-900 hover:text-cyhive-500"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                      }}
                    >
                      Mobile App Development
                    </Link>
                    <Link 
                      to="/services/graphic" 
                      className="text-sm text-cyhive-900 hover:text-cyhive-500"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                      }}
                    >
                      Graphic Design
                    </Link>
                  </div>
                </div>
                
                <Link 
                  to="/services/frontend" 
                  className="text-sm text-cyhive-900 hover:text-cyhive-500"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                  }}
                >
                  Front End Development
                </Link>
                <Link 
                  to="/services/mobile" 
                  className="text-sm text-cyhive-900 hover:text-cyhive-500"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                  }}
                >
                  Mobile App Development
                </Link>
                <Link 
                  to="/services/graphic" 
                  className="text-sm text-cyhive-900 hover:text-cyhive-500"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                  }}
                >
                  Graphic Design
                </Link>
                <Link 
                  to="/services/vfx" 
                  className="text-sm text-cyhive-900 hover:text-cyhive-500"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                  }}
                >
                  VFX
                </Link>
              </div>
            </div>
            
            <Link 
              to="/verify" 
              className="px-4 py-2 text-cyhive-900 hover:text-cyhive-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Verify
            </Link>
            
            <Link 
              to="/about" 
              className="px-4 py-2 text-cyhive-900 hover:text-cyhive-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            <Link 
              to="/contact" 
              className="px-4 py-2 text-cyhive-900 hover:text-cyhive-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
