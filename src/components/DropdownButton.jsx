import {useState} from "react";
import {Link} from "react-router-dom";
import List from "../assets/list.svg"

export default function DropdownButton() {
    const [aparece, setAparece] = useState(false)

    const handleClick = () => {
        const temp = aparece;
        setAparece(!temp);
        console.log(aparece)
    }

    return (
        <div className="flex items-center  gap-4">
           
            <div className={`${aparece === true ? "flex" : "hidden"} gap-4 `}>
                <Link to="/Aboutme">Sobre mim</Link>
                <Link to="/Projects">Projetos</Link>
                <Link to="/Contact">Contato</Link>
            </div>

            <button className="self-end" onClick={handleClick}>
                <img src={List}/>
            </button>
        </div>
    )
}