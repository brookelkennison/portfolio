import './App.css';
import {NavBar} from './components/NavBar'
import {CallToAction} from './components/CallToAction';

function App() {
  return (
    <div className='relative bg-navy'>
      <NavBar />
      <CallToAction/>
    </div>
  );
}

export default App;
