
function updateUser(req, res) {
    console.log('hej')
    var formUpdate = req.getElementById("updateForm")
    console.log('test 2')
    formUpdate.onsubmit = (event) => {
        event.preventDefault();

        fetch('registerLinestander', {
            method: 'PUT',
            body: new FormData(formUpdate)
        }).then(response => response.json())
            .then(json => console.log(json))
    }
};