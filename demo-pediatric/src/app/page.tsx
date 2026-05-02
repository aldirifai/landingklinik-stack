import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { WhyPediatric } from "@/components/sections/WhyPediatric";
import { About } from "@/components/sections/About";
import { Methodology } from "@/components/sections/Methodology";
import { Treatments } from "@/components/sections/Treatments";
import { Doctors } from "@/components/sections/Doctors";
import { Articles } from "@/components/sections/Articles";
import { Usps } from "@/components/sections/Usps";
import { Booking } from "@/components/sections/Booking";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyPediatric />
        <About />
        <Methodology />
        <Treatments />
        <Doctors />
        <Articles />
        <Usps />
        <Booking />
        <Testimonials />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
