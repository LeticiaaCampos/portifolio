import {useState} from "react";
import {Link} from "react-router-dom";

export default function DropdownButton() {
    const [aparece, setAparece] = useState(false)

    const handleClick = () => {
        const temp = aparece;
        setAparece(!temp);
        console.log(aparece)
    }

    return (
        <>
            <button className='bg-amber-300' onClick={handleClick}>
                Menu
            </button>

            <div className={`${aparece === true ? "block" : "hidden"}`}>
                <Link to="/Aboutme.jsx">Sobre mim</Link>
                <Link to="/Projects.jsx">Projetos</Link>
                <Link to="/Contact.jsx">Contat</Link>
            </div>
        </>
    )
}