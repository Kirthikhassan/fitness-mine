import React, { useState } from 'react';
import { Activity, Calendar, TrendingUp, Award, Plus, X, Dumbbell, Timer, BarChart } from 'lucide-react';

interface Workout {
  type: string;
  duration: string;
  intensity: string;
  notes: string;
  timestamp: Date;
}

const Dashboard = () => {
  const [showWorkoutForm, setShowWorkoutForm] = useState(false);
  const [workoutData, setWorkoutData] = useState({
    type: '',
    duration: '',
    intensity: 'medium',
    notes: ''
  });
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const handleWorkoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newWorkout = {
      ...workoutData,
      timestamp: new Date()
    };
    setWorkouts([newWorkout, ...workouts]);
    setShowWorkoutForm(false);
    setWorkoutData({ type: '', duration: '', intensity: 'medium', notes: '' });
  };

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  };

  const getWorkoutIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'cardio':
        return <Activity className="h-5 w-5 text-indigo-600" />;
      case 'strength':
        return <Dumbbell className="h-5 w-5 text-indigo-600" />;
      default:
        return <Activity className="h-5 w-5 text-indigo-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Dashboard</h1>
          <button
            onClick={() => setShowWorkoutForm(true)}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Log Workout
          </button>
        </div>

        {/* Workout Form Modal */}
        {showWorkoutForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Log New Workout</h2>
                <button onClick={() => setShowWorkoutForm(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={handleWorkoutSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Workout Type</label>
                    <select
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      value={workoutData.type}
                      onChange={(e) => setWorkoutData({...workoutData, type: e.target.value})}
                      required
                    >
                      <option value="">Select type</option>
                      <option value="cardio">Cardio</option>
                      <option value="strength">Strength Training</option>
                      <option value="yoga">Yoga</option>
                      <option value="hiit">HIIT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      value={workoutData.duration}
                      onChange={(e) => setWorkoutData({...workoutData, duration: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Intensity</label>
                    <select
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      value={workoutData.intensity}
                      onChange={(e) => setWorkoutData({...workoutData, intensity: e.target.value})}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Notes</label>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      value={workoutData.notes}
                      onChange={(e) => setWorkoutData({...workoutData, notes: e.target.value})}
                      rows={3}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                  >
                    Save Workout
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        {/* Fitness Goals */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Your Fitness Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Dumbbell className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="font-semibold">Strength Goal</h3>
              </div>
              <p className="text-sm text-gray-600">Bench Press: 185 lbs</p>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Timer className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="font-semibold">Cardio Goal</h3>
              </div>
              <p className="text-sm text-gray-600">5K Run: 25 minutes</p>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <BarChart className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="font-semibold">Weekly Goal</h3>
              </div>
              <p className="text-sm text-gray-600">{workouts.length} workouts completed</p>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-indigo-600 rounded-full" style={{ width: `${(workouts.length / 5) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-indigo-600" />
              <span className="ml-3 text-lg font-semibold">Today's Activity</span>
            </div>
            <p className="mt-4 text-2xl font-bold">2,500 steps</p>
            <p className="text-sm text-gray-500">Goal: 10,000 steps</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-indigo-600" />
              <span className="ml-3 text-lg font-semibold">This Week</span>
            </div>
            <p className="mt-4 text-2xl font-bold">{workouts.length} workouts</p>
            <p className="text-sm text-gray-500">Goal: 5 workouts</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
              <span className="ml-3 text-lg font-semibold">Monthly Progress</span>
            </div>
            <p className="mt-4 text-2xl font-bold">{workouts.length} workouts</p>
            <p className="text-sm text-gray-500">Keep it up!</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-indigo-600" />
              <span className="ml-3 text-lg font-semibold">Achievements</span>
            </div>
            <p className="mt-4 text-2xl font-bold">{Math.min(workouts.length, 5)} earned</p>
            <p className="text-sm text-gray-500">2 in progress</p>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Workout History</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {workouts.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No workouts logged yet. Start by adding your first workout!</p>
              ) : (
                workouts.map((workout, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-indigo-100 rounded-full p-2">
                        {getWorkoutIcon(workout.type)}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{workout.type}</p>
                        <p className="text-sm text-gray-500">{workout.duration} minutes</p>
                        <p className="text-xs text-gray-400">Intensity: {workout.intensity} • {workout.notes}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{getTimeAgo(workout.timestamp)}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;