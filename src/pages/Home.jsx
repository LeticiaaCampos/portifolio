import Footer from "../components/Footer";
import Header from "../components/Header";
import Container from "../components/Container";
import {Link} from "react-router-dom";
import portfolioweb from "../assets/portfolioweb.svg"

export default function Home() {
    return (
        <>
            <Container>
                <Header />
                <main className="bg-indigo-200 p-8">
                    <div className="flex items-center p-16">
                        <div className="text-left">
                            <h1 className="text-3xl font-bold mb-6">Oi</h1>
                            <p className="text-xl font-bold mb-6">Meu nome é</p>
                            <h2 className="text-4xl font-bold mb-6">Letícia Antonini</h2>
                            <p className="text-lg font-bold mb-6">Sou uma estudante de programação</p>
                            <Link to="/Aboutme" className="inline-block bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-800">
                                Vem me conhecer ^_^
                            </Link>
                        </div>
                        <img src={portfolioweb} className="ml-auto" />
                    </div>
                </main>
                <Footer />
            </Container>
        </>
    )
}