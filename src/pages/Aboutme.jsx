import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Container from "../components/Container";

export default function Aboutme() {
    return (
        <>
            <Container>
                <Header />
                <main className="bg-indigo-200">
                    <h1>Sobre mim</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem dignissimos dolores eveniet fuga
                fugiat, nihil possimus repudiandae vero voluptates.</p>
                </main>
                <Footer />
            </Container>
        </>
    )
}