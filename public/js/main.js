const modal = document.querySelector('.modal');
const deleteBtn = document.querySelector('.btn__danger');

deleteBtn.addEventListener('click', ()=>{
    modal.showModal()
});

const close = document.querySelector('.moNo');
close.addEventListener('click', ()=>{
    modal.close()
})