'use strict';

/* VARIABLES(START) */

const wrapper = document.querySelector('.wrapper');
const mars = document.querySelector('.background_img-mars');
const navList = document.querySelector('.header_nav');
const navListContent = document.querySelector('.nav_list');
const navItems = document.querySelectorAll('.nav_item');
const startButton = {
    state: false,
    node: document.querySelector('.start_text')};
const videoMars = document.querySelector('.video');
const burger = {
    node: document.querySelector('.burger'),
    state: false,
    changeState() {
        this.state = !this.state;
        if (this.state){
            this.node.style.display = 'none';
            navList.style.display = 'block';
            navListContent.style.display = 'inline';
            navItems.forEach(item => {item.style.display = 'inline';})
        } else {
            this.node.style.display = 'grid';
            navListContent.style.display = 'block';
            navList.style.display = 'none';
            navItems.forEach(item => {item.style.display = 'inline-block';})
        }
    }
};

/* VARIABLES(END) */

/* EVENTLISTENERS(START) */

burger.node.addEventListener('click', () => {
    burger.changeState()
});
wrapper.addEventListener('click', (e) =>{
    if (burger.state) {
        if (e.target.className != 'burger_content' && e.target.className != 'nav_list' && e.target.className != '') {
            burger.changeState()
        }
    }
})
startButton.node.addEventListener('click', () => {
    if (!startButton.state) {
        mars.style.width = '1500px';
        mars.style.height = '1500px';
        document.body.style.overflowY = 'hidden';
        startButton.node.innerHTML = 'Вернуть всё обратно';
        setTimeout(() => {
            mars.style.width = '10px';
            mars.style.height = '10px';
        }, 400)
        setTimeout(() => {
            mars.style.display = 'none';
            document.body.style.overflowY = 'auto';
            startButton.node.parentElement.style.display = 'none';
        }, 1000)
        setTimeout(() => {
            startButton.node.parentElement.style.display = 'block';
            startButton.node.parentElement.style.opacity = '1';
        }, 10000)
        videoMars.style.opacity = '1';
        videoMars.children[0].play();
        startButton.node.parentElement.style.opacity = '0';
        document.querySelector('.page').className = 'new_page';
        startButton.state = !startButton.state
    } else {
        startButton.node.innerHTML = 'Начать путешествие';
        mars.style.display = 'block';
        mars.style.width = '400px';
        mars.style.height = '400px';
        document.querySelector('.new_page').className = 'page';
        videoMars.children[0].pause();
        videoMars.style.opacity = '0';
        startButton.state = !startButton;
    }
})

/* EVENTLISTENERS(END) */