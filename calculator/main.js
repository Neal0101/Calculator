const calculator = document.querySelector('.calculator')

const keys = document.querySelector('.calculator__keys')

const display = calculator.querySelector('.calculator__display')



keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return

    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    //Is this a Number key

    if (key.classList.contains('number')){

        if (displayValue === '0'){ 
        display.textContent = keyValue
        } else {
            display.textContent = displayValue + keyValue
        }
    }

    //Is this a Operator key
    
    if(key.dataset.type === 'operator') {
        console.log(key)

        calculator.dataset.previousKeyType = 'operator'
    }
})