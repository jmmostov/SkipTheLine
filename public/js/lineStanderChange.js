//We get the element from the button with the id "pickUpButton" in ejs lineStander and save it in a constant.
const formElem3 = document.getElementById('pickUpButton');

//In the function we preventDefault when the button is clicked.
//Then we fetch the API call /update/LS, and use the PUT method. The we stringify the id to send it to the client.
function updateLS(){

    formElem3.onclick = (event) =>{
        event.preventDefault();

        fetch('/update/LS', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "_id":document.getElementById("orderId").innerText
            })
        })
            .then(json => {
                location.reload();
            })
    };
}
updateLS();





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