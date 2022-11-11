import './App.css';
import {NavBar} from './components/NavBar'
import {CallToAction} from './components/CallToAction';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className='relative bg-navy'>
      <NavBar />
      <CallToAction/>
      <Experience/>
    </div>
  );
}

export default App;
