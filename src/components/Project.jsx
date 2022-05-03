import About from "./project components/About"
import Contact from "./project components/Contact"
import Portfolio from "./project components/Portfolio"
import Resume from "./project components/Resume"

function Project({pageInView}) {

    function RenderProject({pageInView}) {
        switch (pageInView) {
            case 'About':
                return <About />
            case 'Portfolio':
                return <Portfolio />
            case 'Contact':
                return <Contact />
            default:
                return <Resume />
        }
    }

    return (
        <main className="h-leftover w-full p-5 max-w-4xl mx-auto">
            <RenderProject pageInView={pageInView}/>
        </main>
    )
}

export default Project