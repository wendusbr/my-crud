import { useState } from "react";
import Api from "../components/Api/Api";

function Delete() {

    const { instance } = Api();

    const [id, setId] = useState();

    const submitForm = () => {
        instance.delete(`/persons/${id}`)
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

        if (!form.checkValidity())
            e.stopPropagation();
        else
            submit();

        form.classList.add('was-validated')
    }

    return (
        <div>
            <h1 className="text-center">Delete a Person</h1>
            <form action="" id="myForm" className="container needs-validation" onSubmit={e => { validation(e, submitForm) }} noValidate>
                <div className="mb-3">
                    <label for="id" className="form-label">Id</label>
                    <input type="number" className="form-control" id="id" onChange={e => { setId(e.target.value); }} required />
                </div>
                <div className="mb-3 text-end">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Delete;