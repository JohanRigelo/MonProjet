import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white px-6 py-4 flex gap-4">
        <Link to="/" className="hover:underline">Accueil</Link>
        <Link to="/annonces" className="hover:underline">Annonces</Link>
        <Link to="/login" className="hover:underline ml-auto">Connexion</Link>
      </nav>

      <main className="flex-1 p-6">
        <Outlet />
      </main>

      <footer className="bg-gray-100 text-center text-sm py-2 text-gray-500">
        © {new Date().getFullYear()} Mon App Immo
      </footer>
    </div>
  );
}
