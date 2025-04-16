import "./App.css"
function Main(){
    return(
        <div>
<Header/>
<Nav/>
<Footer/>
        </div>
    )
}

export default Main;

 const Header=()=>{
    return(
        <div className="header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"className="logo"alt="react image"/>
            <ul className="items">
                <li>About</li>
                <li>Pricing</li>
                <li>Contacts</li>
            </ul>
        </div>
    )
}

const Nav=()=>{
    return(
        <div>
            <h1>Iam excited to learn react</h1>
            <ol className="items1">
                <li>AAAAAAAAAAAAAAAAAAAAA</li>
                <li>BBBBBBBBBBBBBBBBBBBBB</li>
                <li>CCCCCCCCCCCCCCCCCCCCCCCCCCC</li>
            </ol>
        </div>
    )
}

const Footer=()=>{
    return(
        <div>
            <small>Iam Footer</small>
            </div>
    )
}