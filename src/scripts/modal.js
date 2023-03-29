/* Desenvolva seu código aqui... */
function modalAction () {
    const link = document.querySelector('.btn-cadastrar');
    const modalContainer = document.querySelector('#modal__controller');

    link.addEventListener('click', () => {
        modalContainer.showModal();
    })
}
modalAction();