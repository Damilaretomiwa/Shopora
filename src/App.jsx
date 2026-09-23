import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import PromoBanner from "./components/PromoBanner";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductCollections from "./components/ProductCollections";
import WhyShopora from "./components/WhyShopora";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <PromoBanner />
      <FeaturedProducts />
      <ProductCollections />
      <WhyShopora />
       <Footer />
      
    </>
  );
}

export default App;