const formElement = document.getElementById('changeBillingAddress');

function updateAddress(){

    formElement.onsubmit = (event) =>{
        event.preventDefault();

        fetch('/update/address', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "addressId":document.getElementById("addressId").innerText,
                "streetName":document.getElementById("streetName").value,
                "streetNr":document.getElementById("streetNr").value,
                "zipCode":document.getElementById("zipCode").value,
                "city":document.getElementById("city").value,
                "country":document.getElementById("country").value
            })
        })
            .then(json => {
                window.location.href = '/order'
            })

    };
}
updateAddress();





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