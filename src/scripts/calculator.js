(function () {
    let screen = document.querySelector('#screen');
    let buttons = document.querySelectorAll('[data-action="input"]');
    let clear = document.querySelector('[data-action="clear"]');
    let equal = document.querySelector('[data-action="equal"]');
    let deleteBtn = document.querySelector('[data-action="delete"]');

    // history
    let historyList = document.querySelector('#history-list');
    let emptyHistory = document.querySelector('#empty-history');
    let clearHistory = document.querySelector('#clear-history');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const value = button.dataset.num;

            screen.value += value;
        });
    });

    equal.addEventListener('click', function () {
        if (screen.value === '') {
            screen.value = '';
        } else {
            let answer = eval(screen.value)

            let expression = screen.value

            emptyHistory.classList.add('hidden')

            let historyItem = document.createElement('div')

            historyItem.className = 'rounded-md bg-gray-100 py-3 px-6 my-2'

            historyItem.innerHTML =
                `
                <p class="text-sm text-gray-500">${expression}</p>
                <p class="text-lg text-gray-800">= ${answer}</p>
            `;

            historyList.prepend(historyItem);

            screen.value = answer
        }
    })

    clear.addEventListener('click', function () {
        screen.value = '';
    })

    deleteBtn.addEventListener('click', function () {
        screen.value = screen.value.slice(0, -1);
    })

    clearHistory.addEventListener('click', function () {
        historyList.innerHTML = '';
        emptyHistory.classList.remove('hidden');
        historyList.appendChild(emptyHistory);
    });
})();