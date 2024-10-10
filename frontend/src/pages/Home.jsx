import { useState } from "react";

import Create from "../components/Create";
import Read from "../components/Read";
import Update from "../components/Update";
import Delete from "../components/Delete";

function Home() {

    const [section, setSection] = useState("Hello, CRUD!");

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" onClick={()=>{setSection("Hello, CRUD!")}}>CRUD</a>
                    <div class="vr"></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item m-2">
                                <button class="btn btn-success" onClick={() => {setSection(<Create />)}}>CREATE</button>
                            </li>
                            <li className="nav-item m-2">
                                <button class="btn btn-primary" onClick={() => {setSection(<Read />)}}>READ</button>
                            </li>
                            <li className="nav-item m-2">
                                <button class="btn btn-warning" onClick={() => {setSection(<Update />)}}>UPDATE</button>
                            </li>
                            <li className="nav-item m-2">
                                <button class="btn btn-danger" onClick={() => {setSection(<Delete />)}}>DELETE</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="container-fluid bg-body-tertiary">
                {section}
            </section>

            <footer className="p-4">
                <p className="text-center">Copyright &copy; Wendell Bernardo 2024</p>
            </footer>
        </div>
    )
}

export default Home;