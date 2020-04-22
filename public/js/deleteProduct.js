const formElem6 = document.getElementById('deleteProducts');


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
