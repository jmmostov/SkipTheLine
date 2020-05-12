// This is the button with the id "deliveredButtin" from the lineStander.ejs
const formElem4 = document.getElementsByName('deliveredButton');

// Creates a function, that uses the method PUT, to update things in the database.
// We fetch the API /update/LSdelivery and sends headers as JSON.
// Afterwords we use JSON.stringify to send the elements as a body to the server (NodeJS).
function delivered(){
    for(let i = 0; i < formElem4.length; i++) {
        formElem4[i].onclick = (event) => {
            event.preventDefault();

            fetch('/update/LSdelivery', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "_id": document.getElementsByClassName("orderIdAfterPickUp")[i].innerText,
                })
            })
                .then(json => {
                    location.reload();
                })
        };
    }
}
delivered();