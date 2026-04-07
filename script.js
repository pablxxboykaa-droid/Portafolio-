document.addEventListener('DOMContentLoaded', () => {
    // Scroll suave para los botones
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mensaje de confirmación en consola
    console.log("Portafolio de PablxxDM cargado con éxito.");
});