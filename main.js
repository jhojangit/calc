
function write() {
    const buttons = document.querySelectorAll('.form button');
    const strHTML = document.querySelector('.str')
    const equalHTML = document.querySelector('.equal')
    const totalHTML = document.querySelector('.total')

    let html = ''

    buttons.forEach(button =>{
        button.addEventListener('click', function(){
            const value = button.value
            html += value
            strHTML.innerHTML = html

                equalHTML.addEventListener('click', ()=>{
                let eva = eval(html)
                html = eva
                strHTML.innerHTML = html
                totalHTML.innerHTML = eva
                })
            
        })
    })
}

write()






