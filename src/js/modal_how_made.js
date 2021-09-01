(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-open1]'),
    closeModalBtn1: document.querySelector('[data-modal-close1]'),
    modal1: document.querySelector('[data-modal1]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.closeModalBtn1.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal1.classList.toggle('is-hidden');
  }
})();