let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnValue = e.target.innerText;

        if (btnValue === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } 
        else if (btnValue === 'AC') {
            string = "";
            input.value = string;
        } 
        else if (btnValue === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } 
        else {
            string += btnValue;
            input.value = string;
        }
    });
});

// ✅ Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if ((/[0-9\+\-\*\/\.\%]/).test(key)) {
        string += key;
        input.value = string;
    } 
    else if (key === 'Enter') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } 
    else if (key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    } 
    else if (key === 'Escape') {
        string = "";
        input.value = string;
    }
});
