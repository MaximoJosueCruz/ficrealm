import { getCuentoById } from "./firebaseConfig.js";

// Cuando se cargue la página, debe de hacer la búsqueda
window.addEventListener('DOMContentLoaded', async (e) => {
    e.preventDefault();
    console.log('works');

    // Este es el valor a usar para la búsqueda
    const cuento = document.getElementById("valorCargado");
    const cuentoS = cuento.innerText.trim(); // Usa innerText en lugar de innerHTML y trim para eliminar espacios en blanco
    console.log(cuentoS);

    // Realiza la llamada para obtener el documento por ID
    try {
        const docSnap = await getCuentoById(cuentoS);

        if (docSnap.exists()) {
            const data = docSnap.data(); // Asegúrate de llamar al método data() del documento
            const docId = docSnap.id; // Obtén el ID del documento para usarlo en la URL
            console.log(docId);

            const html = `
                <div class="d-flex justify-content-center">
                    <div class="card w-90">
                        <div class="card-body">
                            <h3 class="card-title card-title-custom text-center bg-dark text-light p-3">Nombre: ${data.nombre}</h3>
                            <p class="card-text text-center">Género: ${data.genero}</p>
                            <p class="card-text">Autor: ${data.autor}</p>
                            <p class="card-text text-justify">${data.cuento}</p>
                        </div>
                    </div>
                </div>
            `;

            const resultados = document.getElementById('resultados');
            resultados.innerHTML = html;
        } else {
            console.error('No se encontró el documento');
        }
    } catch (error) {
        console.error('Error al obtener el documento:', error);
    }
});