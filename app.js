
var selectedRow = null;

function onFormSubmit(e){
    e.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewData(formData);
    }
    else{
        updateData(formData);
    }
    resetForm();
}

//=============================== Function to retrieve data ================================

function readFormData(){
    var formData = {};

    formData["projectCode"] = document.getElementById("projectCode").value;
    formData["projectName"] = document.getElementById("projectName").value;
    formData["language"] = document.getElementById("language").value;
    formData["period"] = document.getElementById("period").value;

    return formData;
}

//=================== Function to insert data into table =========================

function insertNewData(data){
    var table = document.getElementById("project_list").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.projectCode;
    
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.projectName;
    
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.language;
    
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.period;

    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

//=================== Edit the data =======================//

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('projectCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('projectName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('language').value = selectedRow.cells[2].innerHTML;
    document.getElementById('period').value = selectedRow.cells[3].innerHTML;
}

function updateData(formData){
    selectedRow.cells[0].innerHTML = formData.projectCode;
    selectedRow.cells[1].innerHTML = formData.projectName;
    selectedRow.cells[2].innerHTML = formData.language;
    selectedRow.cells[3].innerHTML = formData.period;
}

//========================== Delete the data ===========================//
function onDelete(td){
    if(confirm("Do you want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById('project_list').deleteRow(row.rowIndex);
    }
    resetForm();
}

//========================== Reset the data ===========================//
function resetForm(){
    document.getElementById('projectCode').value='';
    document.getElementById('projectName').value='';
    document.getElementById('language').value='';
    document.getElementById('period').value='';
}