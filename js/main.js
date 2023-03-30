const btn = document.querySelector('.backToTopBtn')
const switchBtn = document.getElementById('switchBtn')
btn.onclick = () => {
    document.documentElement.scrollTo(0,0)
}
window.onscroll = () => {
    if(document.documentElement.scrollTop > 50) {
        btn.style.display = 'block'
    }
    else {
        btn.style.display = 'none'
    }
}
//Tạo darkTheme
switchBtn.onclick = () =>  {
    document.getElementById('myBody').classList.toggle('dark')
}