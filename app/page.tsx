// import Header from "./(routes)/components/header";
// import Hero from "./(routes)/components/hero";

import BrowseTheRange from "./components/browse";

import FuniroFurniture from "./components/furniture";
import Hero from "./components/hero";
import InspirationSection from "./components/inspiration";

import Products from "./components/products";



export default function Home() {
  return (
    <div>
    
    <Hero/>
    <BrowseTheRange/>
    <Products/>
    <InspirationSection/>
    <FuniroFurniture/>
    
    </div>
  )
}
