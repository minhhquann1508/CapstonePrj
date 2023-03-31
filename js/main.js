const btn = document.querySelector('.backToTopBtn')
const header = document.querySelector('.header')
const switchBtn = document.getElementById('switchBtn')
btn.onclick = () => {
    document.documentElement.scrollTo(0,0)
}
window.onscroll = () => {
    if(document.documentElement.scrollTop > 50) {
        btn.style.display = 'block'
        header.style.padding = 0
    }
    else {
        btn.style.display = 'none'
        header.style.padding = '8px'
    }
}
//Tạo darkTheme
switchBtn.onclick = () =>  {
    document.getElementById('myBody').classList.toggle('dark')
}