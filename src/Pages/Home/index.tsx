import {
  FavouritesSection,
  HomeCtaSection,
  MenuSection,
  ShowcaseBanner,
  StorySection,
  VisitSection,
  WhyUsSection,
} from "../../components";

const Home = () => {
  return (
    <div className="flex w-full h-auto flex-col items-center justify-center">
      <ShowcaseBanner />
      <FavouritesSection />
      <MenuSection />
      <WhyUsSection />
      <StorySection />
      <VisitSection />
      <HomeCtaSection />
    </div>
  );
};

export default Home;
