
function handleSearch(event) {
  event.preventDefault(); // Previene el envío del formulario

  // Obtiene el valor del input de búsqueda
  var searchQuery = document.getElementById('searchInput').value;

  // Redirige a la página resultado con el query como parámetro en la URL
  window.location.href = '/resultado?query=' + encodeURIComponent(searchQuery);
}