import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
export default function Card() {
    return (
        <section className="card w-72 h-72 bg-white rounded-lg shadow-md p-5 flex flex-col justify-between">
            <h3 className="text-primary">Título do projeto</h3>
            <p className="text-gray-500">Texto descritivo do projeto.</p>
            <div className="card_footer w-full flex items-center justify-between">
                <div className="card_icones flex gap-2 text-red-500 text-xl">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <button className="botao w-10 h-10 rounded-lg bg-primary text-white text-xl flex items-center justify-center cursor-pointer hover:bg-red-500 transition-all duration-500">
                    <BsArrowRight />
                </button>
            </div>
        </section>
    )
}