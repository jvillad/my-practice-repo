"use strict";

let arrNames = [];
let arrCodes = [];
const content = document.querySelector("#content");

const saveButton = document.querySelector('#save');
saveButton.addEventListener('click', function storeSuburbInfo() {

    const suburbName = document.getElementById('name').value;
    const suburbCode = document.getElementById('postcode').value;    

    if (arrNames.length < 4) {
        arrNames.push(suburbName);
        arrCodes.push(suburbCode);  
        content.innerHTML += `<p>Suburb name ${suburbName} with postcode ${suburbCode} added</p>`;      
        if (arrNames.length === 4) {
            
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
    if (arrNames.length === 0) {

        content.innerHTML = "Array is empty";      
    }
    else {
        for (let index = 0; index < arrNames.length; index++) {        
            if (arrNames[index] === toRemoveName) {
                arrNames.splice(index,1);
                
                content.innerHTML = `<p class="alert">${toRemoveName} with postcode ${arrCodes[index]} removed successfully</p>`; 

                arrCodes.splice(index,1);              
                break;     
            }            
        }
    }
    content.innerHTML += `<p class="newArray">New array after deletion: </p>`;
    for (let index = 0; index < arrNames.length; index++) {
   
        content.innerHTML += `<p>Suburb name ${arrNames[index]} with postcode ${arrCodes[index]} added</p>`;
        
    }  

});


