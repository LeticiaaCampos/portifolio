import DropdownButton from "./DropdownButton.jsx";
import {Link} from "react-router-dom";


export  default function Header (){
    return <header className=" bg-indigo-400 flex justify-between p-7 ">
        <Link to="/">Letícia Antonini ^-^</Link>

        <DropdownButton/>
    </header>;
}
