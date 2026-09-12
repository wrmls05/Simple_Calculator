(function () {
    let screen = document.querySelector('#screen');
    let buttons = document.querySelectorAll('[data-action="input"]');
    let clear = document.querySelector('[data-action="clear"]');
    let equal = document.querySelector('[data-action="equal"]');
    let deleteBtn = document.querySelector('[data-action="delete"]');

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

    deleteBtn.addEventListener('click', function () {
        screen.value = screen.value.slice(0, -1);
    })
})();