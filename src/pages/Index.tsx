import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Videos from "@/components/Videos";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Videos />
        <Courses />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
