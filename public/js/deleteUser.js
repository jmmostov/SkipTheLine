const formElem5 = document.getElementById('deleteUser');


function deleteUser(){

    formElem5.onsubmit = (event) =>{
        event.preventDefault();

        fetch('/delete/' + document.getElementById("deleteUserId").value, {
            method: 'DELETE',
        })

            .then(json => {
                location.reload();
            })
    };
}
deleteUser();
