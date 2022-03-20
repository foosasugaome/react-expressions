import { Link } from "react-router-dom";

export default function Header() {
    return(
        <>
        <div className="flex-container">        
        <Link to='/'><h1>Expresssions and Idioms</h1></Link>
        </div>        
        </>
    )
}