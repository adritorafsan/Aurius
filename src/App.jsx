import Action from "./Components/Action"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"


function App() {


  return (
    <>
     <Navbar />
    <div className=" max-w-360 px-30 ">
      <Hero />
      <Action />
    </div>

    </>
  )
}

export default App
