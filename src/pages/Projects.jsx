import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Container from "../components/Container";
import Card from "../components/Card"
import {useEffect, useState} from "react";

export default function Projects() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/LeticiaaCampos/repos')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])


    return (
        <>
            <Container>
                <Header/>
                <main className="bg-indigo-200 flex flex-col items-center justify-between">
                    <h1 className="text-3xl font-bold mb-4">Projetos</h1>
                    {
                        repositories.length > 0 ? (
                            <section className='flex-1 flex flex-wrap items-center justify-center gap-2'>
                                {
                                    repositories.map((repo) => (
                                        <Card
                                            key={repo.id}
                                            name={repo.name}
                                            description={repo.description}
                                            html_url={repo.html_url}
                                        />
                                    ))
                                }
                            </section>
                        ) : (
                            <section className='flex-1 flex flex-wrap items-center justify-center gap-2'>
                                <p>Carregando repositórios...</p>
                            </section>
                        )
                    }
                </main>
                <Footer/>
            </Container>
        </>
    )
}