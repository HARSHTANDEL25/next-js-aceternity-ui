import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import TestiMonialsCards from "@/components/TestiMonialsCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.03]"> 
<HeroSection/>
<FeatureCourses/>
<WhyChooseUs/>
<TestiMonialsCards/>
<UpcomingWebinar/>
<Instructors/>
<Footer/>
   </main>  
  );

}
