import Footer from "../components/Footer";
import Header from "../components/Header";
import Container from "../components/Container";
export default function Page404() {
    return (
        <>
           <Container>
               <Header />
               <div className="flex flex-col items-center justify-center bg-indigo-200 ">
                   <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                   <p className="text-xl text-gray-600">Oops! Página não encontrada.</p>
                   <p className="text-xl text-gray-600 mb-8">Por favor, reveja a URL.</p>
                   <p>(„• ֊ •„)</p>
               </div>
               <Footer />
           </Container>
        </>
    )
}