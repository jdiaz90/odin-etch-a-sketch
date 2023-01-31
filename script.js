function fillContainer() {

    const container = document.querySelector('.container')
    let col, row
    
    for(let i=1; i <= 16; i++){

        row = document.createElement('div')
        row.classList.add('row')

        for(let i=1; i <= 16; i++){
            col = document.createElement('div')
            col.classList.add('col')
            col.textContent = 'X'
            row.append(col)
        }

        container.append(row)
        

    }

}

fillContainer()