import React from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">FitTrack</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="/" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Home</a>
              <a href="/dashboard" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Dashboard</a>
              <a href="/workouts" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Workouts</a>
              <a href="/login" className="bg-indigo-700 px-4 py-2 rounded-md">Login</a>
              <a href="/signup" className="bg-white text-indigo-600 px-4 py-2 rounded-md">Sign Up</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">Home</a>
              <a href="/dashboard" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">Dashboard</a>
              <a href="/workouts" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">Workouts</a>
              <a href="/login" className="block bg-indigo-700 px-3 py-2 rounded-md">Login</a>
              <a href="/signup" className="block bg-white text-indigo-600 px-3 py-2 rounded-md">Sign Up</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;