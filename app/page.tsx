import Header from "@/components/Header";
import LoginSection from "@/components/LoginSection";
import Carousel from "@/components/Carousel";
import Mission from "@/sections/Mission";
import MeetTheTeam from "@/sections/MeetTheTeam";
import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--accent)]">
      <Header />

      {/* Hero */}
      <section className="flex flex-col lg:flex-row items-center justify-between h-[calc(100vh_-_64px)] px-4 lg:px-30">
        {/* Left Column  */}
        <div className="w-full lg:w-2/5 mb-8 lg:mb-0 lg:pr-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Ready to adopt a pet?
          </h2>
          <p className="text-lg mb-6">
            Let's get started. Search adoptable pets from shelters, rescues, and
            individuals.
          </p>
          <LoginSection />
        </div>
        {/* Right Column */}
        <div className="w-full lg:w-3/5 flex items-center justify-center px-12">
          <div className="relative w-full max-w-2xl h-[500px]">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Mission Statement*/}
      <section>
        <Mission />
        <AboutUs />
        <MeetTheTeam />
        <Contact />
        <FAQ />
      </section>
    </main>
  );
}
