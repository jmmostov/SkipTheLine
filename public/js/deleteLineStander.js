const formElem2 = document.getElementById('deleteLineStander');


function deleteLineStander(){

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
deleteLineStander();