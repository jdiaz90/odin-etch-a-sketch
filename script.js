const root = document.querySelector(':root');
root.style.setProperty('--container-width', '480px');
let width = getComputedStyle(root).getPropertyValue('--container-width')

start()

function start(){

    const sizeGrid = document.querySelector('#sizePicker')
    const sizeSelection = document.querySelector('#sizeSelection')
    let size = 16   

    sizeGrid.min = 1
    sizeGrid.max = 100
    sizeGrid.value = size
    sizeSelection.textContent = `${size} x ${size}`

    sizeGrid.addEventListener('input', (e) => {
        size = e.target.value
        sizeSelection.textContent = `${size} x ${size}`
    })
    
    sizeGrid.addEventListener('change', (e) => {
        size = e.target.value
        fillContainer(size)
    })

    fillContainer(size)

}

function fillContainer(size){

    const container = document.querySelector('.container')
    const colorPicker = document.querySelector('#colorPicker')
    let col, row

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    for(let i=1; i <= size; i++){

        row = document.createElement('div')
        row.classList.add('row')

        for(let i=1; i <= size; i++){
            col = document.createElement('div')
            col.classList.add('col')

            col.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = colorPicker.value
            })

            row.append(col)
        }

        container.append(row)

    }

    calculateSize(size)

}

function calculateSize(size){

    width = width.replace('px', '')
    const sizeGrid = (width / size) + 'px'
    root.style.setProperty('--col-width', sizeGrid);
    root.style.setProperty('--row-height', sizeGrid);

}