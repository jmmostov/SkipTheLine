//This is the form with the id "updateForm" from the admin.ejs
const formElem = document.getElementById('updateForm');

// creates a function, that uses the method PUT, to update things in the database.
// Afterwords we use JSON.stringify to send the elements as a body to the server (NodeJS).
function updateUser(){


    formElem.onsubmit = (event) =>{
        event.preventDefault();
        //We fetch the API call /update and use the PUT method. We also need to change the headers to JSON.
        fetch('/update', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },//In the body we stringify all the values from the input fields from admin.ejs.
            body: JSON.stringify({
                "id":document.getElementById("id").value,
                "username":document.getElementById("updateUsername").value,
                "fullName":document.getElementById("updateName").value,
                "email":document.getElementById("updateEmail").value,
                "phoneNumber":document.getElementById("updateNumber").value
            })
        })//location.reload is used so that the page is reloaded as soon as we click the button to update the lineStander. 
            .then(json => {
                location.reload();
            })
    };
}
updateUser();