const tavolaPeriodica = document.querySelector("#tavola-periodica");
const menuInfo = document.querySelector("#menu");

fetch("data-table.json")
    .then(response => response.json())
    .then(data => {
        createTable(data);
    });

function createTable(elementi) {
    elementi.forEach(el => {
        const button = document.createElement("button");
        button.innerHTML = `<b>${el.simbolo}</b><br>${el.nome}<br>${el.numero_atomico}`;
        button.style.gridColumn = el.colonna;
        button.style.gridRow = el.riga;
        button.classList.add("bottone-elemento");
        button.classList.add(el.gruppo);
        button.addEventListener("click", () => {
            mostraMenuElemento(el);
        });
        tavolaPeriodica.appendChild(button);
    });
}

function mostraMenuElemento(el) {
    menuInfo.innerHTML = `
        <img src="foto elementi/${el.simbolo}.jpg" class="element-image">
        <div id="infoelemento">
            <h2 class="element-name">${el.nome} (${el.simbolo})</h2>
            <p>Numero Atomico: ${el.numero_atomico}</p>
            <p>Numero di Massa: ${el.numero_massa}</p>
            <p>Elettronegatività: ${el.elettronegativita}</p>
            <p>Configurazione Elettronica: ${el.configurazione_elettronica}</p>
            <p>Gruppo: ${el.gruppo}</p>
        </div>      
    `;
}
