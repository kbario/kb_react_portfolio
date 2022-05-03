import { useState, useEffect } from "react"

function Navigation({pageInViewState}) {
    // state
    const [burgerOpen, setBurgerOpen] = useState(false)
    // useEffect to close menu on window resize
    useEffect(() => {
        window.addEventListener("resize", () => {setBurgerOpen(false)});
    }, []);
    
    // props
    const {pageInView, setPageInView} = pageInViewState

    // looping array
    const linkArray = ["About", "Portfolio", "Contact", "Resume"]

    return (
        <div className="sm:w-1/2 sm:min-w-[320px] sm:max-w-[600px]">
            <nav className={burgerOpen ? `nav translate-x-0 opacity-100` : `nav`}>
                {linkArray.map((link, index) => {
                    return <button key={index} className={pageInView===link.toLowerCase() ? "nav-item nav-active" : "nav-item"} onClick={() => {setPageInView(`${link}`); setBurgerOpen(false)}}>{link}</button>
                })}
            </nav>
            <div onClick={() => setBurgerOpen(!burgerOpen)} className="sm:hidden flex flex-col gap-1.5 hover:cursor-pointer">
                <div className={burgerOpen ? `burger-bits burger-hide` : `burger-bits`}></div>
                <div id="cross" className="relative">
                    <div className={burgerOpen ? `burger-bits absolute rotate-45` : `burger-bits absolute`}></div>
                    <div className={burgerOpen ? `burger-bits -rotate-45` : `burger-bits`}></div>
                </div>
                <div className={burgerOpen ? `burger-bits burger-hide` : `burger-bits`}></div>
            </div>
        </div>
    )
}

export default Navigation