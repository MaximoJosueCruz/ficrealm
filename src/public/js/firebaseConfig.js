// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsw9pbfPZX_touoWo0OOVTzznzPb9xy_g",
  authDomain: "ficrealm-42832.firebaseapp.com",
  projectId: "ficrealm-42832",
  storageBucket: "ficrealm-42832.appspot.com",
  messagingSenderId: "637728267665",
  appId: "1:637728267665:web:7ed910dcbc783021d70e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para guardar cuento
export const guardarCuento = async (autor, cuento, genero, nombre, resumen) => {
  try {
    const docRef = await addDoc(collection(db, 'cuento'), {
      autor: autor,
      cuento: cuento,
      genero: genero,
      nombre: nombre,
      resumen: resumen
    });
    console.log("Guardado con ID: ", docRef.id);
  } catch (error) {
    console.error("Error al guardar el cuento: ", error);
    throw error;  // Propagar el error para manejarlo en el lugar correspondiente
  }
};

// Obtener todos los cuentos
export const getCuento = () => getDocs(collection(db, 'cuento'));

// Obtener un solo cuento
export const getCuentoByNombre = async (nombre) => {
  const cuentosRef = collection(db, 'cuento');
  const q = query(cuentosRef, where('nombre', '>=', nombre), where('nombre', '<=', nombre + '\uf8ff'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs; // Devuelve los documentos encontrados
};

// Obtener un solo género de cuento
export const getCuentoByGenero = async (nombre) => {
  const cuentosRef = collection(db, 'cuento');
  const q = query(cuentosRef, where('genero', '>=', nombre), where('genero', '<=', nombre + '\uf8ff'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs; // Devuelve los documentos encontrados
};

// Función para obtener un cuento por ID
export const getCuentoById = async (id) => {
  const docRef = doc(db, 'cuento', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap;
  } else {
    throw new Error('No se encontró el documento');
  }
};

export const guardarMensaje = async (email, motivo, mensaje) => {
  console.log("Guardando mensaje en Firestore");
  try {
    const docRef = await addDoc(collection(db, 'mensajes'), {
      email: email,
      motivo: motivo,
      mensaje: mensaje
    });
    console.log("Mensaje guardado con ID:", docRef.id);
  } catch (error) {
    console.error("Error al guardar el mensaje:", error);
    throw error; // Propagar el error para manejarlo en el lugar correspondiente
  }
};

// Función para actualizar un cuento por su ID
export async function updateCuento(cuentoId, autor, cuento, genero, nombre, resumen) {
  const cuentoRef = doc(db, "cuentos", cuentoId);
  await updateDoc(cuentoRef, {
    autor: autor,
    cuento: cuento,
    genero: genero,
    nombre: nombre,
    resumen: resumen
  });
}

// Función para eliminar un cuento por ID
export const eliminarCuento = async (id) => {
  try {
    await deleteDoc(doc(db, 'cuento', id));
    console.log("Cuento eliminado con ID: ", id);
  } catch (error) {
    console.error("Error al eliminar el cuento: ", error);
    throw error;  // Propagar el error para manejarlo en el lugar correspondiente
  }
};