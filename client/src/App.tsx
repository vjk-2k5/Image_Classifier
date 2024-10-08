import React from 'react';
import './App.css';
import { Button } from './components/Button'; // Adjust the import path if necessary
import { MainLayout } from "./layouts/MainLayout";
import { MainContent } from "./components/MainContent";
const App = () => {
  return (
    <MainLayout>
      <MainContent />
    </MainLayout>
  );
};

export default App;

