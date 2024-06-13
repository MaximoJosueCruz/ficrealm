import { guardarCuento, getCuento, getCuentoByNombre} from "./firebaseConfig.js"
//cuando se cargue la página, debe de hacer la busqueda
window.addEventListener('DOMContentLoaded', async (e)=>{
    e.preventDefault()
    console.log('works')
    //este es el valor a usar para la busqueda
    //const imprimirResultados= document.getElementById('resultados')
    const cuento = document.getElementById("valorCargado")
    const cuentoS = cuento.innerHTML.toString()
    console.log(cuentoS)

    //llamada para guardar, usable para después
    //guardarCuento("1","1","1","1","1")

    //const querySnapshot = await getCuento();

    let html=''
    const querySnapshot = await getCuentoByNombre(cuentoS);
    console.log(querySnapshot)
    querySnapshot.forEach(doc => {
        const data = doc.data(); // Asegúrate de llamar al método data() del documento
        const docId = doc.id; // Obtén el ID del documento para usarlo en la URL
        console.log(docId)
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
    resultados.innerHTML= html;
})
