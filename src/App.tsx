import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

function App() {
  // Simple routing based on URL path
  const path = window.location.pathname;

  const renderContent = () => {
    switch (path) {
      case '/login':
        return <Login />;
      case '/signup':
        return <SignUp />;
      case '/dashboard':
        return <Dashboard />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {renderContent()}
    </div>
  );
}

export default App;