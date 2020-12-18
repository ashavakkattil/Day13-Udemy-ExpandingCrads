/* My Way */
/* document.querySelector('.container').addEventListener('click', addClass)


function addClass(e) {
    removeClass()
    const className = e.target.id
    document.querySelector(`#${className}`).classList.add('active')
}
function removeClass(){
    const children = document.querySelector('.container').children
    for(c of children){
        c.classList.remove('active')
    }
}
 */

/* Course way */
const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActive();
        panel.classList.add('active')
    })
})

function removeActive() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}