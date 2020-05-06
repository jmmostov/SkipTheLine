const formElem4 = document.getElementsByName('deliveredButton');


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