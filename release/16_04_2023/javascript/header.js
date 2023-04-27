$(document).ready(function () {
  const headerMenu = $('.header__menu');
  const categoryOne = $('.header__category-one');
  const categoryTwo = $('.header__category-two');
  const categoryThree = $('.header__category-three');
  const drawer = $('.drawer');
  const drawerLevel2 = $('.drawer__level-2');
  const drawerSideBtn = $('.drawer__side-btn');
  const drawerLevel2Btn = $('.drawer__level-2--btn');
  const drawerClose = $('.drawer__close');
  const drawerOverlay = $('.drawer__overlay');
  const search = $('.header__search');
  const searchIcon = $('.header__search-icon');
  const searchInput = $('.header__search-input');
  const searchResult = $('.header__search-result');
  const searchClose = $('.header__search-close');

  const handleChangeOverflowBody = (overflow) => $(document.body).css('overflow', `${overflow}`);

  // Category
  const handleAddShow = (arr) => arr.forEach((item) => $(item).addClass('show'));
  const handleRemoveShow = (arr) => arr.forEach((item) => $(item).removeClass('show'));

  categoryOne.mouseenter(() => handleAddShow([categoryTwo]));
  categoryOne.mouseleave(() => handleRemoveShow([categoryTwo, categoryThree]));
  categoryTwo.mouseenter(() => handleAddShow([categoryOne, categoryTwo, categoryThree]));
  categoryTwo.mouseleave(() => handleRemoveShow([categoryTwo, categoryThree]));
  categoryThree.mouseenter(() => handleAddShow([categoryOne, categoryTwo, categoryThree]));

  // Drawer
  drawerSideBtn.each((index, drawerSideBtn) => {
    $(drawerSideBtn).click(() => {
      drawerLevel2.addClass('show');
      drawer.addClass('overflow');
      $('.drawer__side')[0].scrollIntoView();
    });
  });

  drawerLevel2Btn.click(() => {
    drawerLevel2.removeClass('show');
    drawer.removeClass('overflow');
  });

  headerMenu.click(() => {
    handleChangeOverflowBody('hidden');
    drawer.addClass('show');
  });
  drawerClose.click(() => {
    handleChangeOverflowBody('visible');
    drawer.removeClass('show');
  });
  drawerOverlay.click(() => {
    handleChangeOverflowBody('visible');
    drawer.removeClass('show');
  });

  // Search
  searchIcon.click(() => {
    handleChangeOverflowBody('hidden');
    search.addClass('mobile');
    search.addClass('mobile');
    searchInput.focus();
  });

  searchClose.click(() => {
    handleChangeOverflowBody('visible');
    search.removeClass('mobile');
    searchResult.removeClass('show');
  });

  searchInput.on('keyup', function () {
    $.trim($(this).val()) ? searchResult.addClass('show') : searchResult.removeClass('show');
  });

  $(window).on('resize', () => {
    if ($(window).width() <= 768) searchResult.removeClass('show');
  });

  $(window).on('click', () => searchResult.removeClass('show'));

  search.on('click', (e) => e.stopPropagation());
});
