import { getCuentoByGenero, eliminarCuento } from './firebaseConfig.js';

document.addEventListener('DOMContentLoaded', async () => {
    const generos = ['Fantasía', 'Terror', 'Ciencia Ficción'];
    
    generos.forEach(async (genero) => {
        const cuentos = await getCuentoByGenero(genero);
        const generoContent = document.getElementById(`${genero.replace(' ', '-')}-content`);
        
        // Verificar si el contenedor existe antes de intentar agregar elementos
        if (generoContent) {
            cuentos.forEach((doc) => {
                const cuento = doc.data();
                const cuentoId = doc.id;

                // Crear fila y tarjeta
                const row = document.createElement('div');
                row.classList.add('col-12', 'mb-3');

                const card = document.createElement('div');
                card.classList.add('card');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                // Título del cuento
                const titulo = document.createElement('h5');
                titulo.classList.add('card-title');
                titulo.textContent = cuento.nombre;

                // Autor del cuento
                const autor = document.createElement('h6');
                autor.classList.add('card-subtitle', 'mb-2', 'text-muted');
                autor.textContent = `Autor: ${cuento.autor}`;

                // Resumen del cuento
                const resumen = document.createElement('p');
                resumen.classList.add('card-text');
                resumen.textContent = cuento.resumen;

                // Botón de eliminar
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('btn', 'btn-danger');
                deleteButton.innerHTML = '<i class="fas fa-trash"></i> Eliminar';
                deleteButton.addEventListener('click', async () => {
                    if (confirm('¿Estás seguro de que deseas eliminar este cuento?')) {
                        try {
                            await eliminarCuento(cuentoId);
                            alert('Cuento eliminado con éxito');
                            window.location.reload();
                        } catch (error) {
                            console.error('Error al eliminar el cuento:', error);
                            alert(`Hubo un error al eliminar el cuento: ${error.message}`);
                        }
                    }
                });

                // Agregar elementos al DOM
                cardBody.appendChild(titulo);
                cardBody.appendChild(autor);
                cardBody.appendChild(resumen);
                cardBody.appendChild(deleteButton);

                card.appendChild(cardBody);
                row.appendChild(card);
                generoContent.appendChild(row);
            });
        } else {
            console.error(`No se encontró el contenedor para el género: ${genero}`);
        }
    });
});
