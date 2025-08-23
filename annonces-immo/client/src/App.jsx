import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AnnonceDetails from './pages/AnnonceDetails';
import PostAnnonce from './pages/PostAnnonce';

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-white shadow flex gap-4">
        <Link to="/" className="text-blue-600 font-semibold">Accueil</Link>
        <Link to="/poster" className="text-blue-600 font-semibold">Poster</Link>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/annonce/:id" element={<AnnonceDetails />} />
          <Route path="/poster" element={<PostAnnonce />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
