function handleSearchCuento(event, id) {
    event.preventDefault(); // Previene el envío del formulario
  
    // Obtiene el valor del input de búsqueda
    var searchQuery = id;
  
    // Redirige a la página resultado con el query como parámetro en la URL
    window.location.href = '/cuento?query=' + encodeURIComponent(searchQuery);
  }