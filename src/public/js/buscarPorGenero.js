import {getCuentoByGenero} from "./firebaseConfig.js"
window.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const genero = urlParams.get('genero');
    console.log(genero)
    if (genero) {
        let html = '';
        const querySnapshot = await getCuentoByGenero(genero); // Debes implementar esta función en firebaseConfig.js

        querySnapshot.forEach(doc => {
            const data = doc.data();
            const docId = doc.id;
            html += `
            <div class="col-12 col-md-6 mb-4">
                <form id="searchForm-${docId}" class="d-flex" role="search" onsubmit="handleSearchCuento(event, '${docId}')">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title card-title-custom" id="${docId}">Nombre: ${data.nombre}</h3>
                            <p class="card-text">Autor: ${data.autor}</p>
                            <p class="card-text">Resumen: ${data.resumen}</p>
                            <button class="btn btn-outline-success bg-primary text-dark" type="submit">Leer</button>
                            <span style="margin-left: 10px;" class="cuentoInv" type="text">${docId}</span>
                        </div>
                    </div>
                </form>   
            </div>
            `;
        });

        document.getElementById('resultados').innerHTML = html;
    }
});