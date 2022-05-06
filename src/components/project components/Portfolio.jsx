function Portfolio({repos}) {

    const [ metaRepoData, bootRepoData ] = repos
    
    if(metaRepoData === "" || bootRepoData === ""){
        return <div>Loading...</div>
    }


    return (
        <section className="flex flex-col gap-5 max-w-4xl mx-auto overflow-y-scroll">
            <h1 className="text-3xl">My Work</h1>
            <section className="flex flex-col gap-2">
                <h2 className="text-2xl">Full Stack</h2>
                <p>After falling in love with programming during my honours year, I enrolled in the UWA fullstack bootcamp. Here are some of the applications I created both solo and in groups during the course.</p>
                {bootRepoData.map((repo) => (
                    repo.id ? <RepoSection key={repo.id} repo={repo}/> : <div key={Math.random()}></div>
                ))}
            </section>

            <section className="flex flex-col gap-3">
                <h2 className="text-2xl">Metabolomics</h2>
                <p>During my honours year at <a href="https://www.murdoch.edu.au/research/anpc" className="my-link" target="_blank" rel="noopener noreferrer">ANPC</a> I developed two R packages in colaboration with my supervisor, Torben Kimhofer. One is for normalising (among other things) nuclear magnetic resonance (NMR) spectra in the post-acquisition stage, while the other normalises the spectra during the aqcuistion stage.</p>
                {metaRepoData.map((repo) => (
                    repo.id ? <RepoSection key={repo.id} repo={repo}/> : <div key={Math.random()}></div>
                ))}
            </section>

        </section>
    )
}

function RepoSection({repo}) {

    const lang = repo.parent ? repo.parent.language : repo.language

    return (
        <article className="relative flex flex-col gap-3 border rounded-md p-3 z-1" >
            <div className="flex justify-between">
                <h3 className="text-xl">{repo.name}</h3>
                <img height="20" width="20" className="fill-slate-800" src={`https://unpkg.com/simple-icons@v6/icons/${lang.toLowerCase()}.svg`} alt="" />
            </div>
            <ul className="flex gap-1 flex-wrap">
                {repo.topics.map((topic) => (
                    <li className="rounded bg-sky-200 hover:bg-sky-300 hover:cursor-default px-2 text-sm" key={topic}>{topic}</li>
                ))}
            </ul>
            {/* <div className="absolute top-20 right-0 w-full h-[310px]"></div>
            <embed title={repo.name} src={repo.homepage} height="300" className="w-full border" alt="" ></embed> */}
            <p className="text-md text-zinc-600">{repo.description}</p>
            <div className="flex gap-1">
                <a className="dep-btn" href={repo.homepage} target="_blank" rel="noopener noreferrer">Deployed App</a>
                <a className="git-btn" href={repo.html_url} target="_blank" rel="noopener noreferrer">Github Repo</a>
            </div>
        </article>
    )

}

export default Portfolio