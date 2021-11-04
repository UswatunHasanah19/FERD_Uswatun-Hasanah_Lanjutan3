import React from "react";
import About from "./components/About";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

function App() {
  return (
    
    <div class="container-fluid p-0">
      <Sidebar />

      <About />

      <Experience />
      
      <Education />
      
      <Skills />
      
      <Interests />

      <Awards />

    </div>
  )
}
export default App;
