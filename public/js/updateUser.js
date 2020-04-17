const formElem = document.getElementById('updateForm');


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
            })
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

/*function updateUser() {
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