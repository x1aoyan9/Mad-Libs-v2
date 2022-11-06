import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Bands, BandDisplay, FBand1, FBand2} from './components/index';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Hero />} default/>
          
          {/* Band Routes */}
          <Route path="/band" element={<Bands />}>
            <Route path="/band/new" element={<FBand1 />} />
            <Route path="/band/:id" element={<BandDisplay/>} />
            <Route path="/band/edit/:id" element={<FBand2 />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;