import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { About } from "@/components/sections/About";
import { Showcase } from "@/components/sections/Showcase";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Estimator } from "@/components/sections/Estimator";
import { Doctors } from "@/components/sections/Doctors";
import { Treatments } from "@/components/sections/Treatments";
import { Usps } from "@/components/sections/Usps";
import { Testimonials } from "@/components/sections/Testimonials";
import { Booking } from "@/components/sections/Booking";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <About />
        <Showcase />
        <Gallery />
        <Process />
        <Estimator />
        <Doctors />
        <Treatments />
        <Usps />
        <Testimonials />
        <Booking />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
