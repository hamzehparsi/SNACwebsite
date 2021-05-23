let aboutUs = document.querySelector('#about-us')
let subMenuAboutUs = document.querySelector('.sub-menu-about-us')
aboutUs.addEventListener('mouseenter', ()=> {
    subMenuAboutUs.classList.add('activate')
    console.log('ksj');
})
aboutUs.addEventListener('mouseleave', ()=> {
    subMenuAboutUs.classList.remove('activate')
})


let news = document.querySelector('#news')
let subMenuNews = document.querySelector('.sub-menu-news')

news.addEventListener('mouseenter', ()=> {
    subMenuNews.classList.add('activate')
})
news.addEventListener('mouseleave', ()=> {
    subMenuNews.classList.remove('activate')
})



let tenders = document.querySelector('#tenders')
let subMenuTenders = document.querySelector('.sub-menu-tenders')

tenders.addEventListener('mouseenter', ()=> {
    subMenuTenders.classList.add('activate')
})
tenders.addEventListener('mouseleave', ()=> {
    subMenuTenders.classList.remove('activate')
})



let media = document.querySelector('#media')
let subMenuMedia = document.querySelector('.sub-menu-media')

media.addEventListener('mouseenter', ()=> {
    subMenuMedia.classList.add('activate')
})
media.addEventListener('mouseleave', ()=> {
    subMenuMedia.classList.remove('activate')
})


