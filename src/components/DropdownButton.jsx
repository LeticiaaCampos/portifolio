import {useState} from "react";

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
                <a href="/sobre">Sobre mim</a>
                <a href="/projetos">Projetos</a>
                <a href="/contato">Contat</a>
            </div>
        </>
    )
}