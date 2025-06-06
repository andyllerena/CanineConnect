// components/Header.tsx
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
        <h1 className="text-2xl font-semibold">Canine Connect</h1>
        <NavLinks />
      </div>
    </header>
  );
}
