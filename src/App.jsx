import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [pageInView, setPageInView] = useState('About')

  return (
    <div className='w-screen h-screen'>
      <Header pageInViewState={{pageInView, setPageInView}}/>
      <Project pageInView={pageInView}/>
      <Footer/>
    </div>
  );
}

export default App;
