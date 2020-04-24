//This constant gets the element from the delete form in the ejs file "adminProducts".
const formElem6 = document.getElementById('deleteProducts');

//we onsubmit the form and prevent default. Afterwards we fetch the API call: delete/product/ and the value in the input field.
//It uses the method Delete og then reloads the page with location.reload.
function deleteProduct(){

    formElem6.onsubmit = (event) =>{
        event.preventDefault();

        fetch('/delete/product/' + document.getElementById("deleteProduct").value, {
            method: 'DELETE',
        })

            .then(json => {
                location.reload();
            })
    };
}
deleteProduct();
