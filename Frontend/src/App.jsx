import AboutUs from "./components/AboutUs"
import DesignProcess from "./components/DesignProcess"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection"
import ServiceCards from "./components/ServiceCards"
import ServicesSection from "./components/ServicesSection"
import TestimonialCarousel from "./components/TestimonialCarousel"
import WhatWeDo from "./components/WhatWeDo"


function App() {
 

  return (
    <>

<Navbar/>
<Hero/>
<WhatWeDo/>
<AboutUs/>
<ServicesSection/>
<ServiceCards/>
<DesignProcess/>
<TestimonialCarousel/>
<ProjectsSection/>

    </>
  )
}

export default App
