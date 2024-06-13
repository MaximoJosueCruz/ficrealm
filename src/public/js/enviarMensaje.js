import { guardarMensaje } from './firebaseConfig.js';
document.addEventListener('DOMContentLoaded', function() {
    // Tu código que agrega event listener aquí
    document.getElementById('contactForm').addEventListener('submit1', async (e) => {
        e.preventDefault();
    
        const email = document.getElementById('email').value.trim();
        const motivo = document.getElementById('motivo').value.trim();
        const mensaje = document.getElementById('message').value.trim();
    
        if (email && motivo && mensaje) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Por favor, ingrese un correo electrónico válido.');
                return;
            }
    
            try {
                await guardarMensaje(email, motivo, mensaje);
                alert('Mensaje enviado con éxito.');
                window.location.href = '/confirmacion';
            } catch (error) {
                console.error('Error al enviar el mensaje:', error);
                alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
            }
        } else {
            alert('Todos los campos son obligatorios.');
        }
    });
});


