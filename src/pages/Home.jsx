import BlogsSection from "../sections/Home/BlogsSection";
import HomeBestSection from "../sections/Home/HomeBestSection";
import ProductGridSection from "../sections/Home/ProductGridSection";
import ProductPromoSection from "../sections/home/ProductPromoSection";
import SectionNewProducts from "../sections/Home/SectionNewProducts";
import SectionTechnology from "../sections/Home/SectionTechnology";
import TechHeimSection from "../sections/Home/TechHeimSection";
import TopBrandsSection from "../sections/Home/TopBrandsSection";

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
