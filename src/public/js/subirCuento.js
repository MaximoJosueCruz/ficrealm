import { guardarCuento } from './firebaseConfig.js';

document.getElementById('subirCuentoForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const autor = document.getElementById('autor').value.trim();
    const genero = document.getElementById('genero').value;
    const resumen = document.getElementById('resumen').value.trim();
    const cuento = document.getElementById('cuento').value.trim();
    
    console.log({ nombre, autor, genero, resumen, cuento });  // Verificar los datos

    if (nombre && autor && genero && resumen && cuento) {
        try {
            await guardarCuento(autor, cuento, genero, nombre, resumen);
            alert('Cuento publicado con éxito. Solo el administrador puede hacer cambios una vez publicado el cuento.');
            window.location.href = '/confirmacion';
        } catch (error) {
            console.error('Error al guardar el cuento:', error);
            alert('Hubo un error al publicar el cuento. Por favor, inténtalo de nuevo.');
        }
    } else {
        alert('Todos los campos son obligatorios.');
    }
});
