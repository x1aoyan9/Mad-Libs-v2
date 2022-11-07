import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Bands, Giraffes, Judges, Magics, Movies, Vacations, Wonders, BandDisplay, GiraffeDisplay, JudgeDisplay, MagicDisplay, MovieDisplay, VacationDisplay, WonderDisplay, BandForm, GiraffeForm, JudgeForm, MagicForm, MovieForm, VacationForm, WonderForm, BandUpdate, GiraffeUpdate, JudgeUpdate, MagicUpdate, MovieUpdate, VacationUpdate, WonderUpdate } from './components/index';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AnimatedHeader from './components/Header/AnimatedHeader';
import ButtonRandom from './components/ButtonRandom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="relative overflow-hidden bg-white">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span><AnimatedHeader /></span>
            </h1>
          </div>
          <div>
          <ButtonRandom/>
          </div>
        </div>
          
        
      </div>
        
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Hero />} default/>
          
          {/* Band Routes */}
          <Route path="/band" element={<Bands />} >
            <Route path="/band/new" element={<BandForm />} />
            <Route path="/band/:id" element={<BandDisplay/>} />
            <Route path="/band/edit/:id" element={<BandUpdate />} />
          </Route>

          {/* Giraffe Routes */}
          <Route path="/giraffe" element={<Giraffes />}>
            <Route path="/giraffe/new" element={<GiraffeForm />} />
            <Route path="/giraffe/:id" element={<GiraffeDisplay/>} />
            <Route path="/giraffe/edit/:id" element={<GiraffeUpdate />} />
          </Route>

          {/* Judge Routes */}
          <Route path="/judge" element={<Judges />}>
            <Route path="/judge/new" element={<JudgeForm />} />
            <Route path="/judge/:id" element={<JudgeDisplay/>} />
            <Route path="/judge/edit/:id" element={<JudgeUpdate />} />
          </Route>

          {/* Magic Routes */}
          <Route path="/magic" element={<Magics />}>
            <Route path="/magic/new" element={<MagicForm />} />
            <Route path="/magic/:id" element={<MagicDisplay/>} />
            <Route path="/magic/edit/:id" element={<MagicUpdate />} />
          </Route>

          {/* Movie Routes */}
          <Route path="/movie" element={<Movies />}>
            <Route path="/movie/new" element={<MovieForm />} />
            <Route path="/movie/:id" element={<MovieDisplay/>} />
            <Route path="/movie/edit/:id" element={<MovieUpdate />} />
          </Route>

          {/* Vacation Routes */}
          <Route path="/vacation" element={<Vacations />}>
            <Route path="/vacation/new" element={<VacationForm />} />
            <Route path="/vacation/:id" element={<VacationDisplay/>} />
            <Route path="/vacation/edit/:id" element={<VacationUpdate />} />
          </Route>

          {/* Wonder Routes */}
          <Route path="/wonder" element={<Wonders />}>
            <Route path="/wonder/new" element={<WonderForm />} />
            <Route path="/wonder/:id" element={<WonderDisplay/>} />
            <Route path="/wonder/edit/:id" element={<WonderUpdate />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;