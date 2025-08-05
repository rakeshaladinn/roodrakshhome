import MainBanner from "@/components/Landingpage/MainBanner";
import StatsSection from "@/components/Landingpage/StatsSection";
import About from "../components/Landingpage/About";
import Vision from "@/components/Landingpage/Vision";
import Cta from "@/components/Landingpage/Cta";
import Whoweare from "@/components/Landingpage/Whoweare";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <StatsSection />
      <About />
      <Vision />
      <Whoweare />
      <Cta />
    </div>
  );
}
