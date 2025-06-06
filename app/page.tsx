// app/page.tsx
import Header from '@/components/Header';
import LoginSection from '@/components/LoginSection';
import Carousel from '@/components/Carousel';
import Mission from '@/sections/Mission';
import AboutUs from '@/sections/AboutUs';
import MeetTheTeam from '@/sections/MeetTheTeam';
import Contact from '@/sections/Contact';
import FAQ from '@/sections/FAQ';

export default function HomePage() {
  return (
    <main>
      <Header />

      {/* Hero area: two columns on large, stacked on mobile */}
      <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)]">
        {/* Left: LoginSection */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
          <LoginSection />
        </div>

        {/* Right: Carousel */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100">
          <Carousel />
        </div>
      </div>

      {/* Below‐the‐fold sections */}
      <div className="space-y-32 py-16">
        <Mission />
        <AboutUs />
        <MeetTheTeam />
        <Contact />
        <FAQ />
      </div>
    </main>
  );
}
