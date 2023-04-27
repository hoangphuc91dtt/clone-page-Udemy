const courseContentWrapper = document.querySelectorAll('.course__content-wrapper');
const courseBought = document.querySelector('.course__bought-course-list');
const btnCoursePanels = document.querySelectorAll('.course__content-item-panel');
const btnCourseDescription = document.querySelector('.course__description-btn');
const btnBoughtCourse = document.querySelector('.course__bought-course-btn');
const sidebarFixed = document.querySelector('.course__sidebar-fixed');
const courseDescriptionContent = document.querySelector('.course__description-content');
const footer = document.querySelector('.footer');

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

document.onscroll = (e) => {
  let scroll = this.scrollY;

  if (scroll >= 320) {
    sidebarFixed.classList.add('fixed');
  } else {
    sidebarFixed.classList.remove('fixed');
  }
};
