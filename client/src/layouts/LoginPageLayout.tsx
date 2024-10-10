import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/Tabs';
import { Button } from '../components/Button';

export const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTabChange = (tab: 'login' | 'signup') => {
    setActiveTab(tab);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    // Perform your login logic here (e.g., authentication)

    // If login is successful, navigate to the dashboard
    navigate('/dashboard'); // Adjust the path to your dashboard route
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    // Perform your signup logic here (e.g., API call)

    // Navigate to the dashboard or another page if needed
    navigate('/dashboard'); // Adjust as necessary
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <Tabs defaultValue={activeTab}>
          <TabsList className="flex justify-center mb-4">
            <TabsTrigger
              value="login"
              className={`w-full p-2 ${activeTab === 'login' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              onClick={() => handleTabChange('login')}
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className={`w-full p-2 ${activeTab === 'signup' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              onClick={() => handleTabChange('signup')}
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="p-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Login</h2>
            <form onSubmit={handleLogin}> {/* Add onSubmit handler */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md shadow hover:bg-blue-700 transition-colors">
                Login
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="p-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Sign Up</h2>
            <form onSubmit={handleSignup}> {/* Add onSubmit handler */}
              <div className="mb-4">
                <label htmlFor="signup-name" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="signup-name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="signup-email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="signup-email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="signup-password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="signup-password"
                  placeholder="Create a password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md shadow hover:bg-blue-700 transition-colors">
                Sign Up
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
