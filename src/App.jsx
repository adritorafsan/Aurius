import Action from "./Components/Action"
import Benefits from "./Components/Benefits"
import Hero from "./Components/Hero"
import Metrics from "./Components/Metrics"
import Navbar from "./Components/Navbar"


function App() {


  return (
    <>
     <Navbar />
    <div className=" max-w-360 px-30 mx-auto">
      <Hero />
      <Action />
      <Metrics />
      <Benefits />
    </div>

    </>
  )
}

export default App
