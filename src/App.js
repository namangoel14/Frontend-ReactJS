import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { Header } from './components/Header';

// restaurant-card component inside the body for our Food App

// Top level Component for our food App
const LayoutApp = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<LayoutApp />);
