function About() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl">Hi, I'm Kyle.</h1>
            <p>I'm a junior fullstack developer currently completing a coding bootcamp at UWA.</p>
            <p>I grew up on a farm near <a href="https://mountbarkerwa.com.au/" target="_blank" className="text-sky-700" rel="noreferrer">Mount Barker, WA</a> and moved to Perth to study science at The University of Notre Dame Australia in Fremantle.</p>
            <p>I then moved on to do honours at Murdoch University, where I was expose to programming for the first time. My field of focus was NMR-based metabolomics, specifically automating NMR spectrometers to produce more comparable results.</p>
            <p>I ultimately created two R Packages for automating, and manipulating and analysing NMR spectrometers and spectra respectively, and I graduated with first-class honours.</p>
            <p>After finishing honours, I wanted to keep building my programming skills, and so enrolled in the UWA bootcamp. At the end of the bootcamp, I will have skills working with a grand range of technologies:</p>
            <ul className="px-5 space-y-1">
                <li className="list-disc">Front-End Frameworks like <strong>React</strong></li>
                <li className="list-disc">Client and Server-side APIs</li>
                <li className="list-disc">SQL and NoSQL databases like <strong>MySQL</strong> and <strong>MongoDB</strong></li>
                <li className="list-disc">The <strong>Node.js</strong> and <strong>npm</strong> ecosystem including create <strong>Express</strong> Rest APIs</li>
            </ul>
        </div>
    )
}

export default About