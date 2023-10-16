function tabMenu() {

    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo');
        function activeTab(index){
            tabContent.forEach((section) =>{
                section.classList.remove('ativo');
            })
        tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index)=>{
        itemMenu.addEventListener('click', () =>{
            console.log(tabMenu[index])
            activeTab(index);
        })
    });

    }

}
tabMenu();


function actAccordion(){
    const accordiontlist = document.querySelectorAll('.js-accordion dt');

    function activeAccordion(){
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }
    accordiontlist.forEach((item) =>{
        item.addEventListener('click', activeAccordion);
        
    });
}
actAccordion();


function scrollAnimation(){
    const linkInterno = document.querySelectorAll('a[href^="#"]');

    function scrollToSection(event){
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior: 'smooth',
    });
    }

    linkInterno.forEach((item) =>{
        item.addEventListener('click', scrollToSection);
    })
}
scrollAnimation();

function validaScrollAnima(){
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length){
        const windowMetade = window.innerHeight * 0.7;
        function transitionScroll(){
            sections.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top;
                const sectionVisible = sectionTop - windowMetade < 0;
                if(sectionVisible){
                    section.classList.add('ativo');
                }
            });
        }

        transitionScroll();
        window.addEventListener('scroll', transitionScroll);
    }
}
validaScrollAnima();