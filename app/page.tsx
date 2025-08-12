import MainBanner from "@/components/Landingpage/MainBanner";
import StatsSection from "@/components/Landingpage/StatsSection";
import About from "../components/Landingpage/About";
import Vision from "@/components/Landingpage/Vision";
import Cta from "@/components/Landingpage/Cta";
import Whoweare from "@/components/Landingpage/Whoweare";
import BlogNewsSection from "@/components/Landingpage/Blog";
import Testimonals from "@/components/Landingpage/Testimonals";
import FeaturedProperty from "@/components/Landingpage/FeaturedProperty";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <StatsSection />
      <About />
      <Vision />
      <FeaturedProperty />
      <Whoweare />
      <Cta />
      <Testimonals />

      {/* <BlogNewsSection /> */}
    </div>
  );
}
