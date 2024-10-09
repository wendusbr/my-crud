import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Home(){
    return(
        <div>
            <Nav />
            <section className="container-fluid vh-100 bg-body-tertiary">
                Home page
            </section>
            <Footer />
        </div>
    )
}

export default Home;