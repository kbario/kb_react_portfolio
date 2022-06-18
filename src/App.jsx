import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

const bootRepos = ["getCultured", 'techBlog', "buildAPage", "jatePwaTextEditor", "ractWeather"]
const bootImgs = [
  "https://repository-images.githubusercontent.com/489247996/cb2d91d2-0b7d-412f-a25c-ae1a46524da6",
  "https://repository-images.githubusercontent.com/470821465/15ba0dde-ef5f-4509-b0b3-75a8dba0ab12",
  "https://repository-images.githubusercontent.com/489192653/63d6977f-357d-41d4-a783-6bef683f0510",
]
const metaRepos = ['concentr8r', 'NMRalter8r'];
const backRepos = ['ecomBackend', 'mongooseSocialNetworkApi'];

function App() {
  const [pageInView, setPageInView] = useState('About')

  const [metaRepoData, setMetaRepoData] = useState("")
  const [bootRepoData, setBootRepoData] = useState("")
  const [backRepoData, setBackRepoData] = useState("")

  const [burgerOpen, setBurgerOpen] = useState(false)
  // useEffect to close menu on window resize
  useEffect(() => {
      window.addEventListener("resize", () => {setBurgerOpen(false)});
  }, []);
 
  useEffect(() => {
    document.title = `kbario - ${pageInView}`
  },[pageInView])

  useEffect(() => {

    const getRepoData = async(repoArray) => {
      const data = await Promise.all(repoArray.map(async (repoName, idx) => {
        const resp = await fetch(`https://api.github.com/repos/kbario/${repoName}`);
        const data = await resp.json()
        const deployLink = data?.parent ? data.parent.deployments_url : data.deployments_url

        const depResp = await fetch(deployLink);
        const depData = await depResp.json()

        data.img = repoArray===bootRepos? bootImgs[idx]: undefined
        data.isDeployed = depData.length === 0 ? false : true
        if (data.isDeployed === true) {
          data.deployedAt = depData[0]?.description === "" ? depData[0].environment : depData[0].description
        }

        const langResp = await fetch(data.languages_url);
        data.lang = await langResp.json()

        return data
      }))

      const request = new XMLHttpRequest();
      request.open('GET', "https://github.com/kbario/getCultured", true);
      request.send(null);
      request.onreadystatechange = function () {
          if (request.readyState === 4 && request.status === 200) {
              const type = request.getResponseHeader('Content-Type');
              if (type.indexOf("text") !== 1) {
                  return request.responseText;
              }
          }
      }
      
      if(repoArray === metaRepos){
        setMetaRepoData(data)
      }
      if(repoArray === bootRepos){
        setBootRepoData(data)
      }
      if(repoArray === backRepos){
        setBackRepoData(data)
      }
    }
    getRepoData(bootRepos)
    getRepoData(metaRepos)
    getRepoData(backRepos)
  },[])



  return (
    <div className='w-screen h-screen overflow-hidden'>
      <Header pageInViewState={{pageInView, setPageInView}} burgerOpenProp={{burgerOpen, setBurgerOpen}} />
      {/* <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div> */}
      <Project pageInView={pageInView} repos={[ metaRepoData, bootRepoData, backRepoData ]} />
      <Footer />
    </div>
  );
}

export default App;
