document.addEventListener('DOMContentLoaded', () => {
    const flowerSelect = document.getElementById('flowerSelect');
    const generateButton = document.getElementById('generateButton');
    const flowerField = document.getElementById('flowerField');
    const message = document.getElementById('message');

    generateButton.addEventListener('click', () => {
        const selection = flowerSelect.value;
        flowerField.innerHTML = '';  // Limpiar el campo de flores
        let flowerCount = 100;  // Mínimo de flores

        // Generar el número de flores basado en la opción seleccionada
        switch (selection) {
            case 'none':
                flowerCount = 100;
                break;
            case 'few':
                flowerCount = 100;
                break;
            case 'some':
                flowerCount = 100;
                break;
            case 'many':
                flowerCount = 100;
                break;
        }

        // Generar las flores y agregarlas al campo
        for (let i = 0; i < flowerCount; i++) {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            flowerField.appendChild(flower);
        }

        // Mostrar el mensaje
        message.classList.remove('hidden');
        message.textContent = "Te mereces todas las flores del mundo.";
    });
});