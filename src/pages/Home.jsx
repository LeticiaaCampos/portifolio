import Footer from "../components/Footer";
import Header from "../components/Header";
import Container from "../components/Container";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <Container>
                <Header />
                <main className="bg-indigo-200 p-8">
                    <div>
                        <h1 className="text-2xl font-bold mb-8">Oi</h1>
                        <p className="text-1xl font-bold mb-8">Meu nome é</p>
                        <h2 className="text-2xl font-bold mb-8">Letícia Antonini</h2>
                        <p className="text-1xl font-bold mb-8">e sou uma estudante de programação</p>
                    </div>
                    <Link to="/Aboutme" className="border-solid border-2 border-indigo-600 p-2">Vem me conhecer ^_^</Link>
                </main>
                <Footer />
            </Container>
        </>
    )
}