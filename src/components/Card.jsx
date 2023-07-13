import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Card({ name, description, html_url }) {
    return (
        <section className="card w-72 h-72 bg-indigo-200 rounded-lg shadow-md p-5 flex flex-col justify-between">
            <h3 className="text-primary">{name}</h3>
            <p className="text-gray-500">{description}</p>
            <div className="w-full flex items-center justify-between">
                <div className="flex gap-2 text-indigo-500 text-xl">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <Link to={html_url} className="botao w-10 h-10 rounded-lg backdrop-blur-md bg-white/30 text-white text-xl flex items-center justify-center cursor-pointer hover:bg-indigo-500 transition-all duration-500">
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    )
}