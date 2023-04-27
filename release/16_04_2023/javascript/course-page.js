const courseContentWrapper = document.querySelectorAll('.course__content-wrapper');
const courseBoughtItem = document.querySelectorAll('.course__bought-course-item');
const courseItem = document.querySelectorAll('.course__content-item');
const courseBought = document.querySelector('.course__bought-course-list');
const btnCoursePanels = document.querySelectorAll('.course__content-item-panel');
const btnCourseDescription = document.querySelector('.course__description-btn');
const btnBoughtCourse = document.querySelector('.course__bought-course-btn');
const btnConentCourse = document.querySelector('.course__content-btn');
const sidebar = document.querySelector('.course__sidebar');
const sidebarFixed = document.querySelector('.course__sidebar-fixed');
const courseDescriptionContent = document.querySelector('.course__description-content');
const footer = document.querySelector('#footer');
const headerFloating = document.querySelector('.header__floating');
const requirementBtn = document.querySelector('.course__requirement-btn');
const requirementList = document.querySelector('.course__requirement-list');

btnCoursePanels.forEach((btnCoursePanel, index) => {
  btnCoursePanel.onclick = (e) => {
    btnCoursePanel.classList.toggle('open');
    courseContentWrapper[index].classList.toggle('open');
  };
});

btnCourseDescription.onclick = (e) => {
  btnCourseDescription.classList.toggle('more');
  courseDescriptionContent.classList.toggle('more');
};

btnBoughtCourse.onclick = (e) => {
  btnBoughtCourse.classList.toggle('more');
  courseBought.classList.toggle('more');
};

requirementBtn.onclick = () => {
  requirementBtn.classList.toggle('show');
  requirementList.classList.toggle('show');
};

document.onscroll = (e) => {
  let scroll = this.scrollY;

  if (scroll >= 320) {
    sidebarFixed.classList.add('fixed');
    headerFloating.classList.add('show');
  } else {
    sidebarFixed.classList.remove('fixed');
    headerFloating.classList.remove('show');
  }

  if (footer.getBoundingClientRect().top <= window.innerHeight) {
    sidebarFixed.classList.remove('fixed');
    sidebar.classList.add('bottom');
  } else {
    sidebar.classList.remove('bottom');
  }
};

function handleToggleCourseBought(list, limit) {
  for (let i = limit; i < list.length; i++)
    list[i].classList.toggle('hidden');
}

handleToggleCourseBought(courseBoughtItem, 4);

btnBoughtCourse.onclick = () => {
  btnBoughtCourse.classList.toggle('more');
  handleToggleCourseBought(courseBoughtItem, 4);
};

handleToggleCourseBought(courseItem, 10);

btnConentCourse.onclick = () => {
  btnConentCourse.style.display = 'none';
  handleToggleCourseBought(courseItem, 10);
};

$('.course__rating-comment').slick({
  responsive: [
    {
      breakpoint: 99999,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<button type='button' class='slider__btn-control slider__btn-prev slick-arrow'><i class="slider__arrow fa-solid fa-angle-left"></i></button>`,
        nextArrow: `<button type='button' class='slider__btn-control slider__btn-next slick-arrow'><i class="slider__arrow fa-solid fa-angle-left"></i></button>`,
      },
    },
  ],
});
