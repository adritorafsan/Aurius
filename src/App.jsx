import Action from "./Components/Action"
import Benefits from "./Components/Benefits"
import Blogs from "./Components/Blogs"
import Faq from "./Components/Faq"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import HowWorks from "./Components/HowWorks"
import Metrics from "./Components/Metrics"
import Navbar from "./Components/Navbar"
import Pricing from "./Components/Pricing"
import Products from "./Components/Products"
import Testimonial from "./Components/Testimonial"


function App() {


  return (
    <>
     <Navbar />
    <div className=" max-w-360 px-10 md:px-30 mx-auto">
      <Hero />
      <Action />
      <Benefits />
      <Products />
      <Metrics />
      <HowWorks />
      <Pricing />
      <Blogs />
      <Testimonial />
      <Faq />
    </div>

    <div className=" bg-black">
      <Footer />
    </div>

    </>
  )
}

export default App
