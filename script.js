//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonId = button.id;

            if (buttonId === 'C') {
                displayValue = '';
            } else if (buttonId === 'back') {
                displayValue = displayValue.slice(0, -1);
            } else if (buttonId === 'equal') {
                try {
                    displayValue = eval(displayValue).toString();
                } catch {
                    displayValue = 'Error';
                }
            } else {
                const buttonText = button.innerText;
                displayValue += buttonText;
            }

            display.textContent = displayValue;
        });
    });
});
