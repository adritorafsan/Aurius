import Action from "./Components/Action"
import Benefits from "./Components/Benefits"
import Blogs from "./Components/Blogs"
import Hero from "./Components/Hero"
import HowWorks from "./Components/HowWorks"
import Metrics from "./Components/Metrics"
import Navbar from "./Components/Navbar"
import Products from "./Components/Products"
import Testimonial from "./Components/Testimonial"


function App() {


  return (
    <>
     <Navbar />
    <div className=" max-w-360 px-30 mx-auto">
      <Hero />
      <Action />
      <Metrics />
      <Benefits />
      <Products />
      <HowWorks />
      <Blogs />
      <Testimonial />
    </div>

    </>
  )
}

export default App
