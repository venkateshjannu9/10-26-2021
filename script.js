'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal =  document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

for(let i =0; i<btnOpenModal.length;i++)
   console.log(btnOpenModal[i].addEventListener ('click',function(){
       console.log('Button Clicked');
       modal.classList.remove('hidden');
       overlay.classList.remove('hidden');

   }));
   const btnCloseModal= function()
   {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
   }
btnCloseModal.addEventListener('click', closeModal);
modal.classList.add('hidden');
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
    console.log('A key was pressed');
    console.log(e.key);
    if(e.key === 'Escape') {
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
    
});
        
   