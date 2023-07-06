export default function Container({ children }){
    return (
        <main className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
            {children}
        </main>
    )
}