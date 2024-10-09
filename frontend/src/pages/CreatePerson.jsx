import { useState } from "react";
import Api from "../components/Api/Api";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function CreatePerson() {

    const { instance } = Api();
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();

    const submitForm = () => {
        // instance.post('/persons', {
        //     name: name,
        //     lastname: lastname,
        //     email: email
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.error(error);
        //     });
        
        instance.get('/persons')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
    }

    const validation = (id) => {
        let div = document.getElementById(`${id}Div`);

        if (!div.classList.contains('was-validated'))
            div.classList.add('was-validated');
    }

    return (
        <div>
            <Nav />
            <section className="container-fluid vh-100 bg-body-tertiary">
                <h1 className="text-center">Create a New Person</h1>
                <form action="" className="container">
                    <div className="mb-3" id="nameDiv">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" onSelect={e => { validation(e.target.id) }} onChange={e => { setName(e.target.value) }} required />
                    </div>
                    <div className="mb-3" id="lastnameDiv">
                        <label for="lastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastname" onSelect={e => { validation(e.target.id) }} onChange={e => { setLastname(e.target.value) }} required />
                    </div>
                    <div className="mb-3" id="emailDiv">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="example@gmail.com" onSelect={e => { validation(e.target.id) }} onChange={e => { setEmail(e.target.value) }} required />
                    </div>
                    <div className="mb-3 text-end">
                        <button type="button" className="btn btn-primary" onClick={submitForm}>Submit</button>
                    </div>
                </form>
            </section>
            <Footer />
        </div>
    )
}

export default CreatePerson;