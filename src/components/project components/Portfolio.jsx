function Portfolio({repos}) {

    const [ metaRepoData, bootRepoData ] = repos

    if(metaRepoData === "" || bootRepoData === ""){
        return <div className="w-full h-full flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-zinc-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <h4>Loading...</h4>
            </div>
    }


    return (
        <section className="flex flex-col gap-10 max-w-4xl mx-auto overflow-y-scroll">
            <section className="flex flex-col gap-5">
                <h2 className="text-2xl">Full Stack</h2>
                <p className="font-mukta">After falling in love with programming during my honours year, I enrolled in the UWA fullstack bootcamp. Here are some of the applications I created both solo and in groups during the course.</p>
                <section className="grid grid-cols-1 auto-rows-max sm:grid-cols-2 gap-10">
                    {bootRepoData.map((repo) => (
                        repo.id ? <RepoSection key={repo.id} repo={repo}/> : <div key={Math.random()}></div>
                    ))}
                </section>
            </section>

            <section className="flex flex-col gap-5">
                <h2 className="text-2xl">Metabolomics</h2>
                <p>During my honours year at <a href="https://www.murdoch.edu.au/research/anpc" className="my-link" target="_blank" rel="noopener noreferrer">ANPC</a> I developed two R packages in colaboration with my supervisor, Torben Kimhofer. One is for normalising (among other things) nuclear magnetic resonance (NMR) spectra in the post-acquisition stage, while the other normalises the spectra during the aqcuistion stage.</p>
                <section className="grid grid-cols-1 auto-rows-max sm:grid-cols-2 gap-10">
                    {metaRepoData.map((repo) => (
                        repo.id ? <RepoSection key={repo.id} repo={repo}/> : <div key={Math.random()}></div>
                    ))}
                </section>
            </section>

        </section>
    )
}

function RepoSection({repo}) {

    const lang = repo.parent ? repo.parent.language : repo.language



    return (
        <article className="flex flex-col rounded-sm bg-zinc-200 w-full" >
            {repo.img !== undefined && <div className="h-56">
                <div style={{backgroundImage: "url(" + repo.img +")"}} className="w-full h-56 bg-cover bg-center bg-no-repeat rounded-t-sm saturate-[50%]"></div>
                <hr />
            </div>}
            <div className="flex flex-col grow gap-5 p-5 w-full">
                <div className="flex justify-between">
                    <h3 className="text-xl">{repo.name}</h3>
                    <img height="24" width="24" className="fill-zinc-300" src={`https://unpkg.com/simple-icons@v6/icons/${lang.toLowerCase()}.svg`} alt="" />
                </div>
                <ul className="flex gap-1 flex-wrap">
                    {repo.topics.map((topic) => (
                        <li className="rounded-sm bg-zinc-100 hover:cursor-default px-2 text-sm font-mukta" key={topic}>{topic}</li>
                    ))}
                </ul>
                <p className="text-md text-zinc-600 grow">{repo.description}</p>
                <div className="flex justify-center gap-5">
                    {repo.isDeployed ? <a className={repo.isDeployed ? "blue-btn flex gap-2 items-center justify-center" : "disabled-btn flex gap-2 items-center justify-center"} href={repo.homepage} target="_blank" rel="noopener noreferrer">
                        <h4>Deployed App</h4>
                        {repo.deployedAt === "Heroku" ? <svg role="img" className="fill-zinc-200 h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Heroku</title><path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"/></svg> : <svg role="img" className="w-5 h-5 fill-zinc-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>}
                    </a> : ""}
                    <a className="git-btn flex gap-2 items-center justify-center" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <h4>Github</h4>
                        <svg role="img" className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                </div>
            </div>
        </article>
    )

}

export default Portfolio