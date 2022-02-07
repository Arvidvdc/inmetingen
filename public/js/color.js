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
function colorData(kleuren, kleurID) {

    // Coverting data-string to object
    let obj = JSON.parse(kleuren);

    obj.forEach(element => {
        if(element._id == kleurID) {
            // Define element on page
            let kleurData = document.getElementById("colorData");
            // removing old childs
            while (kleurData.firstChild) {
                kleurData.firstChild.remove()
            }
            // Creating element CENTER
            let elementCenter = document.createElement("div");
            elementCenter.classList.add("center");

            // Creating element GALLERY
            let elementGallery = document.createElement("div");
            elementGallery.classList.add("gallery");
            elementGallery.innerHTML = element.kleurnummer.toUpperCase() + " - " + element.kleuromschrijving.toUpperCase() + "<hr> Van toepassing op:".toUpperCase();

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
            if(element.al22) {
                let al22 = document.createElement("div");
                al22.classList.add("col-6");
                al22.innerHTML = "GSW AL22 Laag";
                elementRow.appendChild(al22);
            }
            if(element.al23) {
                let al23 = document.createElement("div");
                al23.classList.add("col-6");
                al23.innerHTML = "GSW AL23 Hoog";
                elementRow.appendChild(al23);
            }
            if(element.al24) {
                let al24 = document.createElement("div");
                al24.classList.add("col-6");
                al24.innerHTML = "GSW AL24";
                elementRow.appendChild(al24);
            }
            if(element.w350zip) {
                let w350zip = document.createElement("div");
                w350zip.classList.add("col-6");
                w350zip.innerHTML = "Zonwering W350ZIP";
                elementRow.appendChild(w350zip);
            }
            if(element.t350zip) {
                let t350zip = document.createElement("div");
                t350zip.classList.add("col-6");
                t350zip.innerHTML = "Zonwering T350ZIP";
                elementRow.appendChild(t350zip);
            }
            if(element.w350) {
                let w350 = document.createElement("div");
                w350.classList.add("col-6");
                w350.innerHTML = "Zonwering W350";
                elementRow.appendChild(w350);
            }
            if(element.t350) {
                let t350 = document.createElement("div");
                t350.classList.add("col-6");
                t350.innerHTML = "Zonwering T350";
                elementRow.appendChild(t350);
            }
            if(element.verandawanden) {
                let verandawanden = document.createElement("div");
                verandawanden.classList.add("col-6");
                verandawanden.innerHTML = "Veranda wanden";
                elementRow.appendChild(verandawanden);
            }
            if(element.schuttingplanken) {
                let schuttingplanken = document.createElement("div");
                schuttingplanken.classList.add("col-6");
                schuttingplanken.innerHTML = "Schuttingplanken";
                elementRow.appendChild(schuttingplanken);
            }
            if(element.screenlinef513zip) {
                let screenlinef513zip = document.createElement("div");
                screenlinef513zip.classList.add("col-6");
                screenlinef513zip.innerHTML = "Screenline F513ZIP";
                elementRow.appendChild(screenlinef513zip);
            }

            // Generating EDIT and DESTROY buttons
            let elementSpan = document.createElement("span");
            elementSpan.classList.add("subtext");
            let elementForm = document.createElement("form");
            elementForm.action = "/maintenance/kleuren/" + element._id + "/destroy?_method=DELETE";
            elementForm.method = "POST";
            let elementEdit = document.createElement("a");
            elementEdit.setAttribute("style", "color: #ddba3f; text-decoration: none;")
            elementEdit.setAttribute("href", "/maintenance/kleuren/" + element._id + "/edit");
            elementEdit.appendChild(document.createTextNode("BEWERKEN | "));
            let elementSubmit = document.createElement("button");
            elementSubmit.classList.add("but-link");
            elementSubmit.setAttribute("type", "submit");
            elementSubmit.setAttribute("onclick", "return confirm('Weet je zeker dat je de kleur " + element.kleurnummer + " wil verwijderen?');");
            elementSubmit.appendChild(document.createTextNode("VERWIJDEREN"));
            elementForm.appendChild(elementEdit);
            elementForm.appendChild(elementSubmit);
            elementSpan.appendChild(elementForm);
            // let elementLinks = document.createElement("div");
            // elementLinks.classList.add("row");
            // elementLinks.appendChild(elementSpan);


            // Combine elements
            elementGallery.appendChild(elementRow);
            elementCenter.appendChild(elementGallery);
            elementCenter.appendChild(elementSpan);
            kleurData.appendChild(elementCenter);
        }
    });


    
    
}