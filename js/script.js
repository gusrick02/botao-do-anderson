document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');

    const newButton = document.createElement('button');
    newButton.textContent = 'Botao js';
    container.appendChild(newButton);

    newButton.classList.add('custom-button');

newButton.style.backgroundColor = 'green';
    newButton.style.color = 'red';
    newButton.style.border = 'none';
    newButton.style.padding = '10px 20px';
    newButton.style.borderRadius = '10px';
    newButton.style.cursor = 'pointer';
});

