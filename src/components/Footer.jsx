import Heart from "../assets/heart.svg"
export default  function Footer() {
    return <footer className="bg-indigo-400 flex justify-center gap-2">
        <p>feito por mim</p>
        <img src={Heart}/>
    </footer>;
}
