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
function Data(products, productID) {
    // Coverting data-string to object
    let obj = JSON.parse(products);

    obj.forEach(element => {
        if(element._id == productID) {
            // Define element on page
            let Data = document.getElementById("Data");
            // removing old childs
            while (Data.firstChild) {
                Data.firstChild.remove()
            }
            // Creating element CENTER
            let elementCenter = document.createElement("div");
            elementCenter.classList.add("center");

            // Creating element GALLERY
            let elementGallery = document.createElement("div");
            elementGallery.classList.add("gallery");
            elementGallery.innerHTML = element.product.toUpperCase() + "<hr> Behorende bij categorie: ".toUpperCase() + element.categorie;

            // Creating element ROW
            let elementRow = document.createElement("div");
            elementRow.classList.add("row");

            // Generating EDIT and DESTROY buttons
            let elementSpan = document.createElement("span");
            elementSpan.classList.add("subtext");
            let elementForm = document.createElement("form");
            elementForm.action = "/maintenance/product/" + element._id + "/destroy?_method=DELETE";
            elementForm.method = "POST";
            let elementEdit = document.createElement("a");
            elementEdit.setAttribute("style", "color: #ddba3f; text-decoration: none;")
            elementEdit.setAttribute("href", "/maintenance/product/" + element._id + "/edit");
            elementEdit.appendChild(document.createTextNode("BEWERKEN | "));
            let elementSubmit = document.createElement("button");
            elementSubmit.classList.add("but-link");
            elementSubmit.setAttribute("type", "submit");
            elementSubmit.setAttribute("onclick", "return confirm('Weet je zeker dat je product " + element.product + " wil verwijderen?');");
            elementSubmit.appendChild(document.createTextNode("VERWIJDEREN"));
            elementForm.appendChild(elementEdit);
            elementForm.appendChild(elementSubmit);
            elementSpan.appendChild(elementForm);

            // Combine elements
            elementGallery.appendChild(elementRow);
            elementCenter.appendChild(elementGallery);
            elementCenter.appendChild(elementSpan);
            Data.appendChild(elementCenter);
        }
    });
}

function showVeranda() {
    document.getElementById("panelVeranda").style.display = "block";
    document.getElementById("panelVeranda").style.marginTop = "-10px";
    document.getElementById("panelGSW").style.display = "none";
    document.getElementById("panelZonwering").style.display = "none";
    document.getElementById("panelOverig").style.display = "none";
    document.getElementById("Data").innerHTML = "";
}

function showGSW() {
    document.getElementById("panelVeranda").style.display = "none";
    document.getElementById("panelGSW").style.display = "block";
    document.getElementById("panelGSW").style.marginTop = "-10px";
    document.getElementById("panelZonwering").style.display = "none";
    document.getElementById("panelOverig").style.display = "none";
    document.getElementById("Data").innerHTML = "";
}

function showZonwering() {
    document.getElementById("panelVeranda").style.display = "none";
    document.getElementById("panelGSW").style.display = "none";
    document.getElementById("panelZonwering").style.display = "block";
    document.getElementById("panelZonwering").style.marginTop = "-10px";
    document.getElementById("panelOverig").style.display = "none";
    document.getElementById("Data").innerHTML = "";
}

function showOverig() {
    document.getElementById("panelVeranda").style.display = "none";
    document.getElementById("panelGSW").style.display = "none";
    document.getElementById("panelZonwering").style.display = "none";
    document.getElementById("panelOverig").style.display = "block";
    document.getElementById("panelOverig").style.marginTop = "-10px";
    document.getElementById("Data").innerHTML = "";
}