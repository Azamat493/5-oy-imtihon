import BlogsSection from "../sections/home/BlogsSection";
import HomeBestSection from "../sections/Home/HomeBestSection";
import ProductGridSection from "../sections/home/ProductGridSection";
import ProductPromoSection from "../sections/home/ProductPromoSection";
import SectionNewProducts from "../sections/Home/SectionNewProducts";
import SectionTechnology from "../sections/Home/SectionTechnology";
import TechHeimSection from "../sections/home/TechHeimSection";
import TopBrandsSection from "../sections/home/TopBrandsSection";

const Home = () => {
  return (
    <>
      <TechHeimSection />
      <SectionTechnology />
      <ProductGridSection />
      <SectionNewProducts />
      <ProductPromoSection />
      <HomeBestSection />
      <TopBrandsSection />
      <BlogsSection />
    </>
  );
};

export default Home;
