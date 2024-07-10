
function picturechange() {
    document.getElementById('image').src = './img/spargel-pfannenkuchen.JPEG';
    setTimeout(picturechange2, 3000);
}
function picturechange2() {
    document.getElementById('image').src = './img/carrot-cake.jpg';
    setTimeout(picturechange3, 3000);
}
function picturechange3() {
    document.getElementById('image').src = './img/rhubarb-cake.jpg';
    setTimeout(picturechange, 3000);
}
function contentchange(){
    document.getElementById('content').innerHTML = `
    <h2>Spargel Pfannkuchen</h2>
                <p>Schmackhafter Spargel kann auch zu Hause sehr einfach angerichtet werden. Mit ca. 15 min Aufwand
                    kannst du ein wundervolles Hauptgericht zur Spargelzeit zaubern. </p>
                <a href="./recipeMike.html" class="button">Rezept Öffnen</a>`
                setTimeout(contentchange2, 3000);

}

function contentchange2(){
    document.getElementById('content').innerHTML = `
    <h2>Karotten Kuchen</h2>
                <p>Schmackhafter Karotten Kuchen kann auch zu Hause sehr einfach gebacken werden. Mit ca. 40 min Aufwand
                    kannst du ein wundervolles Dessert zaubern. </p>
                <a href="./recipeCarlotta.html" class="button">Rezept Öffnen</a>`
                setTimeout(contentchange3, 3000);
                
}
function contentchange3(){
    document.getElementById('content').innerHTML = `
    <h2>Rhababer Kuchen</h2>
                <p>Schmackhafter Rhaber Kuchen kann auch zu Hause sehr einfach gebacken werden. Mit ca. 1 Stunde Aufwand
                    kannst du ein wundervolles Dessert zaubern. </p>
                <a href="./recipeCArla.html" class="button">Rezept Öffnen</a>`
                setTimeout(contentchange, 3000);
}


function calculateCarlotta() {
    loadTableCarlotta();
}

function loadTableCarlotta() {
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


function returnTableHTML(x) {
    return `
<table>
    <thead>
        <tr>
            <th>
                <h3>Für den Teig:</h3>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${x * 375} g Möhren (geriben)</td>
        </tr>
        <tr>
            <td>${x * 250} g Mehl</td>
        </tr>
        <tr>
            <td>${x * 2} TL Backpulver</td>
        </tr>
        <tr>
            <td>${x * 250} g Zucker</td>
        <tr>
            <td>${x * 1} TL Zimt</td>
        </tr>
        <tr>
            <td>${x * 250} g Öl</td>
        </tr>
        <tr>
            <td>${x * 4} Eier</td>
        </tr>
        <tr>
            <td>${x * 200} g Mandeln (gemahlen)</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>
                <h3>Für das Frosting:</h3>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${x * 300} g Frischkäse</td>
        </tr>
        <tr>
            <td>${x * 100} g Puderzucker</td>
        </tr>
        <tr>
            <td>${x * 1} Pck. Vanillezucker</td>
        </tr>
        <tr>
            <td>${x * 1} Spritzer Zitrone</td>
        </tr>
    </tbody>
</table>
    `.replace(/[.]/g, ",");
}
