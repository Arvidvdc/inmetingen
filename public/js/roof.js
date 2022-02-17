// Check all checkboxes - page NEW
function changeCheckboxes(e) {
    e.preventDefault(); // default submit routine bypass

    let collection = document.getElementsByTagName("*");
    let supportButton = document.getElementById("supportButton");

    for (let i = 0; i < collection.length; i++) {
        if(collection[i].type == "checkbox") {
            let changeCheckbox = document.getElementById(collection[i].name);
            supportButton.innerText == "ALLES SELECTEREN" ? changeCheckbox.checked = true : changeCheckbox.checked = false
        }
    }

    supportButton.innerText == "ALLES SELECTEREN" ? supportButton.innerText="ALLES DESELECTEREN" : supportButton.innerText="ALLES SELECTEREN"
}

// Show all color data - page COLOR
function roofData(roofs, roofID) {
    // Coverting data-string to object
    let obj = JSON.parse(roofs);

    obj.forEach(element => {
        if(element._id == roofID) {
            // Define element on page
            let roofData = document.getElementById("roofData");
            // removing old childs
            while (roofData.firstChild) {
                roofData.firstChild.remove()
            }
            // Creating element CENTER
            let elementCenter = document.createElement("div");
            elementCenter.classList.add("center");

            // Creating element GALLERY
            let elementGallery = document.createElement("div");
            elementGallery.classList.add("gallery");
            elementGallery.innerHTML = element.dakplaat.toUpperCase() + " - " + element.dakplaatomschrijving.toUpperCase() + "<hr> Van toepassing op:".toUpperCase();

            // Creating element ROW
            let elementRow = document.createElement("div");
            elementRow.classList.add("row");

            // Adding database records to elements
            if(element.designline) {
                let designline = document.createElement("div");
                designline.classList.add("col-6");
                designline.innerHTML = "Veranda Designline";
                elementRow.appendChild(designline);
            }
            if(element.ecoline) {
                let ecoline = document.createElement("div");
                ecoline.classList.add("col-6");
                ecoline.innerHTML = "Veranda Ecoline";
                elementRow.appendChild(ecoline);
            }
            if(element.luxline) {
                let luxline = document.createElement("div");
                luxline.classList.add("col-6");
                luxline.innerHTML = "Veranda Luxline";
                elementRow.appendChild(luxline);
            }
            if(element.topline) {
                let topline = document.createElement("div");
                topline.classList.add("col-6");
                topline.innerHTML = "Veranda Topline";
                elementRow.appendChild(topline);
            }
            if(element.trendline) {
                let trendline = document.createElement("div");
                trendline.classList.add("col-6");
                trendline.innerHTML = "Veranda Trendline";
                elementRow.appendChild(trendline);
            }
            if(element.ultraline) {
                let ultraline = document.createElement("div");
                ultraline.classList.add("col-6");
                ultraline.innerHTML = "Veranda Ultraline";
                elementRow.appendChild(ultraline);
            }

            // Generating EDIT and DESTROY buttons
            let elementSpan = document.createElement("span");
            elementSpan.classList.add("subtext");
            let elementForm = document.createElement("form");
            elementForm.action = "/maintenance/dak/" + element._id + "/destroy?_method=DELETE";
            elementForm.method = "POST";
            let elementEdit = document.createElement("a");
            elementEdit.setAttribute("style", "color: #ddba3f; text-decoration: none;")
            elementEdit.setAttribute("href", "/maintenance/dak/" + element._id + "/edit");
            elementEdit.appendChild(document.createTextNode("BEWERKEN | "));
            let elementSubmit = document.createElement("button");
            elementSubmit.classList.add("but-link");
            elementSubmit.setAttribute("type", "submit");
            elementSubmit.setAttribute("onclick", "return confirm('Weet je zeker dat je daktype " + element.dakplaat + " wil verwijderen?');");
            elementSubmit.appendChild(document.createTextNode("VERWIJDEREN"));
            elementForm.appendChild(elementEdit);
            elementForm.appendChild(elementSubmit);
            elementSpan.appendChild(elementForm);

            // Combine elements
            elementGallery.appendChild(elementRow);
            elementCenter.appendChild(elementGallery);
            elementCenter.appendChild(elementSpan);
            roofData.appendChild(elementCenter);
        }
    });


    
    
}