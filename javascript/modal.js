$(document).ready(function () {
  const btnOpens = $('.modal__btn-open');
  const btnClose = $('.modal__btn-close');
  const btnCancel = $('.modal__btn-cancel');
  const overlay = $('.modal__overlay');
  const btnOptions = $('.my-learning__btn-option');

  const handleChangeOverflowBody = (overflow) => $(document.body).css('overflow', `${overflow}`);
  const handleShowModal = (selector) => $(selector).addClass('show');
  const handleHiddenModal = (selector) => $(selector).removeClass('show');

  btnOpens.each((index, btnOpen) => {
    $(btnOpen).click(function () {
      const modalId = $(this).attr('data-modal');

      handleChangeOverflowBody('hidden');
      $('.modal').each((index, modal) => handleHiddenModal(modal));
      handleShowModal(`.modal[data-modal="${modalId}"]`);
      btnOptions.each((index, btnOption) => $(btnOption).removeClass('active'));
    });
  });

  $('.modal').each((index, modal) => {
    btnClose.click(() => {
      handleHiddenModal(modal);
      handleChangeOverflowBody('visible');
    });
    btnCancel.click(() => {
      handleHiddenModal(modal);
      handleChangeOverflowBody('visible');
    });
    overlay.click(() => {
      handleHiddenModal(modal);
      handleChangeOverflowBody('visible');
    });
  });
});
