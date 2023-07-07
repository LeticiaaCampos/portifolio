import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Container from "../components/Container";

export default function Contact() {
    return (
        <>
            <Container>
                <Header />
                <main className="flex flex-col items-center justify-center  bg-indigo-200 p-8">
                        <h1 className="text-4xl font-bold mb-8">Meus Contatos</h1>

                        <div className="grid gap-4">
                            <div className="bg-white rounded shadow-md p-4">
                                <h2 className="text-2xl font-bold mb-2">LinkedIn</h2>
                                <p className="mb-4">Leticia Antonini</p>
                                <p className="mb-4">Conecte-se comigo no LinkedIn</p>
                                <a href="https://www.linkedin.com/in/leticia-antonini-b909561b1/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Acessar</a>
                            </div>

                            <div className="bg-white rounded shadow-md p-4">
                                <h2 className="text-2xl font-bold mb-2">Email</h2>
                                <p className="mb-4">22100130@aluno.cotemig.com.br</p>
                                <p className="mb-4">Envie-me um e-mail</p>
                                <a href="mailto:22100130@aluno.cotemig.com.br" className="text-blue-600 hover:underline">Acessar</a>
                            </div>

                            <div className="bg-white rounded shadow-md p-4">
                                <h2 className="text-2xl font-bold mb-2">Telefone</h2>
                                <p className="mb-4">(31)99655-3515</p>
                                <p className="mb-4">Entre em contato por telefone</p>
                                <a href="tel:+5531996553515" className="text-blue-600 hover:underline">Acessar</a>
                            </div>
                        </div>
                </main>
                <Footer />
            </Container>
        </>
    )
}
