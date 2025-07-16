const languages = {
    en: "English",
    es: "Español",
    fr: "Francês",
    pt: "Português",
    // Add more languages here
};

window.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('language-selector');
    if (selector) {
        for (const code in languages) {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = languages[code];
            selector.appendChild(option);
        }

        selector.addEventListener('change', function () {
            updateLanguageText(this.value);
        });
    }
});

function updateLanguageText(lang) {
    const translations = {
        en: {
            instructions: `Welcome! Add participants one by one using the input below. Once you have at least two names, click "Draw Names" to assign each person a recipient anonymously.\nIf you encounter an error, make sure you've added at least two unique names.`
        },
        es: {
            instructions: `¡Bienvenido! Agrega participantes uno por uno usando la entrada a continuación. Una vez que tengas al menos dos nombres, haz clic en "Sorteo" para asignar a cada persona un destinatario de forma anónima.\nSi encuentras un error, asegúrate de haber agregado al menos dos nombres únicos.`
        }
        // Add more translations here
    };

    const instructionText = translations[lang]?.instructions;
    if (instructionText) {
        document.querySelector(".instructions").innerHTML = "<p>" + instructionText.replace(/\n/g, "</p><p>") + "</p>";
    }
}
