import { useState } from "react";
import Api from "../components/Api/Api";

function Create() {

    const { instance } = Api();
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();

    const submitForm = () => {
        instance.post('/persons', {
            name: name,
            lastname: lastname,
            email: email
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    /**
     * VALIDAÇÃO COM BOOTSTRAP
     * 
     * Adicione a classe "needs-validation", noValidate na tag <form> e onSubmit para essa função
     * 
     * Parâmetros: e=event, submit=função que submete o formulário
     */

    const validation = (e, submit) => {
        e.preventDefault();

        const form = e.target;

        if(!form.checkValidity())
            e.stopPropagation();
        else
            submit();

        form.classList.add('was-validated')
    }

    return (
        <div>
            <h1 className="text-center">Create a New Person</h1>
            <form action="" id="myForm" className="container needs-validation" onSubmit={e=>{validation(e, submitForm)}} noValidate>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={e => { setName(e.target.value) }} required />
                </div>
                <div className="mb-3">
                    <label for="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" onChange={e => { setLastname(e.target.value) }} required />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="example@gmail.com" onChange={e => { setEmail(e.target.value) }} required />
                </div>
                <div className="mb-3 text-end">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Create;