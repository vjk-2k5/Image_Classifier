import React from 'react';
import './App.css';
import { Button } from './components/Button'; // Adjust the import path if necessary
import { MainLayout } from "./layouts/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
      <p>This is your main content area. You can add your page content here.</p>
    </MainLayout>
  );
};

export default App;

