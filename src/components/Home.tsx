import React from 'react';
import { Activity, Target, Trophy } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Track Your Fitness Journey
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Achieve your fitness goals with our comprehensive tracking tools
          </p>
          <a
            href="/signup"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Get Started Free
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose FitTrack?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Activity className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your workouts, nutrition, and body measurements in one place
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Set Goals</h3>
              <p className="text-gray-600">
                Create personalized fitness goals and track your progress towards them
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Stay Motivated</h3>
              <p className="text-gray-600">
                Earn achievements and celebrate your fitness milestones
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;