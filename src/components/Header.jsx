import Navigation from "./Navigation"

function Header(props) {
    return (
        <header className="flex justify-between items-center w-full h-20 bg-slate-800 px-6">
            <h1 className="text-4xl text-slate-200">kBario</h1>
            <Navigation pageInViewState={props.pageInViewState}/>
        </header>
    )
}

export default Header