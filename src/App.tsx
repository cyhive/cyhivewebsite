import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorFollow from './components/CursorFollow';
import SplashCursor from './components/SplashCursor';

// Brand violets for the cursor smoke; each stroke picks one so the trail has subtle depth.
const SPLASH_COLORS = ['#8B5CF6', '#7C3AED', '#A78BFA'];
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import { CourseDetail, CourseList, InternshipDetail, InternshipList, ServiceDetail, ServiceList } from './pages/Catalog';
import { courses, internships, services } from './data';
import { useHashRoute } from './hooks/useHashRoute';

export default function App() {
  const route = useHashRoute();

  let page: React.ReactNode = <Home />;
  if (route.name === 'about') page = <About />;
  else if (route.name === 'works') page = <Works />;
  else if (route.name === 'contact') page = <Contact sent={route.sent} />;
  else if (route.name === 'courses') page = <CourseList courses={courses} />;
  else if (route.name === 'course') {
    const course = courses.find(c => c.slug === route.slug);
    page = course ? <CourseDetail course={course} /> : <CourseList courses={courses} />;
  } else if (route.name === 'services') page = <ServiceList services={services} />;
  else if (route.name === 'service') {
    const service = services.find(s => s.slug === route.slug);
    page = service ? <ServiceDetail service={service} /> : <ServiceList services={services} />;
  } else if (route.name === 'internships') page = <InternshipList internships={internships} />;
  else if (route.name === 'internship') {
    const internship = internships.find(i => i.slug === route.slug);
    page = internship ? <InternshipDetail internship={internship} /> : <InternshipList internships={internships} />;
  }

  return (
    <div className="min-h-screen bg-bg font-sans text-white">
      {/* Toned down from the stock settings: thinner, fainter smoke that clears quickly with little swirl. */}
      <SplashCursor
        COLORS={SPLASH_COLORS}
        INTENSITY={0.14}
        CLICK_INTENSITY={4}
        DENSITY_DISSIPATION={4}
        VELOCITY_DISSIPATION={3}
        CURL={1.5}
        SPLAT_RADIUS={0.1}
        SPLAT_FORCE={3500}
        COLOR_UPDATE_SPEED={4}
      />
      <CursorFollow />
      <Navbar />
      <main>{page}</main>
      <Footer />
    </div>
  );
}
