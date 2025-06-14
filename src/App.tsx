
import { ToastContainer } from 'react-toastify'
import Portfolio from './Component/Portfolio'
import About from './Component/About'
import Services from './Component/Services'
import ProjectSection from './Component/ProjectSection'
import Skills from './Component/Skills'
import Contact from './Component/Contact'

export const App = () => {
  return (
 <div>
  <Portfolio/>
  <About/>
  <Services/>
  <ProjectSection/>
  <Skills/>
  <Contact/>
  
  <ToastContainer/>
 </div>
  )
}