import Navigation from "./Navigation"

// absolute top-0 

function Header(props) {
    return (
        <header className="flex justify-between items-center w-full h-16 px-6 overflow-x-hidden bg-zinc-100"> 
            <h1 className="text-3xl text-zinc-800">kBario</h1>
            <Navigation burgerOpenProp={props.burgerOpenProp} pageInViewState={props.pageInViewState}/>
        </header>
    )
}

export default Header