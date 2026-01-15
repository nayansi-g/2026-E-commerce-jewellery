"use client"
import Hero from "../components/homePageComp/Hero"
import CategoryGrid from "../components/homePageComp/CategoryGrid"
import Banner from "../components/homePageComp/Banner"
import ProductGrid from "../components/homePageComp/ProductGrid"
import InstagramGrid from "../components/homePageComp/InstagramGrid"
import GoldJewellerySection from "../components/homePageComp/GoldJewellerySection"
import PromiseSlider from "../components/homePageComp/PromiseSlider"
import AboutStoreSection from "../components/homePageComp/AboutStoreSection"
import ShopByGender from "../components/homePageComp/ShopByGender"
import CollectionsSection from "../components/homePageComp/CollectionSection"


export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-gray-900">
     
      <Banner />
      <CategoryGrid />
      <ProductGrid/>
      <Hero />
      <CollectionsSection />
      <GoldJewellerySection />
      <ShopByGender />
      <PromiseSlider />
      <InstagramGrid />
      <AboutStoreSection />
      
    </main>
  )
}





















