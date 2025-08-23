import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Accueil</h1>
      <nav>
        <ul className="flex gap-4 mt-4">
          <li><Link to="/annonces">Annonces</Link></li>
          <li><Link to="/annonce/123">Annonce 123</Link></li>
        </ul>
      </nav>
    </div>
  );
}
