function calculateCarla() {
    loadTableCarla();
}

function loadTableCarla() {
    let x = document.getElementById("portionInput").value;
    let tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    tableContainer.innerHTML += `
    <table>
    <tbody>
        <tr>
            <td>Für 8 Portionen passt eine Springform mit 24 cm Durchmesser</td>
        </tr>
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>
                <h3>Für die Streusel - Boden und Topping:</h3>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${x * 18.75} g kalte Butter - Keine "streichzart"-Sorte verwenden!</td>
        </tr>
        <tr>
            <td>${x * 18,75} g Zucker</td>
        </tr>
        <tr>
            <td>${x * 37.5} g Weizenmehl - Alternativ Dinkelmehl Type 630</td>
        </tr>
        
    </tbody>
</table>
<table>
    <thead>
        <tr>
            <th>
                <h3>Für den Belag:</h3>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${x * 100} g Rhabarber - Alternativ nach Saison: z.B. Äpfel, Birnen, Zwetschgen</td>
        </tr>
        <tr>
            <td>${x * 0.75} EL Zucker</td>
        </tr>
        <tr>
            <td>${x * 0.25} EL Speisestärke</td>
        </tr>
        <tr>
            <td>${x * 0.125} TL Butter</td>
        </tr>
        <tr>
            <td>${x * 0.125} Päckchen Vanillezucker</td>
        </tr>
    </tbody>
</table>
    `.replace(/[.]/g,",");
}

