//retroceder 3 veces para tener lo anteriors
import { getCuentoByGenero } from "./firebaseConfig.js";

function handleLeerCuento(cuentoId) {
    // Aquí puedes redirigir a la página de detalle del cuento o realizar otras acciones necesarias
    console.log('Cuento ID:', cuentoId);
    // Ejemplo de redirección a la página de detalle
    window.location.href = `/cuento?query=${encodeURIComponent(cuentoId)}`;
}


// Función para cargar cuentos de Fantasía
async function cargarFantasía() {
    try {
        const contenedor = document.getElementById('Fantasía-content');
        const querySnapshot = await getCuentoByGenero('Fantasía');

        if (!querySnapshot || querySnapshot.length === 0) {
            console.warn('No se encontraron cuentos para el género: Fantasía');
            return;
        }

        const cuentosMostrar = Math.min(2, querySnapshot.length);
        for (let j = 0; j < cuentosMostrar; j++) {
            const cuento = querySnapshot[j];
            const div = document.createElement('div');
            div.classList.add('col-12', 'col-md-6', 'mb-4');
            div.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title card-title-custom" id="${cuento.id}">Nombre: ${cuento.data().nombre}</h3>
                        <p class="card-text">Autor: ${cuento.data().autor}</p>
                        <p class="card-text">Resumen: ${cuento.data().resumen}</p>
                        <button class="btn btn-outline-success bg-primary text-dark leer-cuento-btn" data-cuento-id="${cuento.id}">Leer</button>
                    </div>
                </div>
            `;
            contenedor.appendChild(div);
        }

        // Agregar event listener a los botones después de agregarlos al DOM
        contenedor.querySelectorAll('.leer-cuento-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cuentoId = btn.getAttribute('data-cuento-id');
                handleLeerCuento(cuentoId);
            });
        });

    } catch (error) {
        console.error('Error al cargar los cuentos de Fantasía:', error);
    }
}

// Función para cargar cuentos de Terror
async function cargarTerror() {
    try {
        const contenedor = document.getElementById('Terror-content');
        const querySnapshot = await getCuentoByGenero('Terror');

        if (!querySnapshot || querySnapshot.length === 0) {
            console.warn('No se encontraron cuentos para el género: Terror');
            return;
        }

        const cuentosMostrar = Math.min(2, querySnapshot.length);
        for (let j = 0; j < cuentosMostrar; j++) {
            const cuento = querySnapshot[j];
            const div = document.createElement('div');
            div.classList.add('col-12', 'col-md-6', 'mb-4');
            div.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title card-title-custom" id="${cuento.id}">Nombre: ${cuento.data().nombre}</h3>
                        <p class="card-text">Autor: ${cuento.data().autor}</p>
                        <p class="card-text">Resumen: ${cuento.data().resumen}</p>
                        <button class="btn btn-outline-success bg-primary text-dark leer-cuento-btn" data-cuento-id="${cuento.id}">Leer</button>
                    </div>
                </div>
            `;
            contenedor.appendChild(div);
        }

        // Agregar event listener a los botones después de agregarlos al DOM
        contenedor.querySelectorAll('.leer-cuento-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cuentoId = btn.getAttribute('data-cuento-id');
                handleLeerCuento(cuentoId);
            });
        });

    } catch (error) {
        console.error('Error al cargar los cuentos de Terror:', error);
    }
}

// Función para cargar cuentos de Ciencia Ficción
async function cargarCienciaFiccion() {
    try {
        const contenedor = document.getElementById('Ciencia-Ficción-content');
        const querySnapshot = await getCuentoByGenero('Ciencia Ficción');

        if (!querySnapshot || querySnapshot.length === 0) {
            console.warn('No se encontraron cuentos para el género: Ciencia Ficción');
            return;
        }

        const cuentosMostrar = Math.min(2, querySnapshot.length);
        for (let j = 0; j < cuentosMostrar; j++) {
            const cuento = querySnapshot[j];
            const div = document.createElement('div');
            div.classList.add('col-12', 'col-md-6', 'mb-4');
            div.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title card-title-custom" id="${cuento.id}">Nombre: ${cuento.data().nombre}</h3>
                        <p class="card-text">Autor: ${cuento.data().autor}</p>
                        <p class="card-text">Resumen: ${cuento.data().resumen}</p>
                        <button class="btn btn-outline-success bg-primary text-dark leer-cuento-btn" data-cuento-id="${cuento.id}">Leer</button>
                    </div>
                </div>
            `;
            contenedor.appendChild(div);
        }

        // Agregar event listener a los botones después de agregarlos al DOM
        contenedor.querySelectorAll('.leer-cuento-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cuentoId = btn.getAttribute('data-cuento-id');
                handleLeerCuento(cuentoId);
            });
        });

    } catch (error) {
        console.error('Error al cargar los cuentos de Ciencia Ficción:', error);
    }
}

// Llama a las funciones específicas cuando la página esté completamente cargada
document.addEventListener('DOMContentLoaded', () => {
    cargarFantasía();
    cargarTerror();
    cargarCienciaFiccion();
});
