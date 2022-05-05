import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [pageInView, setPageInView] = useState('About')
  const [metaRepos, setMetaRepos] = useState(['concentr8r', 'NMRalter8r'])
  const [bootRepos, setBootRepos] = useState(['techBlog', 'ractWeather'])

  useEffect(() => {
    document.title = `kbario - ${pageInView}`
  },[pageInView])

  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Header pageInViewState={{pageInView, setPageInView}} />
      <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <Project pageInView={pageInView} repos={[metaRepos, bootRepos]} />
      <Footer />
    </div>
  );
}

export default App;
