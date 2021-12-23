function enviar() {
    Email.send({
        SecureToken : "10e35afd-186f-4fc4-9201-9e91ddcba51b",
        To : 'proyectosconcretos3@gmail.com',
        From : document.querySelector('#correo').value,
        Subject : "Potencial Cliente desde la Pagina",
        Body : `<strong>${document.querySelector('#nombre').value}</strong> está interesado en obtener mas información sobre <strong>Proyectos Concretos</strong>, podemos contactarlo al correo: ${document.querySelector('#correo').value}`
    }).then(
      message => alert('Mensaje enviado')
    ).catch((e)=>{
        console.log(e);
    });
}

document.querySelector('.btn-enviar').addEventListener('click', enviar);
