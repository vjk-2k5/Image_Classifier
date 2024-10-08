import React from 'react';
import './App.css';
import { Button } from './components/Button'; // Adjust the import path if necessary

const App = () => {
  return (
    <div className="app">
      <Button>Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline" size="sm">Small Outline Button</Button>
      <Button variant="outline" size="lg">Large Outline Button</Button>
    </div>
  );
};

export default App;

