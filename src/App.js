import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Bands, Giraffes, Judges, Magics, Movies, Vacations, Wonders, BandDisplay, GiraffeDisplay, JudgeDisplay, MagicDisplay, MovieDisplay, VacationDisplay, WonderDisplay, FBand1, FGiraffe1, FJudge1, FMagic1, FMovie1, FVacation1, FWonder1, FBand2, FGiraffe2, FJudge2, FMagic2, FMovie2, FVacation2, FWonder2 } from './components/index';
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

          {/* Giraffe Routes */}
          <Route path="/giraffe" element={<Giraffes />}>
            <Route path="/giraffe/new" element={<FGiraffe1 />} />
            <Route path="/giraffe/:id" element={<GiraffeDisplay/>} />
            <Route path="/giraffe/edit/:id" element={<FGiraffe2 />} />
          </Route>

          {/* Judge Routes */}
          <Route path="/judge" element={<Judges />}>
            <Route path="/judge/new" element={<FJudge1 />} />
            <Route path="/judge/:id" element={<JudgeDisplay/>} />
            <Route path="/judge/edit/:id" element={<FJudge2 />} />
          </Route>

          {/* Magic Routes */}
          <Route path="/magic" element={<Magics />}>
            <Route path="/magic/new" element={<FMagic1 />} />
            <Route path="/magic/:id" element={<MagicDisplay/>} />
            <Route path="/magic/edit/:id" element={<FMagic2 />} />
          </Route>

          {/* Movie Routes */}
          <Route path="/movie" element={<Movies />}>
            <Route path="/movie/new" element={<FMovie1 />} />
            <Route path="/movie/:id" element={<MovieDisplay/>} />
            <Route path="/movie/edit/:id" element={<FMovie2 />} />
          </Route>

          {/* Vacation Routes */}
          <Route path="/vacation" element={<Vacations />}>
            <Route path="/vacation/new" element={<FVacation1 />} />
            <Route path="/vacation/:id" element={<VacationDisplay/>} />
            <Route path="/vacation/edit/:id" element={<FVacation2 />} />
          </Route>

          {/* Wonder Routes */}
          <Route path="/wonder" element={<Wonders />}>
            <Route path="/wonder/new" element={<FWonder1 />} />
            <Route path="/wonder/:id" element={<WonderDisplay/>} />
            <Route path="/wonder/edit/:id" element={<FWonder2 />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;