function focusKlantnummer() {
    let klantnummer = document.getElementById("klantnummer");
    if(klantnummer.value==="") {
        klantnummer.value = 100;
    }
}

function changeValueCaps(_id) {
    let trigger = document.getElementById(_id);
    let splitStr = trigger.value.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    trigger.value = splitStr.join(" ");
}

function changeValueUp(_id) {
    let goingUP = document.getElementById(_id);
    goingUP.value = goingUP.value.toUpperCase();
}

function changeAdres() {
    let capitalize = document.getElementById("adres");
    capitalize.value = capitalize.value.slice(0,1).toUpperCase() + capitalize.value.slice(1).toLowerCase();
}

function changeOmschrijving01() {
    let capitalize = document.getElementById("mobiel01omschrijving");
    capitalize.value = capitalize.value.slice(0,1).toUpperCase() + capitalize.value.slice(1).toLowerCase();
}

function changeOmschrijving02() {
    let capitalize = document.getElementById("mobiel02omschrijving");
    capitalize.value = capitalize.value.slice(0,1).toUpperCase() + capitalize.value.slice(1).toLowerCase();
}