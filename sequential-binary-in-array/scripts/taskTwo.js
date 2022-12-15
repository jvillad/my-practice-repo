"use strict";

let suburbArr = [];
// let arrCodes = [];
const content = document.querySelector("#content");

const saveButton = document.querySelector('#save');
saveButton.addEventListener('click', function storeSuburbInfo() {

    const suburbName = document.querySelector('#name');
    const suburbCode = document.querySelector('#postcode');    
    const suburbNameAndCode = {name: suburbName.value, postcode: suburbCode.value};
    if (suburbArr.length < 4) {
        suburbArr.push(suburbNameAndCode);        
        content.innerHTML += `<p>Suburb name ${suburbNameAndCode.name} with postcode ${suburbNameAndCode.postcode} added</p>`;      
        if (suburbArr.length === 4) {
            
        content.innerHTML += `<p class="alert">All four suburb name and postcode added successfully</p>`;
        }             
    }        
    else {
        alert("Array is full.");
    }    
});

const removeButton = document.querySelector('#remove');

removeButton.addEventListener('click', function removeSuburb(){
    const toRemoveName = document.getElementById('removeByName').value;
    content.innerHTML = '';

    console.log(suburbArr[0].name);
    if (suburbArr.length === 0) {

        content.innerHTML = "Array is empty";
        return;      
    }
    else {

        //Task 2a using a sequential access algorithm.
        //When found return the array position of suburb
        sequentialSearch(toRemoveName, suburbArr);           
        displayUpdatedArray(suburbArr);   

    }    

});

function sequentialSearch(name, suburb) {
    
    for (let index = 0; index < suburb.length; index++) {        
        if (suburb[index].name === name) {
            content.innerHTML = `<p class="alert">Name ${name} found in index ${index} with postcode ${suburb[index].postcode} removed successfully</p>`; 
            suburb.splice(index,1);                                              
            break;     
        }                                                
    }  
}

function displayUpdatedArray(suburb) {

    content.innerHTML += `<p class="newArray">New array after deletion: </p>`;
    for (let index = 0; index < suburbArr.length; index++) {
                
        content.innerHTML += `<p>Suburb name ${suburbArr[index].name} with postcode ${suburbArr[index].postcode} added</p>`;
        
    }  
}