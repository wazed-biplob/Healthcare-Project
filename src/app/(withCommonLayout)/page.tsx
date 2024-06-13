import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyChooseUs from "@/components/UI/HomePage/WhyChooseUs/WhyChooseUs";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyChooseUs />
    </>
  );
}
