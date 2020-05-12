//Gets the element from the form with the id deleteUser in the ejs "admin".
const formElem5 = document.getElementById('deleteUser');

//Does the same as deleteProduct.js
function deleteUser(){

    formElem5.onsubmit = (event) =>{
        event.preventDefault();

        fetch('/delete/user/' + document.getElementById("deleteUserId").value, {
            method: 'DELETE',
        })

            .then(json => {
                location.reload();
            })
    };
}
deleteUser();
