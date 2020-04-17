const formElem2 = document.getElementById('deleteUser');


function deleteUser(){

    formElem2.onsubmit = (event) =>{
        event.preventDefault();

        fetch('/delete/' + document.getElementById("deleteId").value, {
            method: 'DELETE',
            })

            .then(json => {
                location.reload();
            })
    };
}
deleteUser();
