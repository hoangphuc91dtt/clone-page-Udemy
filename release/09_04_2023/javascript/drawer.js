const drawer = document.querySelector('.drawer');
const menu = document.querySelector('.header__menu');
const drawerLevel2Btn = document.querySelector('.drawer__level-2--btn');
const drawerLevel2 = document.querySelector('.drawer__level-2');
const drawerClose = document.querySelector('.drawer__close');
const drawerOverlay = document.querySelector('.drawer__overlay');
const drawerSideBtns = document.querySelectorAll('.drawer__side-btn');

const addShowDrawer = (e) => e.classList.add('show');
const removeShowDrawer = (e) => e.classList.remove('show');
const addRemoveOverflow = (e) => e.classList.add('overflow');
const removeRemoveOverflow = (e) => e.classList.remove('overflow');

drawerSideBtns.forEach((drawerSideBtn) => {
  drawerSideBtn.onclick = () => {
    addShowDrawer(drawerLevel2);
    addRemoveOverflow(drawer);
    document.querySelector('.drawer__side').scrollIntoView();
  };
});

drawerLevel2Btn.onclick = () => {
  removeRemoveOverflow(drawer);
  removeShowDrawer(drawerLevel2);
};

menu.onclick = () => addShowDrawer(drawer);
drawerClose.onclick = () => removeShowDrawer(drawer);
drawerOverlay.onclick = () => removeShowDrawer(drawer);
