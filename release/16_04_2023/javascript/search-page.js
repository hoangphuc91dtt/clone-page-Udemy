$(document).ready(function () {
  const wrapper = $('.search__wrapper');
  const btnFilter = $('.search__control-btn-filter');
  const btnClearFilter = $('.search__control-clear-filter');
  const btnCloseSidebar = $('.search__sidebar-close');
  const sidebarOverlay = $('.search__sidebar-overlay');
  const panelModules = $('.search__panel-module');

  const handleChangeOverflowBody = (overflow) => $(document.body).css('overflow', `${overflow}`);

  btnFilter.click(() => {
    wrapper.toggleClass('extend');
    if ($(window).width() <= 992) handleChangeOverflowBody('hidden');
  });

  btnCloseSidebar.click(() => {
    wrapper.removeClass('extend');
    handleChangeOverflowBody('visible');
  });

  sidebarOverlay.click(() => {
    wrapper.removeClass('extend');
    handleChangeOverflowBody('visible');
  });

  btnClearFilter.click(() => {
    $('.search__panel-label input:checked').prop('checked', false);
    btnClearFilter.css('display', 'none');
  });

  panelModules.each((index, panelModule) => {
    const panelLabels = $(panelModule).find('.search__panel-label');
    const panelContents = $(panelModule).find('.search__panel-content');
    const panelBtn = $(panelModule).find('.search__panel-btn');

    if (panelLabels.length > 4) {
      panelLabels.slice(4).addClass('hidden');
      panelContents.addClass('hidden');
      panelContents.append(
        `<button class="search__panel-btn-toggle">
        <span class="search__panel-btn-toggle--more">Show more</span> 
        <span class="search__panel-btn-toggle--less">Show less</span> 
        <i class="fa-solid fa-chevron-down search__panel-btn-toggle--icon"></i>
      </button>`
      );
    }

    const showToggleButton = $(panelModule).find('.search__panel-btn-toggle');

    showToggleButton.click(() => {
      panelLabels.slice(4).toggleClass('hidden');
      panelContents.toggleClass('hidden');
      showToggleButton.toggleClass('more');
    });

    panelBtn.click(() => {
      $(panelModule).toggleClass('open');
    });

    panelLabels.click(() => {
      if (panelLabels.find('input').is(':checked')) btnClearFilter.css('display', 'block');
      else btnClearFilter.css('display', 'none');
    });
  });

  $(window).on('resize', () => {
    if ($(window).width() > 992) handleChangeOverflowBody('visible');
  });
});
