import React from 'react';
import './App.css';
import { Button } from './components/Button'; // Adjust the import path if necessary
import { MainLayout } from "./layouts/ImgClasMainLayout";
import { MainContent } from "./components/ImgClasMainContent";
const Index = () => {
  return (
    <MainLayout>
      <MainContent />
    </MainLayout>
  );
};

export default Index;



