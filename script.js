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

const accordiontlist = document.querySelectorAll('.js-accordion dt');

function activeAccordion(){
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
}
accordiontlist.forEach((item) =>{
    item.addEventListener('click', activeAccordion);
    
})