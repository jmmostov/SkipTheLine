const formElem = document.getElementById('updateForm');

//creates a function, that uses the method PUT, to update things in the database. Afterwords we uses JSON.stringify to send the elements to the client.
//(Ved jeg ikke helt om vi gør....)
function updateUser(){


    formElem.onsubmit = (event) =>{
        event.preventDefault();

        fetch('/update', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
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



/*formElem.addEventListener('submit', _=> {
    const options = {
        method: 'PUT',
        body: new FormData(formElem)
    }
    return fetch('/update', options)
        .then(res => res.json())
        .then(res => console.log(res))
})


 */

/*function updateLineStander() {
    console.log('hej')
    const formUpdate = document.getElementById("updateForm")




    console.log('test 2')
    formUpdate.onsubmit = (event) => {
        event.preventDefault();

        fetch('/registerLinestander', {
            method: 'PUT',
            body: new FormData(formUpdate)
        }).then(res => res.json())
            .then(json => console.log(json))
    }
};

 */