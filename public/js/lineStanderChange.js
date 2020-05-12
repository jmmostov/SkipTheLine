//We get the element from the button with the id "pickUpButton" in ejs lineStander and save it in a constant.
const formElem3 = document.getElementsByName('pickUpButton');


//In the function we preventDefault when the button is clicked.
//Then we fetch the API call /update/LS, and use the PUT method. We use innerText, because
function updateLS(){
    for(let i = 0; i < formElem3.length; i++){
        formElem3[i].onclick = (event) => {
            event.preventDefault();
            fetch('/update/LS/' + document.getElementsByClassName("orderName")[i].innerText, {
                method: 'PUT'
                })
                .then(json => {
                    location.reload();
                })
        }
    }
}
updateLS();