// import React from "react"
import Header from './componentes/Header';
import AboutMe from './componentes/AboutMe'
import Contact from './componentes/Contact'
import Footer from './componentes/Footer'
import Home from './componentes/Home'
import Projects from './componentes/Projects'

function App() {
 

  return (
    <>
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
        
    </div>
    </>
  )
}

export default App
