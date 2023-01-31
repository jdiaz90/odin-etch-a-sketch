function fillContainer() {

    const colorPicker = document.querySelector('#colorPicker')
    const container = document.querySelector('.container')
    let root = document.querySelector(':root')
    let col, row

    alert(colorPicker.value)
    
    for(let i=1; i <= 16; i++){

        row = document.createElement('div')
        row.classList.add('row')

        for(let i=1; i <= 16; i++){
            col = document.createElement('div')
            col.classList.add('col')

            col.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = colorPicker.value
            })

            row.append(col)
        }

        container.append(row)
        

    }

}

fillContainer()