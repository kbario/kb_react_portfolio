import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [pageInView, setPageInView] = useState('about')


  return (
    <main className='w-screen h-screen bg-zinc-600'>
      <Header pageInViewState={{pageInView, setPageInView}}/>
      <Project pageInViewState={pageInView}/>
      <Footer/>
    </main>
  );
}

export default App;
