import React from 'react';
import './App.css';
import { Button } from './components/Button'; // Adjust the import path if necessary
import { ImgClasMainLayout } from "./layouts/ImgClasMainLayout";
import { MainContent } from "./components/ImgClasMainContent";
import { LoginPage } from  "./layouts/LoginPageLayout";
const Index = () => {
  return (<>
      <LoginPage />
    </>
  );
};


export default Index;



