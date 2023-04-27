const sidebarContentWrapper = document.querySelectorAll('.sidebar__content-wrapper');
const sidebarDescriptionContent = document.querySelector('.sidebar__description-content');
const sidebarBought = document.querySelector('.sidebar__bought-sidebar-list');
const btnSidebarPanels = document.querySelectorAll('.sidebar__content-item-panel');
const btnSidebarDescription = document.querySelector('.sidebar__description-btn');
const btnBoughtSidebar = document.querySelector('.sidebar__bought-sidebar-btn');

btnSidebarPanels.forEach((btnSidebarPanel, index) => {
  btnSidebarPanel.onclick = (e) => {
    btnSidebarPanel.classList.toggle('open');
    sidebarContentWrapper[index].classList.toggle('open');
  };
});
//  scroll
const sidebar = document.querySelector('.sidebar');
window.onscroll = (e) => {
  let scroll = this.scrollY;

  if (scroll >= 55) {
    sidebar.classList.add('top');
  } else {
    sidebar.classList.remove('top');
  }
};

const content_bottom = document.querySelector('.content__tab--container');
const btn_show = document.querySelector('.btn-show');

btn_show.addEventListener('click', (e) => {
  content_bottom.classList.toggle('open');
  btn_show.classList.toggle('open');
});

// chuyen tab
const tabs = Array.from(document.querySelectorAll('.content__nav-button'));
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    tab.classList.add('active');
    const tabContents = Array.from(document.querySelectorAll('.content__tab'));
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });

    const activeTabContent = document.querySelector(`.content__tab[data-tab="${tabId}"]`);
    activeTabContent.classList.add('active');
  });
});

// select option
const btnSelects = document.querySelectorAll('.content__filter--btn');
const listSelects = document.querySelectorAll('.content__popper-list');
btnSelects.forEach((btnSelect, index) => {
  btnSelect.addEventListener('click', () => {
    listSelects.forEach((select, selectIndex) => {
      select.addEventListener('click', (e) => e.stopPropagation());
      selectIndex === index ? select.classList.toggle('show-select') : select.classList.remove('show-select');
    });
  });
});

btnSelects.forEach((btnSelect) => {
  btnSelect.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

window.addEventListener('click', () => {
  listSelects.forEach((select) => {
    select.classList.remove('show-select');
  });
});
// show comment

const commentUser = document.querySelectorAll('.content__infor--user');
const reviewsUser = document.querySelectorAll('.content__reviews--user');
const btnShowComment = document.querySelector('.content__btn--show-comment');
const btnShowReviews = document.querySelector('.content__review--btn-see-more-reviews');

function showComment() {
  commentUser.forEach((e) => {
    e.classList.remove('disable');
  });
}
btnShowComment.addEventListener('click', showComment);

function showReviews() {
  reviewsUser.forEach((e) => {
    e.classList.remove('disable');
  });
}
btnShowReviews.addEventListener('click', showReviews);

// note handel click
const btnNote = document.querySelector('.content__btn-note');
const btnCancelNote = document.querySelector('.content__btn-cancel');
const formNote = document.querySelector('.content__note-form');
const tabNote = document.querySelector('.content__btn-note');

btnNote.addEventListener('click', () => {
  formNote.classList.remove('disable');
  tabNote.classList.add('disable');
});

btnCancelNote.addEventListener('click', () => {
  formNote.classList.add('disable');
  tabNote.classList.remove('disable');
});
// btn vote
const votes = document.querySelectorAll('.content__review--list-vote');

votes.forEach((iconVote) => {
  const icons = iconVote.querySelectorAll('.content__review--vote-icon');

  icons.forEach((icon) => {
    icon.addEventListener('click', () => {
      icons.forEach((icon) => icon.classList.remove('active-icon'));
      icon.classList.toggle('active-icon');
    });
  });
});

const number = document.querySelector('.content__tools--input-send');

function validatePhoneNumber(input_str) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(input_str);
}

number.addEventListener('input', () => {
  console.log(validatePhoneNumber(number.value));
});

$(document).ready(function () {
  const btnTools = $('.learn__tools-frequency .learn__tools-form-item');

  btnTools.each((index, btnTool) => {
    $(btnTool).click(function (e) {
      e.stopPropagation();

      const toolId = $(this).attr('data-frequency');
      const labelId = $(this).attr('data-label');

      $('.learn__tools-form-list-sub').removeClass('active');
      $(`.learn__tools-form-list-sub[data-frequency="${toolId}"]`).addClass('active');

      $('.learn__tools-form-end').toggleClass('hidden', labelId === 'once');

      if (!$(btnTool).find('input').is(':checked'))
        $('.learn__tools-form-list-sub input').val('').prop('checked', false);
    });
  });
});

// Q&A handel click
const btnAskNew = document.querySelector('.content__btn--ask-new');
const btnBacks = document.querySelectorAll('.content__askmore--btn-back');
const btnBackRalates2 = document.querySelector('.content__question-ralates-2--btn-back');
const btnContinue = document.querySelector('.content__askmore--btn-continue');
const tabAsk = document.querySelector('.content__tab--ask');
const tabAskMore = document.querySelector('.content__tab--askmore');
const tabRalates1 = document.querySelector('.content__tab--question-ralates-1');
const tabRalates2 = document.querySelector('.content__tab--question-ralates-2');

btnAskNew.addEventListener('click', () => {
  tabAsk.classList.add('disable');
  tabAskMore.classList.remove('disable');
});
btnBacks.forEach((btn) => {
  btn.addEventListener('click', () => {
    disableTab();
    tabAsk.classList.remove('disable');
  });
});
btnBackRalates2.addEventListener('click', () => {
  disableTab();
  tabAskMore.classList.remove('disable');
});

btnContinue.addEventListener('click', () => {
  const inputs = document.querySelectorAll('.content__askmore--toggle-icon input');
  inputs.forEach((input, index) => {
    if (input.checked & (index === 0)) {
      disableTab();
      tabRalates1.classList.remove('disable');
    }
    if (input.checked & (index === 1)) {
      disableTab();
      tabRalates2.classList.remove('disable');
    }
  });
});

function disableTab() {
  tabAsk.classList.add('disable');
  tabAskMore.classList.add('disable');
  tabRalates1.classList.add('disable');
  tabRalates2.classList.add('disable');
}
