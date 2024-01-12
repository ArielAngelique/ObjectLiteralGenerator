const table = document.getElementById("theTable");
const typeDropdown = document.getElementById("type-dropdown");
const outputSection = document.getElementById("JSON");
const outputJSON = {};
const outputBox = document.getElementById("JSON");


// Function to add a new row to the bottom for custom inputs not inherently required
 function newItem(){
    var newType = typeDropdown.value;
    if(newType == "placeholder"){
        alert("Please Select a type");
        return;
    } 

    let row = table.insertRow(-1);
    const key = row.insertCell(0);
    const value = row.insertCell(1);
    value.innerHTML = `<input id="val${table.rows.length}" type="text" placeholder="Enter New Value" required></input>`;
 
    if (typeDropdown.value == "security-q"){
        key.innerHTML = `<label for="sec-q">SQ: </label><input id="lab${table.rows.length}" name="sq" type="text" placeholder="Enter Security Question" required>`; 
    } else {
        key.innerHTML = `<input id="lab${table.rows.length}" name="custom" type="text" placeholder="Enter New Label" required>`;
    }
}

// Function to generate the JSON output using above table inputs
function generateJSON(){


    for (i = 0; i < table.rows.length; i++){
        var row = i + 1;
        var valId = (`val${row}`);
        var labId = (`lab${row}`);
        
        //Sets value
        const rowValue = document.getElementById(`${valId}`);
        const valueOutput = rowValue.value;

        const rowKey = document.getElementById(`${labId}`);
        var keyOutput;
        
        //Sets key
        if(rowKey.hasAttribute("name")){
            if(rowKey.name == "sq" == true){
                keyOutput = `SQ: ${rowKey.value};`
            } else {
            keyOutput = rowKey.value;
            }
        } else {keyOutput = rowKey.innerText;}
        
    

        outputJSON[keyOutput] = valueOutput;
        outputSection.innerText = JSON.stringify(outputJSON);

    } 
} 

//Button to make the output Editable
function toggleEdit(){
    const hiddenText = document.querySelector('.editing-footer');
    const editButton = document.getElementById('edit');

    if(outputBox.contentEditable == "true"){
        outputBox.contentEditable = false;
        hiddenText.style.visibility = 'hidden';
        editButton.innerText = "Edit JSON Output";
        
    } else {
        outputBox.contentEditable = true;
        hiddenText.style.visibility = 'visible';
        editButton.innerText = "Stop Editing";
    }
}
    
    


