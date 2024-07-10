function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
};

includeHTML();

function toggleStart() {
    document.getElementById("start").classList.add("scale", "color");
    document.getElementById("recipeOfTheDay").classList.remove("scale", "color");
    document.getElementById("contact").classList.remove("scale", "color");
    document.getElementById("impressum").classList.remove("scale", "color");
}

function toggleRecipeOfTheDay() {
    document.getElementById("recipeOfTheDay").classList.add("scale", "color");
    document.getElementById("contact").classList.remove("scale", "color");
    document.getElementById("start").classList.remove("scale", "color", "color");
    document.getElementById("impressum").classList.remove("scale", "color");
    loadTableMike();
}

function toggleContact() {
    document.getElementById("contact").classList.add("scale", "color");
    document.getElementById("start").classList.remove("scale", "color");
    document.getElementById("recipeOfTheDay").classList.remove("scale", "color");
    document.getElementById("impressum").classList.remove("scale", "color");
}

function toggleImpressum() {
    document.getElementById("impressum").classList.add("scale", "color");
    document.getElementById("contact").classList.remove("scale", "color");
    document.getElementById("start").classList.remove("scale", "color");
    document.getElementById("recipeOfTheDay").classList.remove("scale", "color");
}

function toggleRecipeCarla() {
    document.getElementById("impressum").classList.remove("scale", "color");
    document.getElementById("contact").classList.remove("scale", "color");
    document.getElementById("start").classList.remove("scale", "color");
    document.getElementById("recipeOfTheDay").classList.remove("scale", "color");
    loadTableCarla();
}

function toggleRecipeCarlotta() {
    document.getElementById("impressum").classList.add("scale", "color");
    document.getElementById("contact").classList.remove("scale", "color");
    document.getElementById("start").classList.remove("scale", "color");
    document.getElementById("recipeOfTheDay").classList.remove("scale", "color");
}

function loadTableMike() {
    let x = document.getElementById("portionInput").value;
    let tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    if (x >= 1) {
        tableContainer.innerHTML += returnTableHTML(x);
    } else {
        alert("Bitte einen positiven Wert eingeben");
        document.getElementById("portionInput").value = 4;
        loadTableMike();
    }
    if (x > 100) {
        alert("Leider schafft unsere Tabelle nicht mehr wie 100 Portionen ;)");
        document.getElementById("portionInput").value = 4;
        loadTableMike();
    }
}

function calculateMike() {
    loadTableMike();
}

function showMenu() {
    document.getElementById("menu").classList.add("show-overlay-menu");
}

function closeMenu() {
    document.getElementById("menu").classList.remove("show-overlay-menu");
}

function returnTableHTML(x) {
    return `
    <table>
    <tbody>
        <tr>
            <td>${x * 250} g Spargel, frisch oder aus dem Glas</td>
        </tr>
        <tr>
            <td>${x * 0.5} EL Zitronensaft</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>
                <h3>Für die Pfannenkuchen:</h3>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${x * 50} g Mehl</td>
        </tr>
        <tr>
            <td>${x * 75} ml Milch</td>
        </tr>
        <tr>
            <td>${x * 1} Ei(er)</td>
        </tr>
        <tr>
            <td>${x * 0.5} Prise(n) Salz</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>
                <h3>Für die Sauce:</h3>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${x * 1} Eigelb</td>
        </tr>
        <tr>
            <td>${x * 1} EL Weißwein</td>
        </tr>
        <tr>
            <td>${x * 75} g Butter</td>
        </tr>
        <tr>
            <td>Salz und Pfeffer</td>
        </tr>
    </tbody>
</table>
    `.replace(/[.]/g, ",");
}