import './App.css';
import LandingPage from './stores/pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import MobilePage from '../src/stores/pages/MobilePage.jsx';
import WatchPage from './stores/pages/WatchPage.jsx';
import FridgePage from '../src/stores/pages/FridgePage.jsx';
import ComputerPage from '../src/stores/pages/ComputerPage.jsx';
import MenPage from '../src/stores/pages/MenPage.jsx';
import WomanPage from '../src/stores/pages/WomanPage.jsx';
import FurniturePage from './stores/pages/FurniturePage.jsx';
import KitchenPage from './stores/pages/KitchenPage.jsx';
import SpeakerPage from './stores/pages/SpeakerPage.jsx';
import BooksPage from './stores/pages/BooksPage.jsx';
import TvPage from './stores/pages/TvPage.jsx';
import AcPage from './stores/pages/AcPage.jsx';
import Signup from './stores/components/Signup.jsx';
import MobileSingles from './stores/singles/MobileSingles.jsx';
import AcSingles from './stores/singles/AcSingles.jsx'
import WatchSingles from './stores/singles/WatchSingles.jsx'
import KitchenSingles from './stores/singles/KitchenSingles.jsx'
import TvSingles from './stores/singles/TvSingles.jsx'
import MenSingles from './stores/singles/MenSingles.jsx'
import WomanSingles from './stores/singles/WomanSingles.jsx'
import FurnitureSingles from './stores/singles/FurnitureSingles.jsx'
import FridgeSingles from './stores/singles/FridgeSingles.jsx'
import SpeakerSingles from './stores/singles/SpeakerSingles.jsx'
import ComputersSingles from './stores/singles/ComputersSingles.jsx';
import BooksSingles from './stores/singles/BooksSingles.jsx';
import UserCart from './stores/UserCart.jsx';




function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/mobiles' element={<MobilePage/>}></Route>
      <Route path='/watch' element={<WatchPage/>}></Route>
      <Route path='/fridge' element={<FridgePage/>}></Route>
      <Route path='/computers' element={<ComputerPage/>}></Route>
      <Route path='/men' element={<MenPage/>}></Route>
      <Route path='/woman' element={<WomanPage/>}></Route>
      <Route path='/furniture' element={<FurniturePage/>}></Route>
      <Route path='/kitchen' element={<KitchenPage/>}></Route>
      <Route path='/ac' element={<AcPage/>}></Route>
      <Route path='/tv' element={<TvPage/>}></Route>
      <Route path='/books' element={<BooksPage/>}></Route>
      <Route path='/speaker' element={<SpeakerPage/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/mobiles/:id' element={<MobileSingles/>}></Route>
      <Route path='/ac/:id' element={<AcSingles/>}></Route>
      <Route path='/men/:id' element={<MenSingles/>}></Route>
      <Route path='/woman/:id' element={<WomanSingles/>}></Route>
      <Route path='/watch/:id' element={<WatchSingles/>}></Route>
      <Route path='/computers/:id' element={<ComputersSingles/>}></Route>
      <Route path='/fridge/:id' element={<FridgeSingles/>}></Route>
      <Route path='/furniture/:id' element={<FurnitureSingles/>}></Route>
      <Route path='/kitchen/:id' element={<KitchenSingles/>}></Route>
      <Route path='/tv/:id' element={<TvSingles/>}></Route>
      <Route path='/speaker/:id' element={<SpeakerSingles/>}></Route>
      <Route path='/books/:id' element={<BooksSingles/>}></Route>
      <Route path='/cart' element={<UserCart/>}></Route>
      


     
      </Routes>
    </div>
  );
}

export default App;
