import Api from "./Api/Api";

function Read() {
    const { instance } = Api();

    instance.get('/persons')
        .then(function (response) {
            console.log(response);

            const persons = response.data.persons;
            const tableBody = document.getElementById('tableBody');

            tableBody.innerHTML = '';

            persons.forEach(person => {
                tableBody.innerHTML += `
                    <tr>
                        <td>${person.id}</td>
                        <td>${person.name}</td>
                        <td>${person.lastname}</td>
                        <td>${person.email}</td>
                    </tr>
                `
            });
        })
        .catch(function (error) {
            console.error(error);
        });

    return (
        <div>
            <h1 className="text-center">Read Persons</h1>
            <div class="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Read;