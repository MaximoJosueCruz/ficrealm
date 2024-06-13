// editarCuento.js

import { updateCuento, getCuentoById } from './firebaseConfig.js';

document.getElementById('editarCuentoForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const cuentoId = document.getElementById('cuentoId').value;
  const nombre = document.getElementById('nombre').value.trim();
  const autor = document.getElementById('autor').value.trim();
  const genero = document.getElementById('genero').value;
  const resumen = document.getElementById('resumen').value.trim();
  const cuento = document.getElementById('cuento').value.trim();

  if (nombre && autor && genero && resumen && cuento) {
    try {
      await updateCuento(cuentoId, autor, cuento, genero, nombre, resumen);
      alert('Cuento actualizado con éxito.');
      window.location.href = `/detalleCuento/${cuentoId}`; // Redirige a la página de detalle del cuento actualizado
    } catch (error) {
      console.error('Error al actualizar el cuento:', error);
      alert('Hubo un error al actualizar el cuento. Por favor, inténtalo de nuevo.');
    }
  } else {
    alert('Todos los campos son obligatorios.');
  }
});

(async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const cuentoId = urlParams.get('id');

    if (cuentoId) {
      const cuento = await getCuentoById(cuentoId);
      document.getElementById('nombre').value = cuento.nombre;
      document.getElementById('autor').value = cuento.autor;
      document.getElementById('genero').value = cuento.genero;
      document.getElementById('resumen').value = cuento.resumen;
      document.getElementById('cuento').value = cuento.cuento;
    } else {
      throw new Error('No se proporcionó un ID de cuento válido');
    }
  } catch (error) {
    console.error('Error al obtener el cuento:', error);
    alert('Hubo un error al obtener el cuento. Por favor, inténtalo de nuevo.');
  }
})();
