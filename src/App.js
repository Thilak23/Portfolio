import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
function App() {
  return (
    <div className='white'>
      <Header/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
export default App;
