import About from "./project components/About"
import Contact from "./project components/Contact"
import Portfolio from "./project components/Portfolio"
import Resume from "./project components/Resume"

function Project({pageInView, repos, screenwidthProp}) {

    function RenderProject({pageInView, repos}) {
        switch (pageInView) {
            case 'About':
                return <About />
            case 'Portfolio':
                return <Portfolio repos={repos} />
            case 'Contact':
                return <Contact />
            default:
                return <Resume screenwidthProp={screenwidthProp}/>
        }
    }

    return (
        <main className="pt-24 h-screen w-full p-5 overflow-y-auto">
            <RenderProject pageInView={pageInView} repos={repos}/>
        </main>
    )
}

export default Project