const formElem4 = document.getElementById('deliveredButton');

function delivered(){

    formElem4.onclick = (event) =>{
        event.preventDefault();

        fetch('/update/LSdelivery', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "_id":document.getElementById("orderIdAfterPickUp").innerText,
            })
        })
            .then(json => {
                location.reload();
            })
    };
}
delivered();





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