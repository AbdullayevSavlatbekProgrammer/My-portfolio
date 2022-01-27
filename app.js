window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = this.document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 10)
    })
})

window.addEventListener('DOMContentLoaded', () => {

    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }, 2000)
});