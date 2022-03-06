const hamburgerMenu=document.querySelector('.menu-icon');
if(hamburgerMenu){
    hamburgerMenu.addEventListener('click', function(){
        if(this.innerHTML=='menu'){
            this.innerHTML='close';
        }else{
            this.innerHTML='menu';
        }
        this.nextElementSibling.classList.toggle('active');
    });
}

const mainDisplay=document.querySelector('.main-display');
const galleryItem=document.querySelectorAll('.gallery-item');
if(galleryItem && mainDisplay){
    galleryItem.forEach(function(el){
        el.addEventListener('click', function(e){
            mainDisplay.firstElementChild.firstElementChild.src=e.target.src;
            for(let i=0; i<galleryItem.length; i++){
                if(galleryItem[i].firstElementChild.src==mainDisplay.firstElementChild.firstElementChild.src){
                    galleryItem[i].firstElementChild.style.opacity='0.5';
                }else{
                    galleryItem[i].firstElementChild.style.opacity='1';
                }
            }
        });
    });
    
    
}

const modalBox=document.querySelector('.modal-box');
if(modalBox){
    modalBox.addEventListener('click', function(e){
        if(e.target.classList.contains('modal-box')){
            this.classList.toggle('fade-back');
            setTimeout(function(){
                modalBox.classList.toggle('fade-back');
                modalBox.classList.toggle('active');
            }, 200);
        }
    });
}

if(galleryItem){
    galleryItem.forEach(function(el){
        el.addEventListener('click', function(){
            modalBox.querySelector('a').href=this.querySelector('.link').innerHTML;
            modalBox.classList.toggle('active');
            modalBox.querySelector('.img-container img').src=this.querySelector('.img-container img').src;
            modalBox.querySelector('.title h1').innerHTML=this.querySelector('.title').innerHTML;
            modalBox.querySelector('.description p').innerHTML=this.querySelector('.description').innerHTML;
        });
    });
}

const aboutMe=document.querySelector('.about-me');
if(aboutMe){
    aboutMe.addEventListener('click', function(){
        this.querySelector('.content').firstElementChild.firstElementChild.classList.toggle('open');
        this.querySelector('.expand-description').classList.toggle('active');
    });
}
