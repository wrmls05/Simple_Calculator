(function () {
    let screen = document.querySelector('#screen');
    let buttons = document.querySelectorAll('[data-text="input"]');
    let clear = document.querySelector('[data-action="clear"]');
    let equal = document.querySelector('[data-action="equal"]');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const value = button.dataset.num;
            
            screen.value += value;
        });
    });

    equal.addEventListener('click', function () {
        if(screen.value === ''){
            screen.value = '';
        }else {
            let answer = eval(screen.value)
            screen.value = answer
        }                           
    })

    clear.addEventListener('click', function () {
        screen.value = '';
    })
})();